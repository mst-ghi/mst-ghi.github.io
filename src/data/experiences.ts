interface Experience {
  id: string;
  label: string;
  company: string;
  date: string;
  features: string[];
}

export const Experiences: Experience[] = [
  {
    id: 'exp-1',
    label: 'Front-end Developer',
    company: 'Avid Advice LLC Co. Yerevan, Armenia',
    date: 'Since October 2021',
    features: [
      'Developing a multitenant web app with Next.js for workouts, advice, legal, etc',
      'Project development utilizes Turborepo to create components as an internal package and handle multiple web apps in one source code',
      'Using the Mantine UI library and Tailwind CSS',
    ],
  },
  {
    id: 'exp-2',
    label: 'Back-end & Front-end Developer',
    company: 'Telebourse Co. Tehran, Iran',
    date: 'December 2020 - February 2022',
    features: [
      'Utilizing web scraping techniques to gather stock market information',
      'Designing and developing various financial charts',
      'Backend development using two Lumen apps and one Nest.js app',
      'Frontend development using Nuxt.js',
    ],
  },
  {
    id: 'exp-3',
    label: 'Back-end & Front-end Developer',
    company: 'Behina Gostar Nano Co. Isfahan, Iran',
    date: 'November 2019 - November 2020',
    features: [
      'Working on a comprehensive business system project',
      'Developing three backend applications using Nest.js and one application using Laravel',
      'Utilizing Redis for inter-app communication',
      ' Building the back-office web application using Nuxt.js and the customer web application using React and Next.js',
    ],
  },
  {
    id: 'exp-4',
    label: 'Back-end & Front-end Developer',
    company: 'Parmand Co. Isfahan, Iran',
    date: 'May 2018 - September 2019',
    features: [
      'Development of several shopping and entertainment projects',
      'Backend development using Laravel and Nest.js',
      'Frontend development using Nuxt.js',
      'Integration of payment gateway for secure transactions',
    ],
  },
  {
    id: 'exp-5',
    label: 'Back-end & Front-end Developer',
    company: 'Pardad Pardazesh Co. Isfahan, Iran',
    date: 'August 2017 - May 2018',
    features: [
      'Development of the marketer management project',
      'Developing two backend applications using Laravel (Lumen) and Nest.js',
      'Frontend development using Nuxt.js',
      'Implementation of a dashboard for marketers',
    ],
  },
  {
    id: 'exp-6',
    label: 'Web Developer',
    company: 'Barname Sazan Co. Isfahan, Iran',
    date: 'May 2016 - May 2017',
    features: [
      'Developing websites using Laravel and Vue.js',
      'Implementing front-end web design and collaborating with clients to gather performance feedback',
      'Delivering application and website designs within project scope and meeting deadlines',
    ],
  },
];
