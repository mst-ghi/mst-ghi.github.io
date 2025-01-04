interface OpenSource {
  id: string;
  label: string;
  desc: string;
  tags: string[];
  links: string[];
}

export const OpenSources: OpenSource[] = [
  {
    id: 'source-1',
    label: 'Gym Planner Backend',
    desc: `Gym planner backend project. A Project for Gym Instructors & Coach.
Medical records, Equipments, Body Parts, Exercises, Food & Workout Program, etc...`,
    tags: ['Node.js', 'Nest.js', 'Custom Jwt', 'Shared Libs', 'Swagger Doc', 'MariaDB'],
    links: ['https://github.com/mst-ghi/gym-planner-backend'],
  },
  {
    id: 'source-2',
    label: 'Gym Planner Dashboard',
    desc: `Gym planner dashboard project. A Project for Gym Instructors & Coach.
Medical records, Equipments, Body Parts, Exercises, Food & Workout Program, etc...`,
    tags: ['React.js', 'Next.js', 'Mantine UI', 'Featured Design', 'Custom Hooks'],
    links: ['https://github.com/mst-ghi/gym-planner-dashboard'],
  },
  {
    id: 'source-3',
    label: 'Golang boilerplate',
    desc: `Golang Backend Boilerplate project! This boilerplate provides a solid foundation 
    for building backend applications in Go, equipped with essential features to kickstart your development process`,
    tags: [
      'Golang',
      'Boilerplate',
      'Gorm',
      'Swagger',
      'Custom JWT',
      'Custom Command',
      'Middlewares',
      'SocketIO',
      'Scheduler',
    ],
    links: ['https://github.com/mst-ghi/golang-backend-boilerplate'],
  },
  {
    id: 'source-4',
    label: 'Simple Conf Frontend',
    desc: `A simple project for communities. This project contain Communities, Events, Comments, Chat, Video/Voice Call and etc.`,
    tags: [
      'React.js',
      'Next.js',
      'Mantine UI',
      'Featured Design',
      'Custom Hooks',
      'Husky',
      'Socket.io',
      'Simple-peer',
      'Chat & Video Call',
    ],
    links: ['https://github.com/mst-ghi/simple-conf-frontend'],
  },
  {
    id: 'source-5',
    label: 'Simple Conf Backend',
    desc: `A simple project for communities. This project contain Communities, Events, Chat, Video/Voice Call and etc.`,
    tags: [
      'Golang',
      'Boilerplate',
      'Gorm',
      'Swagger',
      'Custom JWT',
      'Custom Command',
      'Middlewares',
      'SocketIO',
      'Scheduler',
      'Chat & Video Call',
    ],
    links: ['https://github.com/mst-ghi/simple-conf-backend'],
  },
  {
    id: 'source-6',
    label: 'Any English Frontend',
    desc: `A simple project for English learner. This project contain Words, Phrases, Conversations and Lightner.`,
    tags: ['React.js', 'Next.js', 'Mantine UI', 'Featured Design', 'Custom Hooks', 'Husky'],
    links: ['https://github.com/mst-ghi/any-english-frontend'],
  },
  {
    id: 'source-7',
    label: 'Any English Backend',
    desc: `A simple nodejs project for English learner. This project contain Words, Phrases, Conversations and Lightner.`,
    tags: ['Node.js', 'Nest.js', 'Custom Jwt', 'Shared Libs', 'Swagger Doc', 'PostgresDB'],
    links: ['https://github.com/mst-ghi/any-english-backend'],
  },
  {
    id: 'source-8',
    label: 'Nestjs Liara Package',
    desc: `NestJS Library for Liara.ir Storage`,
    tags: ['Node.js', 'Nest.js', 'Multer', 'Liara Storage'],
    links: ['https://github.com/mst-ghi/nest-multer-liara'],
  },
  {
    id: 'source-9',
    label: 'Nestjs Toolkit Package',
    desc: `Useful tools for the NestJs framework based on Express.js`,
    tags: [
      'Node.js',
      'Nest.js',
      'Crypto',
      'Decorators',
      'Filters',
      'Interceptors',
      'Middlewares',
      'Providers',
      'Sha256',
      'Swagger',
      'Helpers',
    ],
    links: ['https://github.com/mst-ghi/nestjs-toolkit'],
  },
  {
    id: 'source-10',
    label: 'Password Generator',
    desc: `A simple password generator. Just for fun!`,
    tags: ['Node.js', 'Nest.js'],
    links: ['https://ohoh-password.vercel.app/', 'https://github.com/mst-ghi/password-generator'],
  },
];
