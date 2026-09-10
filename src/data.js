export const EMAIL = 'andresmolina.sys@outlook.com';
export const GITHUB = 'https://github.com/AndresMolina-Sys';
export const LINKEDIN = 'https://www.linkedin.com/in/andresmolina-sys';
export const CV = '/docs/CV_AndrésMolina_2026.pdf';

export const translations = {
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', skills: 'Tecnologías', projects: 'Proyectos', education: 'Formación', cv: 'Mi CV', contact: 'Contacto', contactArrow: 'Contacto ↗' },
    menu: { open: 'Abrir menú', close: 'Cerrar menú' },
    language: { switchToEnglish: 'Cambiar a inglés', switchToSpanish: 'Cambiar a español' },
    hero: {
      availability: 'Disponible para contratación / proyectos',
      role: 'Ingeniero de Sistemas / IT Specialist & Consultor Freelance',
      location: 'Cartago, Costa Rica',
      experience: '4 años de experiencia independiente',
      cv: 'Abrir CV de Andrés Molina',
      github: 'Visitar GitHub de Andrés Molina',
      linkedin: 'Visitar LinkedIn de Andrés Molina'
    },
    about: {
      title: 'Sobre mí',
      paragraphOne: 'Profesional en TI con cuatro años de experiencia independiente y freelance brindando soporte técnico especializado, optimización de infraestructura, despliegue de entornos virtuales y desarrollo de interfaces web.',
      paragraphTwo: 'Proactivo, con capacidad de autogestión y nivel de inglés B2. Me enfoco en convertir problemas operativos en soluciones claras, documentadas y sostenibles para las personas y equipos que las utilizan.',
      facts: ['Infraestructura', 'Virtualización', 'Redes y soporte', 'Interfaces web']
    },
    skills: { title: 'Stack tecnológico', groups: ['Infraestructura y Virtualización', 'Sistemas y Soporte', 'Desarrollo y Herramientas'], learning: 'Actualmente aprendiendo' },
    experience: {
      title: 'Experiencia', company: 'Creativa RAAL Industrial', subtitle: 'Caso destacado · soporte técnico y virtualización',
      description: 'Acompañamiento para garantizar continuidad operativa, resolver incidencias y preparar entornos virtuales de prueba para administrar recursos con mayor control.',
      tags: ['Cliente industrial', 'Continuidad operativa', 'Entornos virtuales'], date: 'Nov 2021 — Actualidad'
    },
    projects: {
      title: 'Proyectos', problem: 'Problema:', solution: 'Solución:', details: 'Detalles', case: 'Caso', github: 'GitHub',
      items: [
        { kicker: '01 / DESARROLLO DE SOFTWARE', title: 'Sistema de Control de Inventario (CRUD)', problem: 'registro manual y descentralizado de existencias propenso a inconsistencias.', solution: 'aplicación de escritorio para la administración centralizada del inventario con persistencia en base de datos relacional y transacciones en tiempo real.', tech: ['C#', 'XAML / WPF', 'SQL Server'], subject: 'Consulta sobre Sistema de Control de Inventario', repo: 'https://github.com/AndresMolina-Sys/InventarioApp', image: '/img/proyecto-inventario.webp', imageAlt: 'Panel de control del Sistema de Control de Inventario' },
        { kicker: '02 / Desarrollo web', title: 'Módulos web para procesos internos', problem: 'tareas internas dispersas y poco visibles.', solution: 'interfaces ligeras para centralizar información y mejorar el flujo de trabajo.', tech: ['HTML5', 'CSS3', 'JavaScript'], subject: 'Consulta sobre Módulos web', visual: 'terminal', visualAlt: 'Visual abstracto de una interfaz web interna' },
        { kicker: '03 / Soporte TI', title: 'Infraestructura y migración de red y endpoints', problem: 'equipos y sistemas con necesidades distintas.', solution: 'migración, mantenimiento y soporte de endpoints Windows con una operación más consistente.', tech: ['Windows 7–11', 'Redes', 'Hardware'], subject: 'Consulta sobre Infraestructura y migración', visual: 'network', visualAlt: 'Visual abstracto de una red conectando equipos y servidores' }
      ]
    },
    education: {
      title: 'Formación',
      items: [
        { title: 'Bachillerato en Ingeniería de Sistemas', institution: 'Universidad Americana de Costa Rica', noteLead: 'Formación universitaria', note: 'en sistemas, tecnología y resolución de problemas.', date: 'Abril 2026', image: '/img/UAM.webp', alt: 'Universidad Americana de Costa Rica' },
        { title: 'Técnico en Redes de Computadoras y Educación Diversificada', institution: 'CTP Fernando Volio Jiménez', noteLead: 'Fundamentos', note: 'de conectividad, infraestructura y operación de redes.', date: 'Enero 2022', image: '/img/CTP.webp', alt: 'CTP Fernando Volio Jiménez' }
      ]
    },
    footer: { title: 'Contacto', cv: 'Ver CV', github: 'Visitar GitHub de Andrés Molina', linkedin: 'Visitar LinkedIn de Andrés Molina', location: 'Cartago, Costa Rica', back: 'Volver arriba ↑' }
  },
  en: {
    nav: { about: 'About me', experience: 'Experience', skills: 'Technologies', projects: 'Projects', education: 'Education', cv: 'My CV', contact: 'Contact', contactArrow: 'Contact ↗' },
    menu: { open: 'Open menu', close: 'Close menu' },
    language: { switchToEnglish: 'Cambiar a inglés', switchToSpanish: 'Switch to Spanish' },
    hero: {
      availability: 'Available for hiring / projects',
      role: 'Systems Engineer / IT Specialist & Freelance Consultant',
      location: 'Cartago, Costa Rica',
      experience: '4 years of independent experience',
      cv: 'Open Andrés Molina CV',
      github: 'Visit Andrés Molina GitHub',
      linkedin: 'Visit Andrés Molina LinkedIn'
    },
    about: {
      title: 'About me',
      paragraphOne: 'IT professional with four years of independent and freelance experience providing specialized technical support, infrastructure optimization, virtual environment deployment, and web interface development.',
      paragraphTwo: 'Proactive and self-managed, with B2 English proficiency. I focus on turning operational challenges into clear, documented, and sustainable solutions for the people and teams who use them.',
      facts: ['Infrastructure', 'Virtualization', 'Networking & support', 'Web interfaces']
    },
    skills: { title: 'Technology stack', groups: ['Infrastructure & Virtualization', 'Systems & Support', 'Development & Tools'], learning: 'Currently learning' },
    experience: {
      title: 'Experience', company: 'Creativa RAAL Industrial', subtitle: 'Featured case · technical support and virtualization',
      description: 'Support to ensure operational continuity, resolve incidents, and prepare virtual test environments for better resource control.',
      tags: ['Industrial client', 'Operational continuity', 'Virtual environments'], date: 'Nov 2021 — Present'
    },
    projects: {
      title: 'Projects', problem: 'Problem:', solution: 'Solution:', details: 'Details', case: 'Case', github: 'GitHub',
      items: [
        { kicker: '01 / SOFTWARE DEVELOPMENT', title: 'Inventory Control System (CRUD)', problem: 'manual and decentralized stock records prone to inconsistencies.', solution: 'desktop application for centralized inventory management with relational database persistence and real-time transactions.', tech: ['C#', 'XAML / WPF', 'SQL Server'], subject: 'Inventory Control System inquiry', repo: 'https://github.com/AndresMolina-Sys/InventarioApp', image: '/img/proyecto-inventario.webp', imageAlt: 'Inventory Control System dashboard' },
        { kicker: '02 / Web development', title: 'Web modules for internal processes', problem: 'scattered and hard-to-track internal tasks.', solution: 'lightweight interfaces to centralize information and improve workflow.', tech: ['HTML5', 'CSS3', 'JavaScript'], subject: 'Web modules inquiry', visual: 'terminal', visualAlt: 'Abstract visual of an internal web interface' },
        { kicker: '03 / IT support', title: 'Network and endpoint infrastructure migration', problem: 'equipment and systems with different needs.', solution: 'Windows endpoint migration, maintenance, and support for more consistent operations.', tech: ['Windows 7–11', 'Networking', 'Hardware'], subject: 'Infrastructure and migration inquiry', visual: 'network', visualAlt: 'Abstract visual of a network connecting devices and servers' }
      ]
    },
    education: {
      title: 'Education',
      items: [
        { title: "Bachelor's Degree in Systems Engineering", institution: 'Universidad Americana de Costa Rica', noteLead: 'University education', note: 'in systems, technology, and problem solving.', date: 'April 2026', image: '/img/UAM.webp', alt: 'Universidad Americana de Costa Rica' },
        { title: 'Computer Networking Technician and General Education', institution: 'CTP Fernando Volio Jiménez', noteLead: 'Foundations', note: 'of connectivity, infrastructure, and network operations.', date: 'January 2022', image: '/img/CTP.webp', alt: 'CTP Fernando Volio Jiménez' }
      ]
    },
    footer: { title: 'Contact', cv: 'View CV', github: 'Visit Andrés Molina GitHub', linkedin: 'Visit Andrés Molina LinkedIn', location: 'Cartago, Costa Rica', back: 'Back to top ↑' }
  }
};

export const skillGroups = [
  { items: [{ label: 'Microsoft Hyper-V', icon: 'monitor' }, { label: 'Oracle VirtualBox', icon: 'virtualbox' }, { label: 'Redes de Computadoras', icon: 'network' }, { label: 'Mantenimiento de Hardware', icon: 'chip' }] },
  { items: [{ label: 'Windows (7 / 10 / 11)', icon: 'windows' }, { label: 'Soporte Técnico L1/L2', icon: 'support' }, { label: 'Suite Microsoft Office', icon: 'office' }] },
  { items: [{ label: 'HTML', icon: 'html' }, { label: 'CSS', icon: 'css' }, { label: 'JavaScript', icon: 'javascript' }, { label: 'C#', icon: 'csharp' }, { label: 'SQL', icon: 'database' }, { label: 'Git', icon: 'git' }, { label: 'GitHub', icon: 'github' }] }
];
