export interface SkillGroup {
  title: string;
  icon: string;
  accent: string;
  skills: string[];
}

export const AppSkills: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'server',
    accent: 'pink',
    skills: [
      'Node.js',
      'NestJS',
      'TypeORM',
      'Prisma',
      'Custom JWT & ACL',
      'Redis & Caching',
      'Socket.IO',
      'Swagger & API Docs',
      'Golang',
      'Gin & Gorm',
      'Kafka',
      'Microservices',
    ],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    accent: 'purple',
    skills: [
      'React.js',
      'Next.js',
      'Turborepo',
      'React Query',
      'Redux',
      'Zustand',
      'Material UI',
      'Mantine UI',
      'Tailwind CSS',
      'Vite',
      'Nuxt.js',
      'PWA & Mini-Apps',
    ],
  },
  {
    title: 'Architecture & Coding',
    icon: 'code',
    accent: 'blue',
    skills: [
      'Clean Code',
      'Atomic Design',
      'Feature-Driven Design',
      'Monorepo Management',
      'Type-safe Development',
      'Biome · ESLint · Prettier',
      'Husky (Git Hooks)',
      'CI/CD Workflows',
    ],
  },
];

// Marquee ticker of core technologies
export const MarqueeSkills: string[] = [
  'Node.js',
  'NestJS',
  'React',
  'Next.js',
  'TypeScript',
  'Golang',
  'Turborepo',
  'Prisma',
  'Redis',
  'Kafka',
  'Socket.IO',
  'Zustand',
  'Tailwind',
  'Mantine',
  'Docker',
  'Microservices',
];
