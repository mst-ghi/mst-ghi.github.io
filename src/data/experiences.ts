interface Experience {
  id: string;
  label: string;
  company: string;
  date: string;
  workType: string;
  features: string[];
}

export const Experiences: Experience[] = [
  {
    id: 'exp-8',
    label: 'Backend & Frontend Developer',
    company: 'Karizor',
    date: 'September 2023 - March 2023',
    workType: 'Part-time',
    features: [
      'Microservices Architecture with Kafka',
      'Developed eight microservice using NestJS & Lumen',
      'Real-time Notifications implementation',
      'Device Activity Logger for tracking device activities',
    ],
  },
  {
    id: 'exp-7',
    label: 'Backend Developer',
    company: 'Alert.ir',
    date: 'September 2023 - March 2023',
    workType: 'Part-time',
    features: [
      'Microservices Architecture with Kafka',
      'Developed five microservice using NestJS & Lumen',
      'Real-time Notifications implementation',
      'Operator Activity Logger for tracking user actions',
    ],
  },
  {
    id: 'exp-6',
    label: 'Frontend Developer',
    company: 'Avid Advice',
    date: 'October 2021 - September 2024',
    workType: 'Full-time',
    features: [
      'Multitenant web app with Next.js for workouts, advice, legal, etc.',
      'Used Turborepo for managing 5 web applications & 12 shared libraries',
      'Using the Mantine UI library and Tailwind CSS',
      'Online class sessions, enabling real-time communication',
      'Page builder and admin panel for managing all content, users, sellers',
    ],
  },
  {
    id: 'exp-5',
    label: 'Backend & Frontend Developer',
    company: 'Telebourse',
    date: 'December 2020 - February 2022',
    workType: 'Full-time',
    features: [
      'Utilizing web scraping techniques to gather stock market information',
      'Designing and developing various financial charts',
      'Backend development using two Lumen apps and one Nest.js app',
      'Frontend development using Nuxt.js',
    ],
  },
  {
    id: 'exp-4',
    label: 'Backend & Frontend Developer',
    company: 'Behina Gostar Nano',
    date: 'November 2019 - November 2020',
    workType: 'Full-time',
    features: [
      'Working on a comprehensive business system project',
      'Developing backend apps using Nest.js and  Laravel',
      'Utilizing Redis for inter-app communication',
      'Built web interfaces using Nuxt.js and Nextjs for various web apps',
    ],
  },
  {
    id: 'exp-3',
    label: 'Backend & Frontend Developer',
    company: 'Parmand',
    date: 'May 2018 - September 2019',
    workType: 'Full-time',
    features: [
      'Development of several shopping and entertainment projects',
      'Backend development using Laravel and Nest.js',
      'Frontend development using Nuxt.js',
      'Integration of payment gateway for secure transactions',
    ],
  },
  {
    id: 'exp-2',
    label: 'Backend & Frontend Developer',
    company: 'Pardad Pardazesh',
    date: 'August 2017 - May 2018',
    workType: 'Full-time',
    features: [
      'Development of the marketer management project',
      'Developing backend apps using Lumen and Nestjs',
      'Frontend development using Nuxtjs',
      'Implementation of a dashboard for marketers',
    ],
  },
  {
    id: 'exp-1',
    label: 'Web Developer',
    company: 'Barname Sazan Noandish',
    date: 'May 2016 - May 2017',
    workType: 'Full-time',
    features: [
      'Developed Frontend for websites using Blade and Reactjs',
      'Educational Platform and Legal Website',
    ],
  },
];
