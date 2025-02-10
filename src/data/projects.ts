interface Project {
  id: string;
  label: string;
  desc: string;
  tags?: string[];
  links: string[];
}

export const Projects: Project[] = [
  {
    id: 'proj-9',
    label: 'Digital Brand Boards',
    desc: `The Digital Advertising Boards project was built with NestJS and Lumen, 
    featuring eight microservices. The system allowed an Android app to 
    communicate with the backend, enabling to display programs on digital 
    billboards. The admin panel provided tools for designing ads program for 
    various billboard sizes and scheduling content for each model, 
    ensuring dynamic, time-based display management.`,
    tags: ['Nest.js', 'Nuxt.js', 'Microservice', 'Postgres', 'Custom Authorize', 'Swagger'],
    links: ['https://karizor.com/'],
  },

  {
    id: 'proj-8',
    label: 'Social Media Platform',
    desc: `Social media platform designed to help users achieve their
business goals and enhance their visibility. The backend of
the platform is built using a microservices architecture with
Java, while the frontend is developed using Turborepo and
Next.js. Key features of the platform include a store, social
media system, chat, online sessions and classes, various
management sections, support for different businesses, and
a website builder.`,
    tags: [
      'React.js',
      'Next.js',
      'Turborepo',
      'Mantine UI',
      'Featured Design',
      'Shared Components',
    ],
    links: [
      'https://avidbizz.com',
      'https://seller.avidbizz.com',
      'https://backoffice.avidbizz.com',
      'https://builder.avidbizz.com',
      'https://api.avidbizz.com',
    ],
  },
  {
    id: 'proj-7',
    label: 'Sadeghi Customs',
    desc: `Management panel for Sadeghi Customs, an auto detailing
center, using Nest.js and Angular. The management
dashboard was designed and implemented to oversee the
center's activities.`,
    tags: ['Node.js', 'Nest.js', 'Custom Jwt', 'Shared Libs', 'Swagger Doc', 'Restful', 'MariaDB'],
    links: [
      'https://sadeghicustoms.ir',
      'https://sadeghicustoms.ir/panel',
      'https://neo-system.iran.liara.run/docs',
    ],
  },
  {
    id: 'proj-6',
    label: 'Gym and athlete management',
    desc: `Gym management project that includes sports and
nutrition programs, athlete management, and social
features. The backend was built with Nest.js, and the
frontend was developed using Next.js.`,
    tags: [
      'Node.js',
      'Nest.js',
      'Custom Jwt',
      'Shared Libs',
      'Swagger Doc',
      'MariaDB',
      'Restful',
      'React.js',
      'Next.js',
      'Mantine UI',
      'Featured Design',
    ],
    links: [
      'https://maryamfatemi.com',
      'https://dashboard.maryamfatemi.com',
      'https://maryamfatemi-api.liara.run/docs',
    ],
  },
  {
    id: 'proj-5',
    label: 'Intelligent Fire Fighting System',
    desc: `Developed an online fire safety and emergency services
project using IoT for fire monitoring and alerts. The backend
was built with Nest.js and Lumen using a microservices
architecture and Kafka as a message broker, while the
frontend was developed with Vue.js. Api subdomain
changes periodically.`,
    tags: [
      'Node.js',
      'Nest.js',
      'Php',
      'Lumen',
      'Microservice',
      'Kafka',
      'Custom Jwt',
      'Shared Libs',
      'Swagger Doc',
      'MongoDB',
      'PostgresDB',
      'MariaDB',
    ],
    links: ['https://alert.ir', 'https://my.alert.ir', 'https://sfds.alert.ir'],
  },
  {
    id: 'proj-4',
    label: "Iran's Capital Market",
    desc: `Utilizing web scraping techniques to gather stock market
information. Designing and developing various financial
charts. Backend development using two Lumen apps and
one Nest.js app. Frontend development using Nuxt.js`,
    tags: [
      'Node.js',
      'Nest.js',
      'Php',
      'Lumen',
      'Custom Jwt',
      'Shared Libs',
      'Swagger Doc',
      'Vue.js',
      'Nuxt.js',
      'Vuetify',
      'Charts',
      'MariaDB',
    ],
    links: [
      'https://telebourse.ir',
      'https://teleboard.telebourse.ir',
      'https://api.telebourse.ir',
    ],
  },
  {
    id: 'proj-3',
    label: 'Material and Goods Supply System',
    desc: `Specialized social network for businesses. Developed using
Nest.js, Next.js and Nuxt.js. It includes admin panel, service
provider panel, web app, and mobile app. Backend consists
of three Node.js applications that communicate with each
other via Redis.`,
    tags: [
      'Node.js',
      'Nest.js',
      'Php',
      'Laravel',
      'Custom Jwt',
      'Shared Libs',
      'Swagger',
      'Microservice',
      'Redis',
      'MongoDB',
      'PostgresDB',
      'MariaDB',
      'Vue.js',
      'Nuxt.js',
      'Vuetify',
      'React.js',
      'Next.js',
      'Material UI',
    ],
    links: [
      'https://biz.tamuk.ir',
      'https://panel.tamuk.ir',
      'https://auth.tamuk.ir',
      'https://api.tamuk.ir',
    ],
  },
  {
    id: 'proj-2',
    label: 'Online Flower Shop',
    desc: `Online flower, plant, and gardening equipment store using
Laravel and Nuxt.js. This project includes the backend,
vendor panel, admin panel, web app, and mobile app.`,
    tags: ['Php', 'Laravel', 'Custom Jwt', 'Redis', 'MariaDB', 'Vue.js', 'Nuxt.js', 'Vuetify'],
    links: ['https://argegol.com'],
  },
  {
    id: 'proj-1',
    label: 'Online Coffee Shop',
    desc: `Online coffee and coffee equipment store using Laravel and
Nuxt.js. This project includes backend, admin panel, and a
web app.`,
    tags: [
      'Php',
      'Laravel',
      'Custom Jwt',
      'Redis',
      'MongoDB',
      'MariaDB',
      'Vue.js',
      'Nuxt.js',
      'Tailwind',
    ],
    links: ['https://cafimafi.com'],
  },
];
