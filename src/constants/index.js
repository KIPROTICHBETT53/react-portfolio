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
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  crop,
  port,
  telegram,
  scrapy,
  api,
  settings,
  cloud,
  database,
  webb,
  touch,
  globe,
  comp,
  millenium,
  edulearn,
  cookie,
  upwork,
  python,
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
    title: "Web Application Development",
    icon: webb,
  },
  {
    title: "API Integration",
    icon: api,
  },
  {
    title: "AI & Machine Learning",
    icon: comp,
  },
  {
    title: "Chatbots & Automation",
    icon: touch,
  },
   {
    title: "Database Design & Optimization",
    icon: database,
  },
  {
    title: "Technical Documentation",
    icon: globe,
  },
  {
    title: "ERP Systems",
    icon: cloud,
  },
  {
    title: "IT Support",
    icon: settings,
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
    name: "typescript",
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
   {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Millenium Solutions E.A",
    icon: web,
    iconBg: "#383E56",
    date: "May 2024 - August 2024",
    points: [
      "Developed ERP modules for inventory, finance, HR, and procurement.",
      "Designed intuitive user interfaces (UI/UX).",
       "Integrated third-party APIs for extended functionality.",
       "Conducted system testing, debugging, and performance tuning.",
       "Provided user support and technical training.",
       "Ensured data security and system compliance.",
       "Collaborated with cross-functional teams.",
       "Maintained system documentation.",
   ],
  },
  {
    title: "Project Intern",
    company_name: "STEM Impact Center",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
  title: "Freelance Developer",
  company_name: "Upwork",
  icon: upwork,
  iconBg: "#E6E6FA",
  date: "September 2022 - March 2023",
  points: [
    "Completed multiple freelance projects including web apps, automation scripts, and data analysis tools for international clients.",
    "Built and deployed responsive web applications using Flask, Laravel, and React.js.",
    "Designed and integrated REST APIs, user authentication, and dashboards tailored to client needs.",
    "Managed client communications, project timelines, and revisions to ensure high client satisfaction and project success.",
  ],
},



];

const testimonials = [
  {
    testimonial:
      "Your technical skills and ability to solve complex problems were invaluable. Highly recommended!",
    name: "Shaney",
    designation: "Freelancer",
    company: "Upwork",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Great experience working with you! Your attention to detail and commitment to deadlines made a significant impact",
    name: "Clinton",
    designation: "TTL",
    company: "Millenium Solutions E.A Limited",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "A talented and dedicated developer. The project was delivered on time and exceeded our expectations!",
    name:"Njala",
    designation: "Project Manager",
    company: "STEM Impact Center",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crop Recommendation System",
    description:
      "This project is designed to assist farmers and agricultural planners by providing data-driven crop recommendations tailored to specific soil and environmental conditions. Users can input key parameters such as soil nutrients, temperature, humidity, and rainfall. The system then uses a trained machine learning model to analyze the inputs and suggest the most suitable crops to grow, helping improve yield and sustainability.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "blue-text-gradient",
      },
    ],
    image: crop,
    source_code_link: "https://github.com/KIPROTICHBETT53/Crop-recommendations-systems-using-flask-framework",
  },
  {
    name: "Sage Telegram Bot",
    description:
      "The Sage Telegram Bot is a custom-built automation tool designed to share course-related news, updates, and academic announcements with students in real time. Developed using Python and the Telegram Bot API, it allows administrators or lecturers to broadcast messages efficiently and directly to subscribed users. The bot supports features like scheduled updates, command-based interactions, and integration with external data sources for dynamic content. This project demonstrates my skills in automation, API integration, and user-focused tool development aimed at improving communication in academic settings.",
    tags: [
      {
        name: "Tex",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
    ],
    image: telegram,
    source_code_link: "https://github.com/KIPROTICHBETT53/Telegram-bot",
  },
  {
    name: "Portfolio",
    description:
      "This is a personal web portfolio designed to showcase my projects, skills, and professional experience in a clean, responsive format. Built using HTML, CSS, and JavaScript, the site highlights my background in software development, data analytics, and AI applications. It features sections such as About Me, Services, Projects, and Contact, and is optimized for both desktop and mobile devices. The portfolio serves as a central hub for my GitHub repositories, technical write-ups, and downloadable CV, reflecting both my technical abilities and attention to user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link: "https://github.com/KIPROTICHBETT53/portfolio",
  },
  {
    name: "Web Scraper for Kai & Karo",
    description:
      "This project involved developing a Python-based web scraper to extract product information from the Kai & Karo e-commerce website. Using libraries like BeautifulSoup and Requests, the scraper collects data such as product names, prices, and availability, and exports it into structured formats like CSV or JSON for analysis or integration. The tool was designed to help streamline inventory tracking and competitor analysis. This project demonstrates my ability to automate data extraction, handle dynamic content, and work with real-world web data sources efficiently.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "scrapy",
        color: "pink-text-gradient",
      },
    ],
    image: scrapy,
    source_code_link: "https://github.com/KIPROTICHBETT53/web-scraper-for-kaiandkaro",
  },
  {
    name: "Edulearn Volunteer Platform",
    description:
      "EduLearn is a web-based platform designed to connect volunteer teachers with students for free or scheduled online lessons. Built using modern web technologies, the platform allows educators to upload lesson content, schedule sessions, and generate participation certificates. Features include Google Meet integration, calendar booking, user authentication, and profile management. EduLearn promotes accessible education and volunteer engagement, making it ideal for learners seeking support and teachers looking to give back. This project demonstrates my skills in full-stack development, user experience design, and integrating third-party services into scalable systems.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: edulearn,
    source_code_link: "https://github.com/KIPROTICHBETT53/Edulearn",
  },
  {
    name: "Cookie Consent Module",
    description:
      "This project is a lightweight, customizable cookie consent popup built to help websites comply with data privacy regulations like GDPR. It alerts users about the use of cookies and provides options to accept or manage preferences. Developed using HTML, CSS, and JavaScript, the module is easy to integrate into any web project and supports responsive design. This project demonstrates my understanding of web privacy standards and my ability to implement user-friendly compliance solutions.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: cookie,
    source_code_link: "https://github.com/KIPROTICHBETT53/cookie-consent",
  },
];

export { services, technologies, experiences, testimonials, projects };
