import { useEffect, useState } from 'react';
import { CV, EMAIL, GITHUB, LINKEDIN, skillGroups, translations } from './data.js';
import { SiCss, SiDocker, SiGit, SiGithub, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiVirtualbox } from 'react-icons/si';
import { DiWindows } from 'react-icons/di';

const brandIcons = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  git: SiGit,
  github: SiGithub,
  windows: DiWindows,
  virtualbox: SiVirtualbox,
  docker: SiDocker,
  react: SiReact,
  node: SiNodedotjs
};

function Icon({ name, className = '', label }) {
  const base = { className, viewBox: '0 0 24 24', fill: 'none' };
  const accessible = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' };
  const stroke = { stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const BrandIcon = brandIcons[name];

  if (BrandIcon) return <BrandIcon className={className} {...accessible} />;

  switch (name) {
    case 'location': return <svg {...base} {...accessible} {...stroke}><path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z" /><circle cx="12" cy="9" r="2.4" /></svg>;
    case 'mail': return <svg {...base} {...accessible} {...stroke}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
    case 'cv': return <svg {...base} {...accessible} {...stroke}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>;
    case 'github': return <svg {...base} {...accessible} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84.12 1.91.12 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" /></svg>;
    case 'linkedin': return <svg {...base} {...accessible} viewBox="0 0 24 24" fill="currentColor"><path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.4 9.4h3.6v11.1H3.4V9.4Zm5.8 0h3.5v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v5.9h-3.6v-5.2c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.3H9.2V9.4Z" /></svg>;
    case 'menu': return <svg {...base} {...accessible} {...stroke}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
    case 'close': return <svg {...base} {...accessible} {...stroke}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case 'server': return <svg {...base} {...accessible} {...stroke}><rect x="5" y="4" width="14" height="7" rx="1.5" /><rect x="5" y="13" width="14" height="7" rx="1.5" /><path d="M8 7.5h.01M8 16.5h.01" /></svg>;
    case 'monitor': return <svg {...base} {...accessible} {...stroke}><rect x="4" y="4" width="16" height="13" rx="2" /><path d="M8 20h8M12 17v3M8 8h8M8 11h5" /></svg>;
    case 'virtualbox': return <svg {...base} {...accessible} {...stroke}><path d="m7 5 5-2 5 2 3 5-3 9-5 2-5-2-3-9 3-5Z" /><path d="m9 8 3-1 3 1 1.5 3-1.5 5-3 1-3-1-1.5-5L9 8Z" /></svg>;
    case 'network': return <svg {...base} {...accessible} {...stroke}><circle cx="12" cy="12" r="2.5" /><circle cx="5" cy="7" r="1.5" /><circle cx="19" cy="7" r="1.5" /><circle cx="5" cy="17" r="1.5" /><circle cx="19" cy="17" r="1.5" /><path d="m6.3 7.8 3.5 2.8m4.4 0 3.5-2.8M9.8 13.4l-3.5 2.8m7.9-2.8 3.5 2.8" /></svg>;
    case 'chip': return <svg {...base} {...accessible} {...stroke}><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4M9 9h6v6H9z" /></svg>;
    case 'windows': return <svg {...base} {...accessible} viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h11.25v11.25H0zm12.75 0H24v11.25H12.75zM0 12.75h11.25V24H0zm12.75 0H24V24H12.75z" /></svg>;
    case 'support': return <svg {...base} {...accessible} {...stroke}><path d="M4 6.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-5 3v-6.5Z" /><path d="M8 9h.01M12 9h.01M16 9h.01" /></svg>;
    case 'office': return <svg {...base} {...accessible} viewBox="0 0 24 24" fill="currentColor"><path d="M21.16 2.45H9.7a1.16 1.16 0 0 0-1.16 1.16v2.33H2.84A1.16 1.16 0 0 0 1.68 7.1v9.8a1.16 1.16 0 0 0 1.16 1.16h5.7v2.34a1.16 1.16 0 0 0 1.16 1.15h11.46a1.16 1.16 0 0 0 1.16-1.15V3.61a1.16 1.16 0 0 0-1.16-1.16zm-11.46 2.32h10.3v14.46H9.7V18.1h3.14a1.16 1.16 0 0 0 1.16-1.16V7.1a1.16 1.16 0 0 0-1.16-1.16H9.7z" /></svg>;
    case 'html': return <svg {...base} {...accessible}><path d="M4 3.5h16l-1.6 13.5L12 21l-6.4-4L4 3.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><text x="12" y="14.8" fill="#0b0b0b" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10.5" textAnchor="middle">5</text></svg>;
    case 'css': return <svg {...base} {...accessible}><path d="M4 3.5h16l-1.6 13.5L12 21l-6.4-4L4 3.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><text x="12" y="14.8" fill="#0b0b0b" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10.5" textAnchor="middle">3</text></svg>;
    case 'javascript': return <span className="js-mark" aria-hidden="true">JS</span>;
    case 'csharp': return <svg {...base} {...accessible} style={{ width: '1.5rem', height: '1.5rem' }}><title>C#</title><path d="M12 1.5 20.66 6.5v10L12 21.5 3.34 16.5v-10L12 1.5Z" fill="currentColor" /><path d="M10.2 9.8A3 3 0 0 0 8 8.9c-1.6 0-2.8 1.2-2.8 2.9s1.2 2.9 2.8 2.9a3 3 0 0 0 2.2-.9M14.2 9.3l-.8 5m3.9-5-.8 5m-3.9-3.2h5m-5.3 2h5" stroke="#0b0b0b" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case 'git': return <svg {...base} {...accessible} viewBox="0 0 24 24" fill="currentColor"><path d="m21.62 11.06-8.68-8.68a1.3 1.3 0 0 0-1.84 0L9.2 4.28l2.33 2.33a1.55 1.55 0 0 1 1.96 1.97l2.24 2.24a1.55 1.55 0 1 1-.93.93l-2.1-2.1v5.54a1.56 1.56 0 1 1-1.28-.06V9.47a1.55 1.55 0 0 1-.84-2.03L8.3 5.13 2.38 11.06a1.3 1.3 0 0 0 0 1.84l8.68 8.68a1.3 1.3 0 0 0 1.84 0l8.72-8.68a1.3 1.3 0 0 0 0-1.84Z" /></svg>;
    case 'code': return <svg {...base} {...accessible} {...stroke}><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></svg>;
    case 'database': return <svg {...base} {...accessible} {...stroke}><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 1.66 3.13 3 7 3s7-1.34 7-3V5M5 12v7c0 1.66 3.13 3 7 3s7-1.34 7-3v-7" /></svg>;
    case 'fire': return <svg {...base} {...accessible} viewBox="0 0 16 16" fill="currentColor"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" /></svg>;
    default: return null;
  }
}

function ExternalLink({ href, children, className = '', ariaLabel }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>{children}</a>;
}

function Navbar({ t, language, onLanguageChange }) {
  const [open, setOpen] = useState(false);
  const links = [[t.nav.about, '#sobre-mi'], [t.nav.experience, '#experiencia'], [t.nav.skills, '#habilidades'], [t.nav.projects, '#proyectos'], [t.nav.education, '#formacion']];
  const close = () => setOpen(false);
  return <nav className="site-nav" aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>
    <div className="shell nav-inner"><a className="nav-brand" href="#inicio">Andrés Molina<span>.</span></a><div className="nav-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><div className="nav-tools"><a className="nav-contact" href={CV} target="_blank" rel="noopener noreferrer" title={t.nav.cv}>{t.nav.cv}</a><a className="nav-contact" href="#contacto">{t.nav.contactArrow}</a><button className="language-toggle" type="button" onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')} aria-pressed={language === 'en'} aria-label={language === 'es' ? t.language.switchToEnglish : t.language.switchToSpanish}>{language === 'es' ? 'EN' : 'ES'}</button><button className="mobile-nav-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.menu.close : t.menu.open}><Icon name={open ? 'close' : 'menu'} /></button></div></div>
    <div id="mobile-nav" className={`shell mobile-nav ${open ? 'open' : ''}`}>{links.concat([[t.nav.cv, CV], [t.nav.contact, '#contacto']]).map(([label, href]) => href === CV ? <a key={href} href={href} target="_blank" rel="noopener noreferrer" onClick={close}>{label}</a> : <a key={href} href={href} onClick={close}>{label}</a>)}</div>
  </nav>;
}

function Hero({ t }) {
  return <header className="profile-header reveal"><div className="profile-avatar"><img src="/img/Perfil.webp" alt="Fotografía de Andrés Eduardo Molina Ramírez" /></div><div><div className="eyebrow">{t.hero.availability}</div><h1 className="profile-name">Andrés Eduardo Molina Ramírez</h1><p className="profile-role">{t.hero.role}</p><p className="profile-location"><Icon name="location" />{t.hero.location}</p><div className="profile-actions"><a className="contact-pill" href={`mailto:${EMAIL}`}><Icon name="mail" />{EMAIL}</a><a className="icon-action icon-action-small" href={CV} target="_blank" rel="noopener noreferrer" aria-label={t.hero.cv}><Icon name="cv" /></a><ExternalLink className="icon-action" href={GITHUB} ariaLabel={t.hero.github}><Icon name="github" /></ExternalLink><ExternalLink className="icon-action" href={LINKEDIN} ariaLabel={t.hero.linkedin}><Icon name="linkedin" /></ExternalLink><span className="availability">{t.hero.experience}</span></div></div></header>;
}

function About({ t }) {
  return <section id="sobre-mi" className="about-section section-divider reveal" aria-labelledby="about-title"><h2 id="about-title" className="section-heading">{t.about.title}</h2><p className="about-copy">{t.about.paragraphOne}</p><p className="about-copy">{t.about.paragraphTwo}</p><div className="about-facts" aria-label={t.about.title}>{t.about.facts.map((fact, index) => <span className="fact" key={fact}><strong>0{index + 1}</strong> {fact}</span>)}</div></section>;
}

function TechnologyStack({ t }) {
  const learningTools = [{ label: 'Docker', icon: 'docker' }, { label: 'React', icon: 'react' }, { label: 'Node.js', icon: 'node' }];
  return <section id="habilidades" className="skills-section section-divider reveal" aria-labelledby="skills-title"><h2 id="skills-title" className="stack-heading"><Icon name="fire" /><span>{t.skills.title}</span></h2><div className="skill-groups">{skillGroups.map((group, groupIndex) => <div className="skill-group" key={t.skills.groups[groupIndex]}><h3 className="skill-group-title">{t.skills.groups[groupIndex]}</h3><div className="skill-row">{group.items.map((item) => <div className="skill-item group" key={item.label}><Icon name={item.icon} /><span>{item.label}</span></div>)}</div></div>)}<div className="skill-group learning-group"><h3 className="skill-group-title">{t.skills.learning}</h3><div className="skill-row">{learningTools.map((item) => <div className="skill-item group" key={item.label}><Icon name={item.icon} /><span>{item.label}</span></div>)}</div></div></div></section>;
}

function Experience({ t }) {
  return <section id="experiencia" className="experience-section reveal" aria-labelledby="experience-title"><h2 id="experience-title" className="section-heading">{t.experience.title}</h2><div className="record-list"><article className="record featured"><div className="record-icon record-logo"><img src="/img/Creativa.webp" alt="Creativa RAAL Industrial" /></div><div><h3 className="record-title">{t.experience.company}</h3><p className="record-subtitle">{t.experience.subtitle}</p><p className="record-description">{t.experience.description}</p><div className="record-tags">{t.experience.tags.map((tag) => <span className="record-tag" key={tag}>{tag}</span>)}</div></div><span className="record-date">{t.experience.date}</span></article></div></section>;
}

function ProjectVisual({ project }) {
  if (project.image) return <div className="project-visual project-image-frame"><img className="project-image" src={project.image} alt={project.imageAlt} /></div>;
  if (project.visual === 'terminal') return <div className="project-visual" role="img" aria-label={project.visualAlt}><div className="visual-window"><div className="window-bar"><i /><i /><i /></div><div className="terminal-lines"><span /><span /><span /><span /><span /></div></div></div>;
  return <div className="project-visual" role="img" aria-label={project.visualAlt}><div className="network-map"><div className="network-node"><Icon name="server" /></div><div className="network-node"><Icon name="monitor" /></div><div className="network-node"><Icon name="monitor" /></div></div></div>;
}

function Projects({ t }) {
  return <section id="proyectos" className="projects-section reveal" aria-labelledby="projects-title"><h2 id="projects-title" className="section-heading">{t.projects.title}</h2><div className="project-list">{t.projects.items.map((project, index) => <article className="project" key={project.title}><div className="project-icon"><Icon name={index === 0 ? 'database' : index === 1 ? 'code' : 'network'} /></div><div><p className="project-kicker">{project.kicker}</p><h3 className="project-title">{project.title}</h3><p className="project-summary"><strong>{t.projects.problem}</strong> {project.problem} <strong>{t.projects.solution}</strong> {project.solution}</p><div className="project-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a className="icon-action project-link" href={`mailto:${EMAIL}?subject=${encodeURIComponent(project.subject)}`}>{index === 0 ? t.projects.details : t.projects.case} <span aria-hidden="true">↗</span></a><ExternalLink className="icon-action project-link" href={project.repo || GITHUB}>{t.projects.github} <span aria-hidden="true">↗</span></ExternalLink></div></div><ProjectVisual project={project} /></article>)}</div></section>;
}

function Education({ t }) {
  return <section id="formacion" className="education-section reveal" aria-labelledby="education-title"><h2 id="education-title" className="section-heading">{t.education.title}</h2><div className="record-list">{t.education.items.map((item) => <article className="record" key={item.institution}><div className="record-icon record-logo"><img src={item.image} alt={item.alt} /></div><div><h3 className="record-title">{item.title}</h3><p className="record-subtitle">{item.institution}</p><p className="education-note"><strong>{item.noteLead}</strong> {item.note}</p></div><span className="record-date">{item.date}</span></article>)}</div></section>;
}

function ContactFooter({ t }) {
  return <footer id="contacto" className="shell contact-footer reveal" aria-labelledby="contact-title"><h2 id="contact-title" className="footer-label">{t.footer.title}</h2><div className="footer-meta"><a className="contact-pill" href={`mailto:${EMAIL}`}><Icon name="mail" />{EMAIL}</a><a className="icon-action footer-cv" href={CV} target="_blank" rel="noopener noreferrer" title={t.footer.cv} aria-label={t.footer.cv}><Icon name="cv" /></a><ExternalLink className="icon-action" href={GITHUB} ariaLabel={t.footer.github}><Icon name="github" /></ExternalLink><ExternalLink className="icon-action" href={LINKEDIN} ariaLabel={t.footer.linkedin}><Icon name="linkedin" /></ExternalLink><span className="availability">{t.footer.location}</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Andrés Eduardo Molina Ramírez</span><a href="#inicio">{t.footer.back}</a></div></footer>;
}

export default function App() {
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'es' ? 'Andrés Eduardo Molina Ramírez · Portafolio' : 'Andrés Eduardo Molina Ramírez · Portfolio';
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <><Navbar t={t} language={language} onLanguageChange={setLanguage} /><main id="inicio" className="shell"><Hero t={t} /><About t={t} /><TechnologyStack t={t} /><Experience t={t} /><Projects t={t} /><Education t={t} /></main><ContactFooter t={t} /></>;
}
