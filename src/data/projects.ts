interface Project {
  id: string;
  label: string;
  desc: string;
  links: string[];
}

export const Projects: Project[] = [
  {
    id: 'proj-1',
    label: 'Social Media Platform',
    desc: `Social media platform designed to help users achieve their
business goals and enhance their visibility. The backend of
the platform is built using a microservices architecture with
Java, while the frontend is developed using Turborepo and
Next.js. Key features of the platform include a store, social
media system, chat, online sessions and classes, various
management sections, support for different businesses, and
a website builder.`,
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
    links: [
      'https://sadeghicustoms.ir',
      'https://sadeghicustoms.ir/panel',
      'https://neo-system.iran.liara.run/docs',
    ],
  },
  {
    id: 'proj-8',
    label: 'Gym and athlete management',
    desc: `Gym management project that includes sports and
nutrition programs, athlete management, and social
features. The backend was built with Nest.js, and the
frontend was developed using Next.js.`,
    links: [
      'https://maryamfatemi.com',
      'https://dashboard.maryamfatemi.com',
      'https://maryamfatemi-api.liara.run/docs',
    ],
  },
  {
    id: 'proj-2',
    label: 'Intelligent Fire Fighting System',
    desc: `Developed an online fire safety and emergency services
project using IoT for fire monitoring and alerts. The backend
was built with Nest.js and Lumen using a microservices
architecture and Kafka as a message broker, while the
frontend was developed with Vue.js. Api subdomain
changes periodically.`,
    links: ['https://alert.ir', 'https://my.alert.ir', 'https://sfds.alert.ir'],
  },
  {
    id: 'proj-3',
    label: "Iran's Capital Market",
    desc: `Utilizing web scraping techniques to gather stock market
information. Designing and developing various financial
charts. Backend development using two Lumen apps and
one Nest.js app. Frontend development using Nuxt.js`,
    links: [
      'https://telebourse.ir',
      'https://teleboard.telebourse.ir',
      'https://api.telebourse.ir',
    ],
  },
  {
    id: 'proj-4',
    label: 'Material and Goods Supply System',
    desc: `Specialized social network for businesses. Developed using
Nest.js, Next.js and Nuxt.js. It includes admin panel, service
provider panel, web app, and mobile app. Backend consists
of three Node.js applications that communicate with each
other via Redis.`,
    links: [
      'https://biz.tamuk.ir',
      'https://panel.tamuk.ir',
      'https://auth.tamuk.ir',
      'https://api.tamuk.ir',
    ],
  },
  {
    id: 'proj-5',
    label: 'Online Flower Shop',
    desc: `Online flower, plant, and gardening equipment store using
Laravel and Nuxt.js. This project includes the backend,
vendor panel, admin panel, web app, and mobile app.`,
    links: ['https://argegol.com'],
  },
  {
    id: 'proj-6',
    label: 'Online Coffee Shop',
    desc: `Online coffee and coffee equipment store using Laravel and
Nuxt.js. This project includes backend, admin panel, and a
web app.`,
    links: ['https://cafimafi.com'],
  },
];
