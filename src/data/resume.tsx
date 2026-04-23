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
    "Git",
    "GitHub",
    "Microsoft Office",
    "TailwindCSS",
    "Bootstrap",
    "Figma",
    "Capcut",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://best.smktibazma.com", icon: "/best.png", label: "BEST" },
    {
      href: "https://smktibazma.sch.id",
      icon: "/sekolah.png",
      label: "SMK TI Bazma",
    },
    {
      href: "https://himpana.com",
      icon: "/logo-himpana.png",
      label: "HIMPANA",
    },
    {
      href: "https://spmb.smktibazma.sch.id",
      icon: "/logo.webp",
      label: "SPMB",
    },
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
      company: "OSIS",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Finance",
      logoUrl: "/osis.png",
      start: "August 2024",
      end: "October 2025",
      description:
        "Manage organizational finances, prepare financial reports, and ensure activity budgets run effectively and transparently.",
    },
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
      company: "Mudabbir",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Cleaning and Maintenance Division",
      logoUrl: "/mudabbir.jpg",
      start: "September 2025",
      end: "now",
      description:
        "Maintained cleanliness and order within the dormitory, organized cleaning schedules, and ensured a comfortable and hygienic environment for all residents.",
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
      video: "",
    },
    {
      title: "SMK TI Bazma",
      href: "https://smktibazma.sch.id/",
      dates: "August 2025 - December 2025",
      active: true,
      description:
        "Lead the development of the SMK TI Bazma main website, creating a centralized platform to showcase student projects, experiences, school information, and digital services.",
      technologies: ["Next.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://smktibazma.sch.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/websmk.png",
      video: "",
    },
    {
      title: "HIMPANA",
      href: "https://himpana.com/",
      dates: "October 2025 - November 2025",
      active: true,
      description:
        "The HIMPANA website is a digital platform that provides information about the HIMPANA community, including activities, news, and services for its members. It also serves as a platform for online membership registration. The website is designed to facilitate access to information and improve connectivity between members in one integrated, user-friendly system.",
      technologies: ["Next.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://himpana.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/himpana.png",
      video: "",
    },
    {
      title: "SPMB(Sistem Penerimaan Murid Baru)",
      href: "https://spmb.smktibazma.sch.id/",
      dates: "November 2025 - November 2025",
      active: true,
      description:
        "Lead the development of the SMK TI Bazma main website, creating a centralized platform to showcase student projects, experiences, school information, and digital services.",
      technologies: ["Next.js", "Javascript", "Express.js"],
      links: [
        {
          type: "Website",
          href: "https://spmb.smktibazma.sch.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/spmb.png",
      video: "",
    },
    {
      title: "Progify - Finalis, Dinamik UPI 2025",
      href: "https://spmb.smktibazma.sch.id/",
      dates: "November 2025 - Desember 2025",
      active: true,
      description:
        "Developed Progify, a web-based system for verifying aid recipients using QR codes, improving security and efficiency in the distribution process.",
      technologies: ["Figma", "Canva", "Design Thinking"],
      links: [
        {
          type: "UI/UX Design",
          href: "https://www.figma.com/design/5UX83uj2w0LUuFmn7WUWcS/Untitled?node-id=0-1&t=9BvAaUG4WsnlMwUG-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/progify.png",
      video: "",
    },
    {
      title: "LINAS(Library Nasional) - Finalis, WiseInnovera 2026",
      href: "https://spmb.smktibazma.sch.id/",
      dates: "January 2026 - February 2026",
      active: true,
      description:
        "Developed Linas, a mobile app that helps users find books across integrated libraries in Indonesia, featuring AI-powered recommendations based on users’ preferences and mood.",
      technologies: ["Figma", "Canva", "Design Thinking"],
      links: [
        {
          type: "UI/UX Design",
          href: "https://www.figma.com/design/FrOTwE5X0ymEEXsDPDdb4V/Bissmillah-Ke-Bandung?node-id=0-1&t=TcBfvum9YmfTwXyW-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/linas.png",
      video: "",
    },
    {
      title: "KajianQu",
      href: "https://spmb.smktibazma.sch.id/",
      dates: "March 2026 - March 2026",
      active: true,
      description:
        "Developed a Qur’an learning mobile app (KajianQu) with AI-powered features for recitation correction and memorization (hafalan) submission, helping users improve accuracy and consistency in learning.",
      technologies: ["Figma", "Canva", "Design Thinking"],
      links: [
        {
          type: "UI/UX Design",
          href: "https://www.figma.com/design/cQEHbUb5EeWBz1SX7C0wJX/KajianKu?node-id=185-54579&t=rtIxgE7FjxOEKwRH-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kajianqu.png",
      video: "",
    },
    {
      title: "BantuIn = Finalis, FindIT 2026",
      href: "https://spmb.smktibazma.sch.id/",
      dates: "March 2026 - April 2026",
      active: true,
      description:
        "AI-powered service application for real-time location-based worker search with smart matching and emergency service features.",
      technologies: ["Figma", "Canva", "Design Thinking"],
      links: [
        {
          type: "UI/UX Design",
          href: "https://www.figma.com/design/9QSSHAZPPLfYt5uv29HhV2/OTW-Yogyakarta-?node-id=0-1&t=CnpZBjZ3D3Zdknrh-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bantuin.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Gold Medal – Ganesha Olimpiade (Top 10 National)",
      dates: "August 2024",
      location: "Ganesha Olimpiade",
      description:
        "Awarded a gold medal and ranked in the Top 10 at the OCC competition, recognized for excellence in informatika",
      image: "/ganesha.jpg",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1NYepLkac7S0YyshJGhlxTd1oXxmjlLka/view?usp=sharing",
        },
      ],
      href: "https://ganeshaolimpiade.com/kompetisi/occ-2024",
    },
    {
      title: "LSP Sertifikasi Desain Multimedia Muda",
      dates: "25 November  - 30 November 2024",
      location: "Online",
      description:
        "Certified in Junior Multimedia Design covering essential skills in graphic design, video editing, animation, and digital media production. This certification verifies competency in applying creative concepts, using design software tools, and producing multimedia content that meets industry standards.",
      image: "/lsp.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1e00y0SAnaW8Snc0fruIl58kqAvWE0H4h/view?usp=sharing",
        },
      ],
    },
    {
      title: "Certificate basic Java Script",
      dates: "Feb 2025",
      location: "HackerRank",
      description:
        "Certified in JavaScript (Basic) by HackerRank, demonstrating proficiency in fundamental concepts such as data types, functions, loops, conditional statements, and problem-solving using JavaScript.",
      icon: "public",
      image: "/rank.png",
      links: [
        {
          title: "Refernce",
          href: "https://www.hackerrank.com/certificates/iframe/6d8c82c4adfa",
        },
      ],
    },
    {
      title: "Teladan Akademik & Sopan Santun di SMK TI BAZMA",
      dates: "2023 - 2024 - 2025",
      location: "SMK TI BAZMA",
      description:
        "Recognized for consistent academic achievements and outstanding manners, serving as a role model for fellow students.",
      image: "/sekolah.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/170KmekEUA0VrzScY4h7AFG2QqSvv5Epu/view?usp=sharing",
        },
      ],
    },
    {
      title: "Certificate of Competence - Introduction to Information Security",
      dates: "May 2025",
      location: "CyberAcademy",
      description:
        "Certificate of Competence in Introduction to Information Security by Cyber Academy Indonesia, demonstrating foundational knowledge in cybersecurity principles, data protection, and information security practices.",
      image: "/cyber.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Refernce",
          href: "https://www.cyberacademy.id/certificate/PKMI01107253204",
        },
      ],
    },
    {
      title: "Certificate of Participation - The Amazing You 5",
      dates: "Jun 2025",
      location: "ESQ, Dr. (H.C) Ary Ginanjar Agustian",
      description:
        "Certificate of Participation in The Amazing You 5, recognizing active involvement in a personal development program focused on self-growth, mindset, and motivation.",
      image: "/esq.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1gXXn3s0BapYQMbpiVZx80tVTC3JIRqDC/view?usp=sharing",
        },
      ],
    },
    {
      title: "ASEAN Data Science Explorers – Enablement Session (SAP Analytics Cloud)",
      dates: "Jun 2025",
      location: "ASEAN Foundation & SAP",
      description:
        "Certificate of Participation in ASEAN Data Science Explorers – Enablement Session, demonstrating foundational skills in data analysis and visualization using SAP Analytics Cloud.",
      image: "/sap.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1TToU9FeRt3l4g0cAx46_PjOd6dcrcxWS/view?usp=sharing",
        },
      ],
    },
    {
      title: "Certificate of Competition – Jagoan Hosting Infra Competition",
      dates: "Nov 2025",
      location: "Jagoan Hosting & Maspion IT",
      description:
        "Certificate of Competition in Jagoan Hosting Infra Competition by Jagoan Hosting, showcasing skills in server infrastructure, deployment, and system optimization.",
      image: "/jhic.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Refernce",
          href: "https://drive.google.com/file/d/1g9wLJXonLyUt-fkgJB1G9oXcEt84NeyS/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
