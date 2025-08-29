import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Instagram } from "lucide-react";

export const DATA = {
  name: "Nur Yusuf Ferdiansyah",
  initials: "NYF",
  url: "https://dillion.io",
  location: "Bogor, Jawa Barat, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Student Developer turned Team Leader. I love creating digital solutions and leading people to grow. Active in school organizations and community projects.",
  summary:
    "I am an information technology professional with expertise in web application development, database management, and systems integration. Experienced in building efficient and user-friendly digital solutions, I am accustomed to working both in teams and independently. I am committed to continuous learning and developing my skills to make the best contribution to the organization.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Express.js",
    "Node.js",
    "Python",
    "MySql",
    "Proxmox",
    "PHP",
    "Laravel",
    "Canva",
    "C++",
    "Git",
    "GitHub",
    "Microsoft Office",
    "TailwindCSS",
    "Bootstrap",
    "Figma",
    "Capcut"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://best.smktibazma.com", icon: "/best.png", label: "BEST" },
    { href: "https://chiper.smktibazma.com", icon: "/sekolah.png", label: "Chiper bazma" },
  ],
  contact: {
    email: "yusufftibazma@gmail.com",
    tel: "+62838-3394-4848",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/FISmart1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nur-yusuf-07ab15323/",
        icon: Icons.linkedin,

        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/nyusufansyah/",
        icon: Instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "yusufftibazma@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BEST",
      href: "https://best.smktibazma.com",
      badges: [],
      location: "Remote",
      title: "Leader",
      logoUrl: "/best.png",
      start: "19 May 2025",
      end: "now",
      description:
        "Led the BEST Website Developer Team, responsible for coordinating projects, coding, and ensuring optimal website performance.",
    },
    {
      company: "4BYTE",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Leader",
      logoUrl: "/4byte.png",
      start: "21 July 2025",
      end: "now",
      description:
        "Led the Website Development Team of SMK TI BAZMA, responsible for project coordination, coding, and ensuring optimal website performance.",
    },
    {
      company: "MCROBO",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Vice Chairman",
      logoUrl: "/mcrobo.png",
      start: "August 2025",
      end: "now",
      description:
        "Entrusted with the role of Vice Chairman of the Robotics Club, responsible for assisting in leadership, coordinating activities, and supporting members in achieving the club’s goals.",
    },
    {
      company: "OSIS",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Finance",
      logoUrl: "/osis.png",
      start: "August 2024",
      end: "now",
      description:
        "Manage organizational finances, prepare financial reports, and ensure activity budgets run effectively and transparently.",
    },
  ],
  education: [ 
    {
      school: "SMK TI BAZMA",
      href: "https://smktibazma.com",
      degree: "Vocational High School",
      logoUrl: "/sekolah.png",
      start: "2023",
      end: "now",
    },
    
  ],
  projects: [
    {
      title: "BEST",
      href: "https://best.smktibazma.com",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "BEST is a digital platform that makes it easy for alumni and students of SMK TI BAZMA to showcase their portfolios online. Their best work is now easily accessible to the public, industry, and those seeking to better understand the potential of the younger generation.",
      technologies: [
        "React.js",
        "Javascript",
        "MySQL",
        "Prisma",
        "Boostrap",
        "Node.js",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://best.smktibazma.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projectbest.png",
      video:
        "",
    },
    {
      title: "Bazma Chiper",
      href: "https://magicui.design",
      dates: "Oktober 2024 - Desember 2024",
      active: true,
      description:
        "Bazma Chiper is a web-based platform designed to encrypt and decrypt text messages. Using a special cipher-like encoding system, Bazma Chiper helps maintain information confidentiality and prevent unauthorized access. This website can be used as a learning tool for cryptography and as a practical tool for protecting digital messages.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "Node.js",

      ],
      links: [
        {
          type: "Website",
          href: "https://chiper.smktibazma.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chiper.png",
      video: "",
    },
    
  ],
  hackathons: [
    {
      title: "LSP Sertifikasi Desain Multimedia Muda",
      dates: "25 November  - 30 November 2024",
      location: "Online",
      description:
        "Certified in Junior Multimedia Design covering essential skills in graphic design, video editing, animation, and digital media production. This certification verifies competency in applying creative concepts, using design software tools, and producing multimedia content that meets industry standards.",
      image:
        "/lsp.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Teladan Akademik & Sopan Santun di SMK TI BAZMA",
      dates: "2023 - 2024 - 2025",
      location: "SMK TI BAZMA",
      description:
        "Recognized for consistent academic achievements and outstanding manners, serving as a role model for fellow students.",
      image:
        "/sekolah.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Certificate basic Java Script",
      dates: "Feb 2025",
      location: "HackerRank",
      description:
        "Certified in JavaScript (Basic) by HackerRank, demonstrating proficiency in fundamental concepts such as data types, functions, loops, conditional statements, and problem-solving using JavaScript.",
      icon: "public",
      image:
        "/rank.png",
      links: [],
    },
    {
      title: "Gold Medal – OCC (Top 10 National)",
      dates: "February 3rd - 4th, 2018",
      location: "Olimpiade Cerdas Cermat",
      description:
        "Awarded a gold medal and ranked in the Top 10 at the OCC competition, recognized for excellence in informatika",
      image:
        "/gold.png",
      links: [
      ],
    },
    
  ],
} as const;
