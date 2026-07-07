export interface Experience {
  company: string;
  period: string;
  type: string;
  current?: boolean;
  points: string[];
}

export const AppExperience: Experience[] = [
  {
    company: 'AllinGo',
    period: 'Aug 2025 — Present',
    type: 'Full-time',
    current: true,
    points: [
      'Building Golang backend services (Gin) with Swagger/OpenAPI docs, Redis, and OpenTelemetry-based observability',
      'Managing database schema and migrations with Atlas and type-safe SQL access via Bob',
      'Owning the Turborepo monorepo of multiple web apps and shared UI component libraries',
      'Built customer-facing apps and dashboards with React, Vite, and Next.js',
      'Implemented consistent, scalable UI with MUI and Tailwind CSS, global state with Zustand, and secure cross-app auth via shared cookies',
      'Applied Atomic Design and feature-based architecture for modular, maintainable UI',
    ],
  },
  {
    company: 'Freelance',
    period: 'Oct 2024 — Jun 2025',
    type: 'Flexible-time',
    points: [
      'Cross-platform, performant Web Apps & PWAs',
      'Mini-Apps (TMA) with seamless third-party platform integration',
      'Backend with Node.js, NestJS, Prisma, and TypeORM',
      'Frontend with React.js, Next.js, Turborepo, and Mantine',
    ],
  },
  {
    company: 'Avid Advice',
    period: 'Oct 2021 — Oct 2024',
    type: 'Full-time',
    points: [
      'Multitenant web app with Next.js for workouts, advice, legal, and more',
      'Used Turborepo to manage 5 web applications & 12 shared libraries',
      'Built with the Mantine UI library and Tailwind CSS',
      'Online class sessions enabling real-time communication',
      'Page builder and admin panel for managing content, users, and sellers',
    ],
  },
  {
    company: 'Karizor',
    period: 'Sep 2023 — Mar 2024',
    type: 'Part-time',
    points: [
      'Microservices architecture with Kafka',
      'Developed eight microservices using NestJS & Lumen',
      'Real-time notifications implementation',
      'Device Activity Logger for tracking device activities',
    ],
  },
  {
    company: 'Alert',
    period: 'Jan 2023 — Sep 2023',
    type: 'Part-time',
    points: [
      'Microservices architecture with Kafka & Redis',
      'Developed five microservices using NestJS & Lumen',
      'Real-time notifications implementation',
      'Operator Activity Logger for tracking user actions',
    ],
  },
  {
    company: 'Telebourse',
    period: 'Dec 2020 — Feb 2022',
    type: 'Full-time',
    points: [
      'Web scraping techniques to gather stock market information',
      'Designed and developed various financial charts',
      'Backend with NestJS and Lumen apps, frontend with Nuxt.js',
    ],
  },
  {
    company: 'Behina Gostar Nano',
    period: 'Nov 2019 — Nov 2020',
    type: 'Full-time',
    points: [
      'Worked on a comprehensive business system project',
      'Developed backend apps using NestJS and Laravel',
      'Built web interfaces using Nuxt.js and Next.js',
    ],
  },
  {
    company: 'Parmand',
    period: 'May 2018 — Sep 2019',
    type: 'Full-time',
    points: [
      'Development of shopping and entertainment projects',
      'Backend with Laravel and NestJS, frontend with Nuxt.js',
      'Integration of payment gateways for secure transactions',
    ],
  },
  {
    company: 'Pardad Pardazesh',
    period: 'Aug 2017 — May 2018',
    type: 'Full-time',
    points: [
      'Development of the marketer management project',
      'Backend with Lumen and NestJS, frontend with Nuxt.js',
      'Implementation of a dashboard for marketers',
    ],
  },
  {
    company: 'Barname Sazan',
    period: 'May 2016 — May 2017',
    type: 'Full-time',
    points: [
      'Developed frontend for websites using Blade and React.js',
      'Educational platform and legal website',
    ],
  },
];
