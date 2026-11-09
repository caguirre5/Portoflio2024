import caribbean from "../assets/projects/WEB_Caribbean.png";
import automation from "../assets/expertise/automation.svg";
import systems from "../assets/expertise/systems.svg";
import product from "../assets/expertise/product.svg";

// Replace visual.src and visual.alt when project-specific images are available.
export const expertise = [
  {
    id: 'software', title: 'Software Development', icon: 'code', accent: '#67e8f9',
    gradient: 'linear-gradient(145deg, #087caa, #125781)',
    preview: 'Building web and mobile applications, from intuitive interfaces to real functionality.',
    heading: 'From ideas to working applications.',
    description: [
      'I enjoy turning ideas into functional digital products. My experience includes building responsive interfaces, developing web applications, and connecting them with backend services.',
      "I've worked with React, TypeScript, React Native, and Firebase, bringing together different technologies to create useful digital experiences.",
    ],
    tagsLabel: 'Technologies', tags: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    relatedLabel: 'Related work', related: ['Caribbean Goods', 'Nomadia'],
    visual: { src: caribbean, alt: 'Caribbean Goods website showing its coffee import business and illustrated interface', caption: 'Caribbean Goods', note: 'Project screenshot', placeholder: false },
  },
  {
    id: 'ai', title: 'AI & Automation', icon: 'spark', accent: '#99f6e4',
    gradient: 'linear-gradient(145deg, #0b777e, #16516e)',
    preview: 'Exploring how AI and automation can make everyday tasks easier.',
    heading: 'Making technology work smarter.',
    description: [
      "I'm interested in using artificial intelligence and automation to solve practical problems. I'm exploring how AI-powered features can be integrated into applications to process information, simplify tasks, and create more helpful user experiences.",
      'I enjoy experimenting with new technologies and learning how to turn AI concepts into practical applications.',
    ],
    tagsLabel: 'Focus areas', tags: ['AI Integration', 'Python', 'APIs', 'Workflow Automation', 'Intelligent Applications'],
    relatedLabel: 'Current interests', related: ['AI-powered applications and automation'],
    visual: { src: automation, alt: 'Concept diagram linking information, context, tools, and actions through an intelligent workflow', caption: 'Connecting ideas to action', note: 'Concept visual · Replaceable placeholder', placeholder: true },
  },
  {
    id: 'data', title: 'Data & Systems', icon: 'database', accent: '#93c5fd',
    gradient: 'linear-gradient(145deg, #245eac, #183d71)',
    preview: 'Working with data, databases, and the systems behind digital products.',
    heading: 'Understanding what happens behind the interface.',
    description: [
      'My background includes professional experience in data engineering within the banking sector, working with SQL, ETL processes, and data transformation.',
      'This experience helped me understand how information moves between systems, how databases support business operations, and why reliable data is essential for digital applications.',
    ],
    tagsLabel: 'Technologies', tags: ['SQL', 'Python', 'PostgreSQL', 'MySQL', 'ETL', 'Data Processing'],
    relatedLabel: 'Related experience', related: ['Data Engineering', 'Banking sector'],
    visual: { src: systems, alt: 'Concept diagram of a data pipeline from source through transformation and storage to delivery', caption: 'Reliable data. Connected systems.', note: 'Concept visual · Replaceable placeholder', placeholder: true },
  },
  {
    id: 'product', title: 'Product & Innovation', icon: 'layers', accent: '#a5d8ff',
    gradient: 'linear-gradient(145deg, #326895, #234767)',
    preview: 'Connecting technology, design, and business to solve real problems.',
    heading: 'Thinking beyond the code.',
    description: [
      'I believe good digital products start with understanding real problems, not just choosing the right technology.',
      "As an IMBA student at National Tsing Hua University in Taiwan, I'm exploring entrepreneurship, technology management, and product development while continuing to build software.",
      "Through projects like Nomadia, I'm interested in connecting user needs, business opportunities, and technology to create meaningful solutions.",
    ],
    tagsLabel: 'Focus areas', tags: ['Product Thinking', 'Entrepreneurship', 'UX Design', 'Prototyping', 'Technology Management'],
    relatedLabel: 'Related work', related: ['Nomadia'],
    visual: { src: product, alt: 'Concept wireframe illustrating an early product interface, not a completed Nomadia design', caption: 'From user need to product idea', note: 'Concept visual · Replaceable placeholder', placeholder: true },
  },
];
