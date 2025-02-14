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
    time: "11/2023 - Current",
    title: "Front-End Developer at Transwap Company",
    content:
      "• Collaborating within a team to develop software product which is Transwap app. The Transwap app is a product allow users to exchange currency from one country to another country. The app is built using ReactJs, C# .NET, Material-UI and SQL Server, hosted on Azure. ",
  },
  {
    time: "12/2022 - 5/2023",
    title: "Studying and Working Projects at IT Course",
    content:
      "• Collaborating with team in course to build projects about Ecommerce Web, App using ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, Material-UI, TailwindCSS, Bootstrap, etc.",
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
      {
        title: "C#",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731119/DomCoding-Blog-Images/csharplogo_zz4afw.png",
      },
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
    ],
  },
  {
    id: "working",
    title: "WORKING",
    technologies: [
      {
        title: "Transwap",
        image:
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1738731081/DomCoding-Blog-Images/transwapLogo_mzju5c.png",
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
      "1+-year experience in back-end development is focusing on creating robust server-side logic using JavaSript with NodeJs and MongoDB, C# .NET and SQL databases. I am skilled in API development, database optimization, and ensuring secure and efficient data management.",
  },
];

export const MY_PROJECTS: Array<MyProjectType> = [
  {
    type: "Full-stack Web App",
    title: "Booking Restaurants App",
    content:
      "Developed a web application for booking restaurant tables, featuring a user-friendly interface and efficient booking management. The app includes customer book restaurant table, admin manage bookings, and restaurant management functionalities.",
    image:
      "https://res.cloudinary.com/dn797d3j3/image/upload/v1738741711/DomCoding-Blog-Images/booking-restaurant-app_heeuif.png",
    urlCode: "https://github.com/DAITHANG23/X22-FE",
    urlDemo: "https://booking-restaurants-app.vercel.app/",
    technologies: "React, React Query, Material-UI, NodeJs, Express, MongoDB",
  },
  {
    type: "Web",
    title: "Students Management App",
    content:
      "Developed a web app to manage students, featuring a user-friendly interface and efficient management functionalities. The app use React to build UI",
    image:
      "https://res.cloudinary.com/dn797d3j3/image/upload/v1738741710/DomCoding-Blog-Images/students-management-app_atpbc3.png",
    urlCode: "https://github.com/DAITHANG23/Students-Management-App",
    urlDemo: "https://students-management-app.vercel.app/",
    technologies: "NextJs, ,TypeScript, Material-UI, React Query",
  },
  {
    type: "Web",
    title: "Booking Pizza App",
    content:
      "This Web App is a booking pizza app, it allows customer to book pizza and the app use React to build UI",
    image:
      "https://res.cloudinary.com/dn797d3j3/image/upload/v1738729140/DomCoding-Blog-Images/Pizza-shop-app_pnjdld.png",
    technologies: "React, Bootrap, JavaScript, CSS",
    urlCode: "https://github.com/DAITHANG23/pizza-ecommerce-reactjs",
    urlDemo: "https://pizza-ecommerce-reactjs.vercel.app/",
  },
];
