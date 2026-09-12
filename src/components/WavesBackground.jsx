import { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

const LINE_GAP = 16;
const POINT_GAP = 16;
const EDGE_BUFFER = 120;

export default function WavesBackground({
  strokeColor = '#737373',
  backgroundColor = '#0b0b0b'
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -EDGE_BUFFER,
    y: -EDGE_BUFFER,
    targetX: -EDGE_BUFFER,
    targetY: -EDGE_BUFFER,
    active: false
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: false });
    if (!container || !canvas || !context) return undefined;

    const noise = createNoise2D();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const motionScale = reducedMotion ? 0.38 : 1;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;
    let lines = [];
    let animationFrame = null;

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      context.lineWidth = 1;
      context.lineJoin = 'round';
      context.lineCap = 'round';

      lines = [];
      for (let x = -EDGE_BUFFER; x <= width + EDGE_BUFFER; x += LINE_GAP) {
        const points = [];
        for (let y = -EDGE_BUFFER; y <= height + EDGE_BUFFER; y += POINT_GAP) {
          points.push({ x, y });
        }
        lines.push(points);
      }
    };

    const onMouseMove = (event) => {
      const bounds = container.getBoundingClientRect();
      mouseRef.current.targetX = event.clientX - bounds.left;
      mouseRef.current.targetY = event.clientY - bounds.top;
      mouseRef.current.active = true;
    };

    const onTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      const bounds = container.getBoundingClientRect();
      mouseRef.current.targetX = touch.clientX - bounds.left;
      mouseRef.current.targetY = touch.clientY - bounds.top;
      mouseRef.current.active = true;
    };

    const draw = (time) => {
      const elapsed = time * 0.001 * motionScale;
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, width, height);
      context.strokeStyle = strokeColor;
      context.globalAlpha = 0.12;

      lines.forEach((points) => {
        context.beginPath();

        points.forEach((point, pointIndex) => {
          const noiseValue = noise(
            (point.x + elapsed * 42) * 0.003,
            (point.y + elapsed * 22) * 0.002
          );
          const waveX = Math.cos(noiseValue * Math.PI) * 8;
          const waveY = Math.sin(noiseValue * Math.PI) * 4;
          const dx = point.x - mouse.x;
          const dy = point.y - mouse.y;
          const distance = Math.hypot(dx, dy);
          const influence = mouse.active ? Math.max(0, 1 - distance / 240) ** 2 : 0;
          const safeDistance = Math.max(distance, 1);
          const ripple = Math.sin(distance * 0.055 - elapsed * 5.5) * influence * 18;
          const cursorX = (dx / safeDistance) * ripple;
          const cursorY = (dy / safeDistance) * ripple * 0.72;
          const x = point.x + waveX + cursorX;
          const y = point.y + waveY + cursorY;

          if (pointIndex === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        });

        context.stroke();
      });

      if (mouse.active) {
        context.globalAlpha = 0.38;
        context.fillStyle = strokeColor;
        context.shadowColor = strokeColor;
        context.shadowBlur = 10;
        context.beginPath();
        context.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }

      context.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    animationFrame = requestAnimationFrame(draw);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [backgroundColor, strokeColor]);

  return (
    <div ref={containerRef} className="waves-background" aria-hidden="true" style={{ backgroundColor }}>
      <canvas ref={canvasRef} className="waves-canvas" />
    </div>
  );
}
