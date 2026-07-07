export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const AppProjects: Project[] = [
  {
    name: 'AllinGo — Aggregator Platform',
    category: 'Multi Web-App Platform',
    featured: true,
    description:
      'A multi-web-app platform aggregating ride, delivery, and food services so users can compare the fastest, cheapest, and most available options in one place. Golang (Gin) backend with Swagger, Redis, Atlas, Bob, and OpenTelemetry; Turborepo frontend (Next.js landing, React + Vite client & admin dashboards).',
    stack: ['Golang', 'Gin', 'OpenTelemetry', 'Next.js', 'React', 'Vite', 'Turborepo'],
    links: [
      { label: 'allingo.vn', url: 'https://allingo.vn/' },
      { label: 'admin', url: 'https://admin.allingo.vn/' },
      { label: 'business', url: 'https://business.allingo.vn/' },
    ],
  },
  {
    name: 'Avidbizz — Social Media Platform',
    category: 'Social & Commerce',
    featured: true,
    description:
      'A social media platform to help users achieve business goals and enhance visibility. Backend built on a Java microservices architecture; frontend with Turborepo and Next.js. Features a store, social system, chat, online sessions & classes, management sections, and a website builder.',
    stack: ['Next.js', 'Turborepo', 'Java', 'Microservices'],
    links: [
      { label: 'seller', url: 'https://seller.avidbizz.com' },
      { label: 'backoffice', url: 'https://backoffice.avidbizz.com/' },
      { label: 'builder', url: 'https://builder.avidbizz.com' },
    ],
  },
  {
    name: 'Khanesarmaye — ERP Dashboard',
    category: 'ERP & Analytics',
    featured: true,
    description:
      'ERP dashboard built for Khanesarmaye, designed to manage landing pages and user registrations with real-time analytics and more.',
    stack: ['React', 'Next.js', 'Real-time Analytics'],
    links: [
      { label: 'erp.khanesarmaye.com', url: 'https://erp.khanesarmaye.com' },
      { label: 'demo video', url: 'https://youtu.be/O_kHqgZkHRY' },
    ],
  },
  {
    name: 'Intelligent Fire Fighting System',
    category: 'IoT & Microservices',
    description:
      'An online fire safety and emergency services project using IoT for fire monitoring and alerts. Backend built with NestJS and Lumen using a microservices architecture with Kafka as the message broker; frontend developed with Vue.js.',
    stack: ['NestJS', 'Lumen', 'Kafka', 'Vue.js', 'IoT'],
    links: [
      { label: 'alert.ir', url: 'https://alert.ir/' },
      { label: 'my.alert.ir', url: 'https://my.alert.ir/' },
    ],
  },
  {
    name: 'Material & Goods Supply System',
    category: 'B2B Social Network',
    description:
      'A specialized social network for businesses developed with NestJS, Next.js, and Nuxt.js. Includes admin panel, service-provider panel, web app, and mobile app. The backend consists of three Node.js applications communicating via Redis.',
    stack: ['NestJS', 'Next.js', 'Nuxt.js', 'Redis'],
    links: [
      { label: 'biz.tamuk.ir', url: 'https://biz.tamuk.ir/' },
      { label: 'panel', url: 'https://panel.tamuk.ir/' },
    ],
  },
  {
    name: "Iran's Capital Market",
    category: 'Fintech & Data',
    description:
      'Web scraping techniques to gather stock market information, plus the design and development of various financial charts. Backend with two Lumen apps and one NestJS app; frontend with Nuxt.js.',
    stack: ['NestJS', 'Lumen', 'Nuxt.js', 'Web Scraping'],
    links: [{ label: 'telebourse.ir', url: 'https://teleboard.telebourse.ir/' }],
  },
  {
    name: 'Digital Brand Boards',
    category: 'Ad-Tech & Microservices',
    description:
      'Digital advertising boards built with NestJS and Lumen, featuring eight microservices. An Android app communicates with the backend to display programs on digital billboards, while the admin panel provides tools for designing ad programs across billboard sizes and scheduling time-based content.',
    stack: ['NestJS', 'Lumen', 'Microservices', 'Android'],
    links: [{ label: 'karizor.com', url: 'https://karizor.com/' }],
  },
  {
    name: 'Online Coffee Shop',
    category: 'E-Commerce',
    description:
      'Online coffee and coffee-equipment store using Laravel and Nuxt.js. Includes backend, admin panel, and a web app.',
    stack: ['Laravel', 'Nuxt.js'],
    links: [{ label: 'cafimafi.com', url: 'https://cafimafi.com/' }],
  },
  {
    name: 'Online Flower Shop',
    category: 'E-Commerce',
    description:
      'Online flower, plant, and gardening equipment store using Laravel and Nuxt.js. Includes backend, vendor panel, admin panel, web app, and mobile app.',
    stack: ['Laravel', 'Nuxt.js', 'Mobile App'],
    links: [{ label: 'argegol.com', url: 'https://argegol.com/' }],
  },
  {
    name: 'Sadeghi Customs',
    category: 'Management Panel',
    description:
      'Management panel for Sadeghi Customs, an auto detailing center, using NestJS and Angular. The dashboard was designed and implemented to oversee the center’s activities.',
    stack: ['NestJS', 'Angular'],
    links: [
      { label: 'sadeghicustoms.ir', url: 'https://sadeghicustoms.ir/' },
      { label: 'api docs', url: 'https://api.sadeghicustoms.ir/docs' },
    ],
  },
  {
    name: 'Gym & Athlete Management',
    category: 'Health & Fitness',
    description:
      'Gym management project including sports and nutrition programs, athlete management, and social features. Backend built with NestJS; frontend with Next.js.',
    stack: ['NestJS', 'Next.js'],
    links: [
      { label: 'maryamfatemi.com', url: 'https://maryamfatemi.com/' },
      { label: 'dashboard', url: 'https://dashboard.maryamfatemi.com/' },
    ],
  },
  {
    name: 'Gamely Landing',
    category: 'Landing & UI',
    description:
      'Phase one of a modern, responsive web application built using React, Next.js, and TypeScript. The UI is designed with Mantine UI and Tabler Icons, optimized for both desktop and mobile.',
    stack: ['React', 'Next.js', 'TypeScript', 'Mantine'],
    links: [{ label: 'demo video', url: 'https://youtu.be/KiarzuhU7n0' }],
  },
];

export interface OpenSourceRepo {
  name: string;
  description: string;
  stack: string[];
  url: string;
}

export const AppOpenSource: OpenSourceRepo[] = [
  {
    name: 'Node.js Projects & Libs',
    description:
      'A collection of Node.js backend projects and reusable libraries built with modern tooling.',
    stack: ['NestJS', 'Swagger', 'Prisma', 'TypeScript'],
    url: 'https://github.com/mst-ghi/nodejs-projects',
  },
  {
    name: 'React.js Projects & Libs',
    description:
      'A collection of React and Next.js projects and shared UI libraries with a focus on maintainability.',
    stack: ['React.js', 'Next.js', 'TypeScript', 'Mantine'],
    url: 'https://github.com/mst-ghi/react-projects',
  },
];
