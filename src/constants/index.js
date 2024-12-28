import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    laravel,
    umn,
    ufest,
    pratama,
    dog,
    php,
    android,
    smiler,
    umnpc
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Volunteer Teacher ",
        company_name: "UMN Programming Club",
        icon: umnpc,
        iconBg: "#000000",
        date: "January 2024 - July 2024",
        points: [
            "Teaching algorithms and working with each other in explaining materials based on the course taken in university.",
            "Giving tips & tricks and a shortcut way of thinking.",
            "Challenging ourself by taking competitive programming excersizes.",
            "Having code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Website Division Coordinator",
        company_name: "UMN Festival",
        icon: ufest,
        iconBg: "#fbc3bc",
        date: "January 2024 - November 2024",
        points: [
            "Developing and maintaining web applications using React as the frontend and Laravel as the backend.",
            "Collaborating with cross-functional teams including designers, project managers, and other developers to create high-quality website.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Web Developer - Laravel",
        company_name: "Pratama Ban Tegal",
        icon: pratama,
        iconBg: "#fbc3bc",
        date: "July 2024 - December 2024",
        points: [
            "Developing and maintaining Laravel web application, and deploying in cloud.",
            "Collaborating with the owner and other developers to create high-quality user interface and user experience.",
            "By using tailwind css our team implement responsive design and ensuring cross-browser compatibility.",
            "Participating in team code reviews and providing constructive feedback to other developers.",
        ],
    }, {
        title: "Laboratory Teaching Assistant - Web Programming",
        company_name: "FTI LAB UMN",
        icon: umn,
        iconBg: "#ffff",
        date: "January 2024 - January 2025",
        points: [
            "Teaching and working together on a project for their final assignment using native PHP and then transitioning to Laravel.",
            "Students working with clients and making a website project for the client's needs.",
            "Implementing responsive design using tailwind and bootstrap.",
            "Participating in groups and discussions in developing the project.",
        ],
    },
    // {
    //     title: "Backend Developer",
    //     company_name: "PT. Sannin Kreasi Indonesia",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2024 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/FelyksCode',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/felix-ivander-8b7172292',
    }
];

export const projects = [
    {
        iconUrl: dog,
        theme: 'btn-back-orange',
        name: 'UMN Gotcha',
        description: 'Launched on 2 April 2023, UMN Gotcha is a simple web-based game inspired by the classic Tamagotchi. Developed using React, this project showcases our ability to create engaging and interactive user experiences.',
        link: 'https://github.com/cowcow22/UMNGotcha',
    },
    {
        iconUrl: react,
        theme: 'btn-back-white',
        name: 'Osic (Spotify Clone)',
        description: 'Developed on 30 May 2023, this project represents one of the first applications created by our team alongside UMN Gotcha. It is a simple replica of the popular music streaming platform Spotify.',
        link: 'https://github.com/cowcow22/OurMusic',
    },
    {
        iconUrl: php,
        theme: 'btn-back-fullwhite',
        name: 'Todo list App',
        description: 'On 21 October 2023, we developed a simple todo list application using native PHP. Learning the basics of PHP and how to connect it with a MySQL database.',
        link: 'https://github.com/FelyksCode/WebProgLabUTS-Final',
    },
    {
        iconUrl: php,
        theme: 'btn-back-fullwhite',
        name: 'Simple Online Food Shop Website',
        description: 'On 22 October 2023, we developed a simple online food shop website using native PHP. This project shows the potential of websites that can be made using PHP only.',
        link: 'https://github.com/FelyksCode/UTSPEMWEBLEC-main',
    },
    {
        iconUrl: laravel,
        theme: 'btn-back-green',
        name: 'Paintylux',
        description: 'On 19 December 2023, grateful to be able to collaborate with Paintylux\'s team to develop their website. Paintylux is a local paint manufacturer. This project is developed using Laravel Livewire and Tailwind CSS.',
        link: 'https://github.com/oscarjiro/paintylux',
    },
    {
        iconUrl: android,
        theme: 'btn-back-blue',
        name: 'Mangan.',
        description: 'Started on 8 October 2024, Mangan. is a food diary application that lets the user store their food inside the application. This project is developed using Android Studio and Firebase.',
        link: 'https://github.com/cowcow22/UTS_MAP_Mangan',
    },
    {
        iconUrl: laravel,
        theme: 'btn-back-green',
        name: 'Pratama Ban Tegal',
        description: 'On 24 October 2024, my colleagues and I developed a website for Pratama Ban Tegal. Pratama Ban Tegal is a local tire shop. This project is developed using Laravel and Tailwind CSS.',
        link: 'https://pratamawheelstore.com',
    },
    {
        iconUrl: smiler,
        theme: 'btn-back-black',
        name: 'The BlackJek.',
        description: 'Started on 8 November 2024, a simple Unity game that was meant to be an assignment for the final project. This is a replica of the popular game The Backrooms. This project is developed using Unity.',
        link: 'https://github.com/cowcow22/UAS-IF580-BackRoom',
    },
];
