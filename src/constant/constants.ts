interface ListExperiencesType {
  time: string;
  title: string;
  content: string;
}

interface TechnologyType {
  title: string;
  image: string;
}

interface ListTechnologiesType {
  id: string;
  title: string;
  technologies: Array<TechnologyType>;
}

interface MyServicesType {
  id: string;
  title: string;
  content: string;
}

interface MyProjectType {
  title: string;
  image: string;
  content: string;
  technologies: string;
  type: string;
  urlDemo?: string;
  urlCode?: string;
  urlCodeBe?: string;
}

export const LIST_ITEM_NAVBAR = [
  { title: "Posts", url: "/posts" },
  { title: "Tags", url: "/tags" },
  { title: "About", url: "/about" },
];

export const LIST_ITEM_TAGS = [
  "code",
  "react",
  "mdx",
  "props",
  "rehype-pretty",
];

export const LIST_EXPERIENCES: Array<ListExperiencesType> = [
  {
    time: "3/2025-Present",
    title: "Front-End Developer at Catholic Design (Non-profit organization)",
    content:
      "Catholic Design is a Catholic organization for young people. The Catholic Design website introduces the team’s activities, organizes creative competitions, and features merchandise such as calendars, keychains, and more. The website is built using Next.js, Tailwind CSS, Shadcn UI, Firebase, and PostgreSQL.",
  },
  {
    time: "9/2023 - 4/2025",
    title: "Front-End Developer at Transwap Company",
    content:
      "• Collaborating within a team to develop software product which is Transwap app. The Transwap app is a product allow users to exchange currency from one country to another country. The app is built using ReactJs, C# .NET, Material-UI and Azure SQL Server, hosted on Azure. ",
  },
];

export const MY_TECHNOLOGIES: Array<ListTechnologiesType> = [
  {
    id: "fontend",
    title: "FRONTEND",
    technologies: [
      {
        title: "React",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731081/DomCoding-Blog-Images/reactlogo2_aqaiae.png",
      },
      {
        title: "NextJs",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738730484/DomCoding-Blog-Images/nextjsLogo_hoqhrs.png",
      },
      {
        title: "JavaScript",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731074/DomCoding-Blog-Images/jslogo_wasuna.png",
      },
      {
        title: "TypeScript",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731091/DomCoding-Blog-Images/Typescript_logo_2020.svg_ywkj2p.png",
      },
      {
        title: "HTML",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731075/DomCoding-Blog-Images/htmllogo_psfsix.png",
      },
      {
        title: "CSS",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731074/DomCoding-Blog-Images/csslogo_drsj2f.png",
      },
      {
        title: "Redux",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731091/DomCoding-Blog-Images/redux-icon-1024x971-2ocv6rm8_ukvo1i.png",
      },
      {
        title: "React Query",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731091/DomCoding-Blog-Images/react-query-logo-png_seeklogo-435661_nocxaz.png",
      },
      {
        title: "TailwindCSS",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731082/DomCoding-Blog-Images/Tailwind_CSS_Logo.svg_mpkmtn.png",
      },
      {
        title: "Material-UI",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731090/DomCoding-Blog-Images/mui-logo-freelogovectors.net__gtdlno.png",
      },
      {
        title: "Shadcn UI",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309356/DomCoding-Blog-Images/shadcn-ui-logo-png_seeklogo-519786_jjmgvx.png",
      },
    ],
  },
  {
    id: "backend",
    title: "BACKEND",
    technologies: [
      {
        title: "NodeJs",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731103/DomCoding-Blog-Images/nodejs-development-services_sffzs8.webp",
      },
      {
        title: "SQL",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731074/DomCoding-Blog-Images/sql_mgxabd.png",
      },
      {
        title: "MongoDB",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731103/DomCoding-Blog-Images/png-transparent-mongodb-original-logo-icon-thumbnail_elf9iq.png",
      },
      {
        title: "ExpressJs",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309370/DomCoding-Blog-Images/unnamed_cxhycx.png",
      },
      {
        title: "Redis Cache",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309370/DomCoding-Blog-Images/redis-database-logo_q8pb7t.png",
      },
      {
        title: "Socket.IO",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309285/DomCoding-Blog-Images/socket-io-websocket-node-js_adenae.jpg",
      },
      {
        title: "Firebase",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309285/DomCoding-Blog-Images/images_xxw4uf.png",
      },
    ],
  },
  {
    id: "devops",
    title: "DEVOPS",
    technologies: [
      {
        title: "Git",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731073/DomCoding-Blog-Images/gitlogo_ub4m3w.png",
      },
      {
        title: "GitHub",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731118/DomCoding-Blog-Images/githublogo_se7jvt.png",
      },
      {
        title: "Docker",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309285/DomCoding-Blog-Images/docker-for-arm-docker-image-icon-png--m2i8d3H7b1H7G6b1_v2cqxh.png",
      },
      {
        title: "Railway",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309510/DomCoding-Blog-Images/logo-dark_a7vdmb.png",
      },
      {
        title: "Vercel",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309284/DomCoding-Blog-Images/orig_selea0.png",
      },
      {
        title: "Azure",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731104/DomCoding-Blog-Images/Microsoft_Azure.svg_jkahd8.png",
      },
    ],
  },
  {
    id: "languages",
    title: "LANGUAGES",
    technologies: [
      {
        title: "Javascript",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731074/DomCoding-Blog-Images/jslogo_wasuna.png",
      },
      {
        title: "Typescript",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731091/DomCoding-Blog-Images/Typescript_logo_2020.svg_ywkj2p.png",
      },
      // {
      //   title: "C#",
      //   image:
      //     "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731119/DomCoding-Blog-Images/csharplogo_zz4afw.png",
      // },
      {
        title: "C++",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731118/DomCoding-Blog-Images/c_kkptjb.png",
      },
    ],
  },
  {
    id: "tools",
    title: "TOOLS",
    technologies: [
      {
        title: "VS Code",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731103/DomCoding-Blog-Images/vscode_ijbany.png",
      },
      {
        title: "Rider",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731094/DomCoding-Blog-Images/JetBrains_Rider_Icon.svg_xrjfyo.png",
      },
      {
        title: "Fork",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731082/DomCoding-Blog-Images/forklogo_l9a0zx.png",
      },
      {
        title: "Postman",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731081/DomCoding-Blog-Images/postmanLogo_af37a2.png",
      },
      {
        title: "Figma",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731104/DomCoding-Blog-Images/figma-logo_y2eofd.png",
      },
      {
        title: "Mailgun",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749309357/DomCoding-Blog-Images/png-clipart-red-logoz-mailgun-logo-icons-logos-emojis-tech-companies_pdtffr.png",
      },
    ],
  },
  {
    id: "working",
    title: "WORK",
    technologies: [
      {
        title: "Transwap",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731081/DomCoding-Blog-Images/transwapLogo_mzju5c.png",
      },
      {
        title: "Catholic Design",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1749317451/DomCoding-Blog-Images/Screenshot_2025-06-08_003022_fqkb9f.png",
      },
    ],
  },
];

export const MY_SERVICES: Array<MyServicesType> = [
  {
    id: "frontend",
    title: "Front-end Developer",
    content:
      "Proficient in front-end development with 2+ year of experience using technologies such as React, NextJs. I specialize in building responsive and dynamic user interfaces, leveraging tools like Figma for design and wireframing.",
  },
  {
    id: "backend",
    title: "Back-end Developer",
    content:
      "1+-year experience in back-end development is focusing on creating robust server-side logic using JavaSript with NodeJs, MongoDB, ExpressJs, Firebase and SQL databases. I am skilled in API development, database optimization, and ensuring secure and efficient data management.",
  },
];

export const MY_PROJECTS: Array<MyProjectType> = [
  {
    type: "Full-stack Web App",
    title: "Restaurants Booking",
    content:
      "Developed a web application for booking restaurant tables, featuring a user-friendly interface and efficient booking management. The app allows customers to book tables, review their bookings, receive notifications, and provides restaurant management functionalities.",
    image:
      "https://res.cloudinary.com/dn797d3j3/image/upload/v1749304152/DomCoding-Blog-Images/Screenshot_2025-06-07_201424_vobwil.png",
    urlCode: "https://github.com/DAITHANG23/Luna",
    urlCodeBe: "https://github.com/DAITHANG23/Luna.BE",
    urlDemo: "https://domiquefusion.store",
    technologies:
      "NextJs, React Query, Redux, TailwindCss, NodeJs, ExpressJs, MongoDB, Google Oauth20, Socket.IO, Redis Cache, Docker, Github Action, Railway, Mailgun",
  },
  {
    type: "Web",
    title: "Students Management",
    content:
      "Developed a web app to manage students, featuring a user-friendly interface and efficient management functionalities. The app use React to build UI",
    image:
      "https://res.cloudinary.com/dn797d3j3/image/upload/v1749311558/DomCoding-Blog-Images/Screenshot_2025-06-07_223258_ongm2q.png",
    urlCode: "https://github.com/DAITHANG23/Students-Management-App",
    technologies: "NextJs, ,TypeScript, Material-UI, React Query",
  },
  {
    type: "Web",
    title: "Pizza Booking",
    content:
      "This Web App is a booking pizza app, it allows customer to book pizza and the app use React to build UI",
    image:
      "https://res.cloudinary.com/dn797d3j3/image/upload/v1738729140/DomCoding-Blog-Images/Pizza-shop-app_pnjdld.png",
    technologies: "React, Bootrap, JavaScript, CSS",
    urlCode: "https://github.com/DAITHANG23/pizza-ecommerce-reactjs",
    urlDemo: "https://pizza-ecommerce-reactjs.vercel.app/",
  },
];
