// Public portfolio summary. Keep client-specific processes and configuration
// out of both the rendered page and this browser-delivered content module.
export const projectStoryLinks = { 1: '#/projects/caribbean-goods', 4: '#/projects/loom', 7: '#/projects/portfolio-ux', 19: '#/projects/symma', 20: '#/projects/opeka-pro', 21: '#/projects/pollo-sopero' };

export const caribbeanGoods = {
  title: 'Caribbean Goods',
  introduction: 'A full-stack web platform for a specialty coffee business, connecting its public presence with digital experiences.',
  overview: 'Caribbean Goods is a specialty coffee business. I developed a web platform that brings together its corporate website and digital tools for customers and internal teams.',
  objective: 'Translate business needs into clear, useful interfaces and connected application features.',
  contribution: [
    'My work covered frontend and backend development, interface implementation, data modeling, and cloud integrations.',
    'I also extended existing functionality, focusing on maintainable code and a consistent experience as the application evolved.',
  ],
  modules: [
    { title: 'Public website', label: 'Present', text: 'Responsive pages that introduce the business through its visual identity, content, and clear navigation.' },
    { title: 'Customer experience', label: 'Connect', text: 'Application interfaces that help customers interact with the business through a consistent digital experience.' },
    { title: 'Internal tools', label: 'Support', text: 'Purpose-built interfaces that support the team’s work, translating complex requirements into usable application features.' },
  ],
  challenges: [
    { title: 'Turning requirements into usable interfaces', text: 'Organized complex information into clear layouts, reusable components, and focused interactions.' },
    { title: 'Connecting the full stack', text: 'Brought together interfaces, backend services, and data handling to deliver features across the application.' },
    { title: 'Evolving an existing application', text: 'Introduced improvements with attention to compatibility, maintainability, type checks, builds, and focused testing.' },
  ],
  stack: [
    { label: 'Frontend', tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { label: 'Backend & integrations', tools: ['Node.js', 'Express', 'REST APIs', 'Firebase', 'AWS'] },
    { label: 'Verification', tools: ['Playwright', 'Type checking', 'Production builds'] },
  ],
  outcome: 'The project connects the business’s public web presence with application experiences for customers and internal teams.',
  reflection: 'It demonstrates my ability to translate business requirements into working software and contribute across user experience, frontend development, backend services, and cloud integrations.',
  // Add a public URL only when it is approved for the portfolio.
  liveUrl: null,
};
