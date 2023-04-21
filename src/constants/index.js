import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    bepractical,
    thidiff,
    goswift,
    vahak,
    vahakWebApp,
    torchlite,
    apartmentbasket,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "ReactJS Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "SDE 1 - Web",
        company_name: "Vahak",
        icon: vahak,
        iconBg: "#194EF2",
        date: "March 2022 - March 2023",
        points: [
            "Developing and maintaining web applications using NextJS and other related technologies.",
            "Collaborating with cross-functional teams including designers, backend team, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Helping with the complete lifecycle of each feature from the design discussion to deployment",
            "Actively participated in agile daily scrum, planning meetings, backlog grooming and sprint retrospective",
            "Integrated Payment flow in the web frontend.",
            "Added a design library as a package in the workspace using rollup.",
            "Added translation using react-i18next.",
            "Migrated React,js pages to Next.js project."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Swift",
        icon: goswift,
        iconBg: "#FFFFFF",
        date: "Jan 2022 - Feb 2022",
        points: [
            "Added new feature proprietary rule user interface using reusable ReactJS components.",
            "Debugging and Fixing QA reported issues.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Thidiff Technologies",
        icon: thidiff,
        iconBg: "#234A8B",
        date: "Jan 2020 - Dec 2021",
        points: [
            "Architected a React application from scratch, including setting up the folder structure, state management, authentication, data fetching, routing, rendering, and styling.",
            "Written RESTful APIs using NodeJS and ExpressJS.",
            "Created reusable react components.",
            "Closely worked with testing team to deliver efficient release every week.",
            "Added new features to the existing projects.",
            "Led teams of 4-5 developers and help them grow from greenfield to production.",
        ],
    },
    {
        title: "MEARN stack Developer",
        company_name: "Be-Practical",
        icon: bepractical,
        iconBg: "#2A3A93",
        date: "Aug 2019 – Jan 2020",
        points: [
            "Learned MongoDB, Express JS, Angular JS, React JS and Node JS.",
            "Designed and implemented few projects using the same technologies.",
        ],
    },
];

const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // }
];

const projects = [
    {
        name: "Vahak Web App",
        description:
            "Web app for online transport marketplace & networking community of truck owners, transporters and consignors.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
        ],
        image: vahakWebApp,
        source_code_link: "https://www.vahak.in/",
    },
    {
        name: "Torchlite",
        description:
            "Web application that enables a full Partner Management [PRM] Platform to simply accelerate partner performance.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
        ],
        image: torchlite,
        source_code_link: "https://portal.torchlite.com/",
    },
    {
        name: "Apartment Basket Admin",
        description:
            "A inventory management system, to keep track of the inventory levels in real-time for restocking and managing efficiently.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
        ],
        image: apartmentbasket,
        source_code_link: "https://www.apartmentbasket.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };