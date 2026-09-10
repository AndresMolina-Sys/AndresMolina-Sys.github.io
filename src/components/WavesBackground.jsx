import { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

const POINT_GAP = 8;

export default function WavesBackground({
  strokeColor = '#f97316',
  backgroundColor = '#0b0b0b',
  pointerSize = 0.35
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const mouseRef = useRef({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    vs: 0,
    a: 0,
    set: false,
    active: false
  });
  const pathsRef = useRef([]);
  const linesRef = useRef([]);
  const animationRef = useRef(null);
  const boundsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return undefined;

    const noise = createNoise2D();

    const createLines = () => {
      const bounds = boundsRef.current;
      if (!bounds) return;

      pathsRef.current.forEach((path) => path.remove());
      pathsRef.current = [];
      linesRef.current = [];

      const totalLines = Math.ceil((bounds.width + 200) / POINT_GAP);
      const totalPoints = Math.ceil((bounds.height + 30) / POINT_GAP);
      const xStart = (bounds.width - POINT_GAP * totalLines) / 2;
      const yStart = (bounds.height - POINT_GAP * totalPoints) / 2;

      for (let lineIndex = 0; lineIndex < totalLines; lineIndex += 1) {
        const points = [];
        for (let pointIndex = 0; pointIndex < totalPoints; pointIndex += 1) {
          points.push({
            x: xStart + POINT_GAP * lineIndex,
            y: yStart + POINT_GAP * pointIndex,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 }
          });
        }

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', strokeColor);
        path.setAttribute('stroke-opacity', '0.24');
        path.setAttribute('stroke-width', '1');
        svg.appendChild(path);
        pathsRef.current.push(path);
        linesRef.current.push(points);
      }
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      boundsRef.current = bounds;
      svg.setAttribute('width', String(bounds.width));
      svg.setAttribute('height', String(bounds.height));
      svg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
      createLines();
    };

    const updateMouse = (x, y) => {
      const bounds = boundsRef.current;
      if (!bounds) return;

      const mouse = mouseRef.current;
      mouse.x = x - bounds.left;
      mouse.y = y - bounds.top;
      mouse.active = true;

      if (!mouse.set) {
        mouse.sx = mouse.x;
        mouse.sy = mouse.y;
        mouse.lx = mouse.x;
        mouse.ly = mouse.y;
        mouse.set = true;
      }

      container.style.setProperty('--x', `${mouse.sx}px`);
      container.style.setProperty('--y', `${mouse.sy}px`);
    };

    const onMouseMove = (event) => updateMouse(event.clientX, event.clientY);
    const onTouchMove = (event) => {
      const touch = event.touches[0];
      if (touch) updateMouse(touch.clientX, touch.clientY);
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const motionScale = reducedMotion ? 0.38 : 1;

    const movePoints = (time) => {
      const mouse = mouseRef.current;
      linesRef.current.forEach((points) => {
        points.forEach((point) => {
          const movement = noise(
            (point.x + time * 0.04) * 0.003,
            (point.y + time * 0.02) * 0.002
          ) * 8;

          point.wave.x = Math.cos(movement) * 12;
          point.wave.y = Math.sin(movement) * 6;

          const dx = point.x - mouse.sx;
          const dy = point.y - mouse.sy;
          const distance = Math.hypot(dx, dy);
          const radius = 260;

          if (mouse.active && distance < radius) {
            const strength = 1 - distance / radius;
            const safeDistance = Math.max(distance, 1);
            const push = strength * 0.12;
            const motionPush = strength * Math.min(mouse.vs, 30) * 0.014;
            point.cursor.vx += (dx / safeDistance) * push + Math.cos(mouse.a) * motionPush;
            point.cursor.vy += (dy / safeDistance) * push + Math.sin(mouse.a) * motionPush;
          }

          point.cursor.vx += -point.cursor.x * 0.015;
          point.cursor.vy += -point.cursor.y * 0.015;
          point.cursor.vx *= 0.93;
          point.cursor.vy *= 0.93;
          point.cursor.x = Math.max(-50, Math.min(50, point.cursor.x + point.cursor.vx));
          point.cursor.y = Math.max(-50, Math.min(50, point.cursor.y + point.cursor.vy));
        });
      });
    };

    const drawLines = () => {
      linesRef.current.forEach((points, lineIndex) => {
        const path = pathsRef.current[lineIndex];
        if (!path || points.length < 2) return;

        const first = points[0];
        let pathData = `M ${first.x + first.wave.x} ${first.y + first.wave.y}`;
        for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
          const point = points[pointIndex];
          pathData += ` L ${point.x + point.wave.x + point.cursor.x} ${point.y + point.wave.y + point.cursor.y}`;
        }
        path.setAttribute('d', pathData);
      });
    };

    const tick = (time) => {
      const mouse = mouseRef.current;
      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;

      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const distance = Math.hypot(dx, dy);
      mouse.vs += (distance - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);

      container.style.setProperty('--x', `${mouse.sx}px`);
      container.style.setProperty('--y', `${mouse.sy}px`);

      movePoints(time * motionScale);
      drawLines();
      animationRef.current = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      pathsRef.current.forEach((path) => path.remove());
      pathsRef.current = [];
      linesRef.current = [];
    };
  }, [strokeColor]);

  return (
    <div ref={containerRef} className="waves-background" aria-hidden="true" style={{ backgroundColor, '--x': '-10px', '--y': '0px' }}>
      <svg ref={svgRef} className="waves-svg" xmlns="http://www.w3.org/2000/svg" />
      <span
        className="waves-pointer"
        style={{
          width: `${pointerSize}rem`,
          height: `${pointerSize}rem`,
          backgroundColor: strokeColor
        }}
      />
    </div>
  );
}
