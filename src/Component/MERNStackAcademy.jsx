import React, { useState, useEffect } from 'react';
import { Search, Users, Award, Briefcase, Menu, X, Code, Database, Server, Globe, Zap, Trophy, BookOpen, Play, Clock, Star, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Settings, CheckCircle, FolderOpen, Monitor, Smartphone, Tablet, Eye, ChevronLeft, ChevronRight, Twitter, Instagram, Home, User, FileText, Rocket, Store, WandSparkles, ShieldCheck } from 'lucide-react';
import Me from '../assets/Myphotos/image copy 3.png'
import { Image } from 'lucide-react';

import { Loader2, Send } from "lucide-react";
import Api from '../api'
import Screenshot1 from '../assets/e1.png';
import Screenshot6 from '../assets/int.png';
import Screenshot4 from '../assets/e2.png';
import Screenshot5 from '../assets/gamming.png';
import Screenshot2 from '../assets/barber.png';
import Screenshot7 from '../assets/schoole.png';
import Screenshot8 from '../assets/serveci.png';
import Screenshot9 from '../assets/book.png';
import BglWebsite from '../assets/bgl.png';
import BglApp from '../assets/bglapp.png';
import PhotoTrophy from '../assets/Myphotos/trophy.png';
import PhotoOne from '../assets/Myphotos/image.png';
import PhotoTwo from '../assets/Myphotos/image copy.png';
import PhotoThree from '../assets/Myphotos/image copy 3.png';
import PhotoFour from '../assets/Myphotos/image copy 4.png';

import Screenshot3 from '../assets/chat.png';
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function MERNStackAcademy() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 11,
      title: "BGL Express - Logistics Website, Admin Panel & Mobile App",
      subtitle: "Client project delivered solo | React, MERN APIs, Android launch",
      description: "My latest and most important real-world client project. I built and launched BGL Express end-to-end as a logistics platform with public website, admin workflow, shipment/order experience, wallet/payment UI, and mobile app screens. The Android app is live on Google Play, the website is live, and I am now working on the iOS version based on client requirements. This project shows my hands-on freelance experience, AI-assisted development workflow, client communication, and successful production delivery.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Android App", "Admin Panel", "Vibe Coding"],
      status: "Live Website + Play Store | Client Delivered",
      github: "https://bglexpress.com/",
      live: "https://bglexpress.com/",
      app: "https://play.google.com/store/apps/details?id=com.bglexpress.app",
      image: "BGL",
      color: "from-yellow-400/10 to-red-600/10",
      screenshot: BglApp,
      features: [
        "Live logistics website for BGL Express",
        "Android application launched on Google Play Store",
        "Admin panel and operational flows built for client use",
        "Order creation, shipment tracking, wallet, payment and user flow work",
        "Responsive UI for web and mobile users",
        "Delivered solo as a freelance client project",
        "Used vibe coding and AI-assisted development to move faster",
        "Currently working on iOS version as the next milestone"
      ]
    },


    // {
    //   id: 1,
    //   title: "BookVerse - Interactive Library Management System",
    //   subtitle: "Seamless Book Exploration with Dynamic UI & Responsive Design",
    //   description: "BookVerse is a modern and elegant frontend library management system crafted with Bootstrap 5, jQuery, and Swiper.js. It provides users with a visually engaging way to explore books, authors, and collections. With dynamic content loading, users can browse different sections such as About, Books, and Contact without full page reloads. Carousels powered by Owl Carousel & Swiper.js enhance interactivity, while the responsive design ensures smooth usability across devices. The system also features a personalized user dashboard with reading progress tracking and profile management. Future plans include backend integration with Node.js + MongoDB for full-scale management, user roles, and book issue/return tracking.",
    //   tech: [
    //     "HTML5",
    //     "CSS3",
    //     "Bootstrap 5",
    //     "jQuery",
    //     "XML",
    //     "Owl Carousel",
    //     "Swiper.js",
    //     "Font Awesome",
    //     "Custom CSS/JS"
    //   ],
    //   status: "Frontend Completed | Backend Integration (Node.js + MongoDB) Planned",
    //   github: "https://github.com/Suriya2023/Books_Library_New_Ui-",
    //   live: "https://library-management-system-kohl-two.vercel.app/",
    //   image: "📚",
    //   color: "from-yellow-500/10 to-indigo-700/10",
    //   screenshot: Screenshot9, 
    //   features: [
    //     "Dynamic Content Loading without Page Refresh",
    //     "Book & Author Carousels with Owl Carousel & Swiper.js",
    //     "Sidebar Navigation with User Dashboard",
    //     "Reading Progress Tracking",
    //     "Mobile-Friendly Responsive Design",
    //     "Clean, Modern & Minimal UI",
    //     "Personalized User Profile Section",
    //     "Integration-Ready Architecture for Backend",
    //     "Analytics Dashboard for Book Insights",
    //     "Future Ready: Login System & Book Issue/Return Tracking"
    //   ]


    // },

    {
      id: 2,
      title: "Barbershop Landing Website",
      subtitle: "Modern Barber Studio Showcase | React + Firebase",
      description: "A sleek and responsive landing page for a barbershop, built using React.js and styled from a custom Figma design. The site features an elegant dark UI, animated transitions, and a modern layout that highlights services, team, gallery, and contact. The contact form is fully functional with Firebase integration for real-time message storage. Designed for desktop and mobile, it's deployed live on Vercel for seamless performance.",
      tech: ["React.js", "Firebase", "Tailwind CSS", "Figma"],
      status: "Figma Base UI Onnly | Completed & Live",
      github: "https://github.com/Suriya2023/Barber_Shop",
      live: "https://barbershop-three-smoky.vercel.app/",
      image: "💈",
      color: "from-gray-800/10 to-emerald-600/10",
      screenshot: Screenshot2,
      features: [
        "Modern Barbershop UI from Figma Design",
        "Responsive Layout with Dark Theme",
        "Contact Form with Firebase Integration",
        "Smooth Navigation and Animations",
        "Team and Service Showcase",
        "Deployed on Vercel"
      ]
    },
    {
      id: 4,
      title: "E-Commerce Web App",
      subtitle: "PWA-Powered Shopping Platform | React + Tailwind",
      description: "A mobile-first, fully responsive e-commerce web application built using React.js, Tailwind CSS, and React Router. The frontend offers an engaging shopping experience with seamless navigation, dark/light theme toggle, and PWA support for installability. Key features include product browsing, add-to-cart functionality, wishlist management, and a responsive design. Backend integration, payments, and order tracking modules are currently under development.",
      tech: ["React.js", "Tailwind CSS", "React Router", "LocalStorage", "PWA"],
      status: "Only Frontend UI  Base || Fulll Fetures Added Like Profile , Payment ,Support ,Cart etc... ",
      github: "https://github.com/Suriya2023/ecommerce",
      live: "https://suriya2023.github.io/ecommerce/",
      image: "🛒",
      color: "from-blue-500/10 to-pink-600/10",
      screenshot: Screenshot4,
      features: [
        "Progressive Web App (PWA) Support - Installable as App",
        "Dark and Light Mode Toggle",
        "Mobile-First Fully Responsive Layout",
        "Product Page with Dynamic Filters",
        "Add to Cart and Wishlist Functionality",
        "React Router-Based Page Navigation",
        "Tailwind CSS Styling and Animations",
        "LocalStorage-Based Cart/Wishlist Persistence",
        "Built with Clean, Modern UI"
      ]
    },
    {
      id: 8,
      title: "Service Finder Platform UI",
      subtitle: "Responsive Landing Page for Job & Service Providers",
      description: "A modern and user-centric landing page designed for a service and job provider platform. Built with HTML, CSS, and JavaScript, the UI mimics the core layout of professional service finder apps. It showcases featured services, categories, provider listings, and a simple call-to-action. The design is responsive and ideal for showcasing concepts like freelancing platforms, home services, or gig marketplaces.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      status: "Frontend Live | UI Concept Only",
      github: "https://github.com/Suriya2023",
      live: "https://suriya2023.github.io/Service-Finder/",
      image: "🧰",
      color: "from-orange-400/10 to-cyan-600/10",
      screenshot: Screenshot8,
      features: [
        "Landing Page for Service/Job Finder Platform",
        "Category-Based Layout (e.g., Plumber, Electrician, etc.)",
        "Responsive UI Built with HTML, CSS, and JS",
        "Designed for Desktop and Mobile",
        "Freelancer & Client-Focused Design Structure",
        "Clear CTA and Service Showcase Blocks",
        "Prototype Template for Service Platforms"
      ]
    },

    {
      id: 5,
      title: "Responsive Gaming Website UI",
      subtitle: "Grid-Based Layout | Fully Responsive Frontend",
      description: "A sleek and modern gaming website interface built with HTML, CSS, and JavaScript. Designed using CSS Grid and Flexbox for an adaptive layout that works seamlessly across devices. The UI showcases featured games, trending collections, and a navigation bar — all wrapped in a clean, game-centric design. Built purely for frontend demonstration purposes with a focus on responsiveness and visual appeal.",
      tech: ["HTML", "CSS", "JavaScript", "CSS Grid", "Responsive Design"],
      status: "Frontend Live | UI Prototype Only",
      github: "https://github.com/Suriya2023/Gaming-Websites",
      live: "https://suriya2023.github.io/Gaming-Websites/",
      image: "🎮",
      color: "from-indigo-500/10 to-purple-700/10",
      screenshot: Screenshot5,
      features: [
        "Responsive UI Layout with CSS Grid",
        "Modern Gaming-Themed Aesthetics",
        "Homepage with Featured Games Section",
        "Clean Navigation and Category Cards",
        "Built with HTML, CSS, and JavaScript Only",
        "Optimized for Desktop and Mobile Devices",
        "Ideal as a Landing Page or Game Showcase Template"
      ]
    },

    {
      "id": 3,
      "title": "Responsive E-Commerce Web App with PWA",
      "subtitle": "Mobile-First Shopping Experience | MERN Stack",
      "description": "An intuitive and scalable e-commerce web application built with the MERN stack, featuring a mobile-first design and offline usability through PWA integration. The frontend is fully developed with smooth navigation, dynamic product pages, and a working cart system. Backend modules such as payments, admin controls, and order tracking are under active development.",
      "tech": ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "PWA"],
      "status": "Frontend Most of Ready | Backend In Progress",
      "github": "https://github.com/Suriya2023/Ecoomerce-Frontennd-Backend",
      "live": "https://ecommerce-store-five-jet.vercel.app/",
      "image": "🛍️",
      "color": "from-teal-400/10 to-fuchsia-600/10",
      "screenshot": Screenshot1,
      "features": [
        "Progressive Web App (PWA) - Offline Browsing",
        "Mobile-Optimized Interface",
        "Product Listings with Manual Filtering",
        "Interactive Shopping Cart",
        "User Authentication & Account Creation",
        "Seamless Navigation System",
        "Add to Cart and Wishlist Functionality",
        "Future Additions: Admin Panel, Payments, Inventory, Order System"
      ]
    },
    {
      id: 6,
      title: "WebSeries Landing Page",
      subtitle: "Responsive PWA Landing with Navbar Toggle",
      description: "A lightweight and responsive landing page built for a fictional WebSeries streaming platform. It features a modern, clean UI with a fully functional mobile-friendly navigation bar, smooth layout transitions, and basic content sections. The project is also a registered Progressive Web App (PWA), making it installable as a standalone app on mobile or desktop devices.",
      tech: ["HTML", "CSS", "JavaScript", "PWA"],
      status: "Frontend Live | Basic PWA Setup Completed",
      github: "https://github.com/Suriya2023/WebSeries",
      live: "https://suriya2023.github.io/WebSeries/",
      image: "📺",
      color: "from-yellow-400/10 to-indigo-600/10",
      screenshot: Screenshot6,
      features: [
        "Simple and Clean Landing Page",
        "Responsive Design with Navbar Toggle",
        "Progressive Web App (PWA) Support",
        "Mobile-Friendly Layout",
        "Installable as Web App",
        "Basic Styling with Focused Content Structure",
        "Built with Vanilla HTML, CSS, and JS"
      ]
    }
    ,
    {
      id: 7,
      title: "School Website Landing Page - S.V.",
      subtitle: "Responsive React UI for Educational Institution",
      description: "A professional and responsive school landing page designed using React.js and Tailwind CSS. This project serves as the homepage for a fictional educational institution named S.V., featuring a clean layout, informative sections, and a user-friendly interface. The site includes sections like About, Courses, Facilities, and Contact — optimized for both desktop and mobile views.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      status: "Frontend Live | UI-Only Educational Template",
      github: "https://github.com/Suriya2023/S.V.-",
      live: "https://suriya2023.github.io/S.V.-/",
      image: "🏫",
      color: "from-sky-400/10 to-emerald-500/10",
      screenshot: Screenshot7,
      features: [
        "Educational Institution Landing Page",
        "Built with React and Tailwind CSS",
        "Fully Responsive Design",
        "Modern Section-Based Layout (Hero, About, Courses, Contact)",
        "Optimized for Mobile and Desktop",
        "Clean and Simple Educational UI",
        "Ideal Template for Schools or Colleges"
      ]
    }





  ];

  const techStack = [
    { name: "Vibe Coding", icon: WandSparkles, color: "from-cyan-400 to-fuchsia-600", level: "92%" },
    { name: "React Native", icon: Smartphone, color: "from-sky-400 to-indigo-600", level: "78%" },
    { name: "Android Developer", icon: Store, color: "from-lime-400 to-emerald-600", level: "78%" },
    { name: "Full Stack Developer", icon: Rocket, color: "from-orange-400 to-red-600", level: "88%" },
    { name: "MERN Developer", icon: ShieldCheck, color: "from-teal-400 to-blue-600", level: "88%" },
    { name: "MongoDB", icon: Database, color: "from-green-400 to-green-600", level: "85%" },
    { name: "Express.js", icon: Server, color: "from-gray-600 to-gray-800", level: "80%" },
    { name: "Node.js", icon: Globe, color: "from-green-500 to-green-700", level: "85%" },

    { name: "React.js", icon: Code, color: "from-blue-400 to-blue-600", level: "90%" },
    { name: "C Language", icon: Code, color: "from-blue-500 to-blue-700", level: "65%" },
    { name: "Python", icon: Code, color: "from-blue-500 to-blue-700", level: "65%" },
    { name: "jQuery", icon: Monitor, color: "from-purple-400 to-purple-600", level: "75%" },
    { name: "SQL", icon: Database, color: "from-indigo-400 to-indigo-600", level: "75%" },


    { name: "Figma", icon: Smartphone, color: "from-pink-400 to-pink-600", level: "80%" },
    { name: "Canva", icon: Image, color: "from-cyan-400 to-cyan-600", level: "75%" },
  ];

  const skills = [
    {
      icon: WandSparkles,
      title: "Vibe Coding & AI Assisted Development",
      description: "My main working style: using AI tools with clear prompts, fast iteration, debugging, UI polish, and client-focused delivery"
    },
    {
      icon: Smartphone,
      title: "Android & React Native Development",
      description: "Hands-on mobile app development experience from BGL Express, with Android launch completed and iOS work in progress"
    },
    {
      icon: Rocket,
      title: "Full Stack / MERN Development",
      description: "Building complete web products with React, Node.js, Express.js, MongoDB, APIs, admin panels, and production-ready flows"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Expert in React.js, HTML5, CSS3, JavaScript ES6+, Tailwind CSS, and responsive web design"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Proficient in Node.js, Express.js, RESTful APIs, authentication, and server-side architecture"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Experienced with MongoDB, MySQL, database design, aggregation pipelines, and data optimization"
    },

  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Veer Narmad South Gujarat  University, Surat",
      year: "2023 - Present",
      status: "Pursuing (4th Sem)",
      grade: "8.25",
      semesters: [
        { sem: "Sem 1", sgpa: "7.54" },
        { sem: "Sem 2", sgpa: "7.68" },
        { sem: "Sem 3", sgpa: "8.35" },
        { sem: "Sem 4", sgpa: "8.36" },
        { sem: "Sem 5", sgpa: "8.64" },
        { sem: "Sem 6", sgpa: "Processing" }

      ]
    }
  ];

  const launchHighlights = [
    { icon: Globe, title: "Live Website", value: "bglexpress.com", link: "https://bglexpress.com/", text: "Public logistics website launched for client users." },
    { icon: Store, title: "Play Store App", value: "Bglexpress", link: "https://play.google.com/store/apps/details?id=com.bglexpress.app", text: "My first production mobile app is live on Google Play." },
    { icon: ShieldCheck, title: "Admin Panel", value: "Operations Ready", link: "https://bglexpress.com/", text: "Built client-side workflows for managing logistics operations." },
    { icon: Rocket, title: "Next Milestone", value: "iOS In Progress", link: "https://bglexpress.com/", text: "Currently working on iOS requirements for the same client." }
  ];

  const achievementPhotos = [
    { image: PhotoTrophy, title: "Achievement Trophy", text: "Proud milestone from my development journey." },
    { image: PhotoOne, title: "Portfolio Moment", text: "Personal showcase from my learning path." },
    { image: PhotoTwo, title: "Campus & Growth", text: "Learning, practicing, and building consistently." },
    { image: PhotoThree, title: "Professional Profile", text: "Growing as a freelance full stack developer." },
    { image: PhotoFour, title: "Award Showcase", text: "Memories and proof of consistent effort." }
  ];

  const journeySteps = [
    "Started with web UI projects and responsive frontend practice",
    "Moved into MERN stack with APIs, authentication, database and admin flows",
    "Used vibe coding and AI tools to speed up real client development",
    "Delivered BGL Express website, admin panel and Android app successfully",
    "Now improving mobile skills with React Native and iOS delivery"
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white font-mono">
        {/* Glowing spinner */}
        <div className="w-20 h-20 border-4 border-t-transparent border-b-transparent border-l-cyan-400 border-r-pink-500 rounded-full animate-spin shadow-lg shadow-cyan-500/50 mb-6"></div>

        {/* Typing effect */}
        <div className="text-xl md:text-2xl text-cyan-300 loading-typing border-r-2 border-cyan-300 whitespace-nowrap overflow-hidden">
          Booting up your experience...
        </div>
      </div>

    );
  }
  return (
    <div className="min-h-screen bg-[#0c0b09] pb-20 text-white md:pb-0" >

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0c0b09]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Suraj Rajput
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button data-aos="zoom-in" onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
                <button data-aos="zoom-in" onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">Skills</button>
                <button data-aos="zoom-in" onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
                <button data-aos="zoom-in" onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white transition-colors">Education</button>
                <button data-aos="zoom-in" onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
              </div>
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => {
                  document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-aos="zoom-in"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Hire Me
              </button>

            </div>

            <div onClick={() => {
              document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' });
            }}
              data-aos="zoom-in"
              className=" md:hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              <button data-aos="zoom-in" className="text-gray-300">
                {isMenuOpen ? <X size={24} /> : <Users size={24} />}
              </button>
            </div>
          </div>
        </div>

      </nav>


      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0c0b09]/85 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="flex justify-around items-center py-2">
          <button
            onClick={() => scrollToSection('about')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'about'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={() => scrollToSection('skills')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'skills'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <Code className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Skills</span>
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'projects'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <FolderOpen className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Projects</span>
          </button>

          <button
            onClick={() => scrollToSection('education')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'education'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <BookOpen className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Education</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${activeSection === 'contact'
              ? 'text-cyan-400 bg-cyan-400/10'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            <Mail className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Contact</span>
          </button>
        </div>
      </div>

      <section className="relative mt-16 overflow-hidden bg-[#080a0f] text-white" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.18),transparent_28%),linear-gradient(135deg,#080a0f_0%,#111827_48%,#09090b_100%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/20">
              <WandSparkles className="h-4 w-4 text-cyan-300" />
              Vibe coding + MERN + Android freelance work
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl md:text-7xl">
              I build web apps,
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                mobile apps & client products.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Hi, I am Suraj Rajput. I build modern web and mobile products using MERN stack,
              React Native learning, Android development, and AI-powered vibe coding. My latest
              freelance delivery is BGL Express: live website, admin panel and Play Store app.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://bglexpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1"
              >
                <ExternalLink className="h-5 w-5" />
                BGL Website
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bglexpress.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                <Store className="h-5 w-5" />
                Play Store App
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["15+", "Projects"],
                ["BGL", "Client work"],
                ["1st App", "Play Store"],
                ["iOS", "In progress"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-sm backdrop-blur">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["MERN Developer", "Android Developer", "React Native", "Vibe Coding", "Freelance"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mx-auto w-full max-w-[34rem]"
          >
            <div className="absolute -left-4 top-8 z-20 hidden rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl md:block">
              <Trophy className="mb-2 h-5 w-5 text-yellow-300" />
              <div className="text-sm font-bold">Client Delivered</div>
              <div className="text-xs text-slate-300">BGL Express</div>
            </div>
            <div className="absolute -right-2 bottom-20 z-20 hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-white shadow-2xl backdrop-blur-xl md:block">
              <Smartphone className="mb-2 h-5 w-5 text-cyan-300" />
              <div className="text-sm font-bold">Android Live</div>
              <div className="text-xs text-slate-300">iOS next</div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="grid gap-3 md:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[24rem] overflow-hidden rounded-[1.55rem] bg-slate-950 md:min-h-[32rem]">
                  <img
                    src={Me}
                    alt="Suraj Rajput"
                    className="h-full w-full object-cover object-top grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-2xl font-black text-white">Suraj Rajput</div>
                    <div className="mt-1 text-sm text-slate-200">Full Stack Developer</div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <a href="https://bglexpress.com/" target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-3 transition hover:border-cyan-300/40">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-cyan-200">
                      <Monitor className="h-4 w-4" />
                      Live Website
                    </div>
                    <img src={BglWebsite} alt="BGL Express website" className="h-36 w-full rounded-xl object-cover object-top transition group-hover:scale-[1.02]" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.bglexpress.app" target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-3 transition hover:border-purple-300/40">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-purple-200">
                      <Store className="h-4 w-4" />
                      Play Store
                    </div>
                    <img src={BglApp} alt="BGL Play Store" className="h-36 w-full rounded-xl object-cover object-top transition group-hover:scale-[1.02]" />
                  </a>
                  <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-yellow-300/15 to-cyan-300/10 p-4">
                    <div className="text-sm text-slate-300">Currently building</div>
                    <div className="mt-1 text-xl font-black text-white">iOS version + next freelance work</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section data-aos="fade-up" className="bg-[#0c0b09] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-stretch">
            <div className="bg-[#17140f] backdrop-blur-lg rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl shadow-black/20">
              <div className="p-6 md:p-8 border-b border-white/10">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-semibold text-yellow-200">
                  <Rocket className="h-4 w-4" />
                  Latest Client Launch
                </div>
                <h2 className="mt-5 text-3xl md:text-4xl font-black leading-tight text-white">
                  BGL Express is my first live app and full client delivery.
                </h2>
                <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                  I built the BGL Express website, admin panel experience, and Android app as a solo freelance project.
                  The app is live on Google Play, the website is live for users, the client is happy with delivery,
                  and the next step is iOS work based on client requirements.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://bglexpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-500 px-6 py-3 font-semibold text-black transition-transform hover:-translate-y-1"
                  >
                    <Globe className="h-5 w-5" />
                    Visit Website
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bglexpress.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/50 px-6 py-3 font-semibold text-cyan-200 transition hover:-translate-y-1 hover:bg-cyan-300/10"
                  >
                    <Store className="h-5 w-5" />
                    View Play Store App
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 p-6 md:p-8">
                {launchHighlights.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:-translate-y-1 hover:border-yellow-300/40 hover:bg-white/10"
                  >
                    <item.icon className="h-6 w-6 text-yellow-300" />
                    <div className="mt-3 text-white font-bold">{item.title}</div>
                    <div className="text-cyan-300 text-sm font-semibold">{item.value}</div>
                    <p className="mt-2 text-gray-400 text-sm">{item.text}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-[#17140f] p-4 md:p-5 backdrop-blur-lg shadow-2xl shadow-black/20">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  <Monitor className="h-4 w-4" />
                  Website Preview
                </div>
                <img src={BglWebsite} alt="BGL Express website preview" className="h-64 w-full rounded-2xl object-cover object-top md:h-80" />
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#17140f] p-4 md:p-5 backdrop-blur-lg shadow-2xl shadow-black/20">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-purple-300">
                  <Smartphone className="h-4 w-4" />
                  Play Store App Preview
                </div>
                <img src={BglApp} alt="BGL Express Play Store app preview" className="h-64 w-full rounded-2xl object-cover object-top md:h-80" />
              </div>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#17140f] p-6 md:p-8 backdrop-blur-lg">
              <div className="inline-flex items-center gap-2 text-cyan-300 font-semibold">
                <WandSparkles className="h-5 w-5" />
                My Development Journey
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">What I did and what comes next</h3>
              <div className="mt-6 space-y-4">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-300">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#17140f] p-6 md:p-8 backdrop-blur-lg">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-purple-300 font-semibold">
                    <Trophy className="h-5 w-5" />
                    Personal Photos & Achievements
                  </div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">Proof of growth, effort and milestones</h3>
                </div>
                <p className="max-w-md text-sm text-gray-400">
                  These moments show my learning journey, achievements, and confidence as I grow into freelance development.
                </p>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievementPhotos.map((photo, index) => (
                  <div key={index} className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <img src={photo.image} alt={photo.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="p-4">
                      <h4 className="font-semibold text-white">{photo.title}</h4>
                      <p className="mt-1 text-sm text-gray-400">{photo.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Info */}
      <section data-aos="fade-up" className="py-10 md:py-16 bg-black/5 dark:bg-black/20 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Feel free to reach out via any platform listed below. I’m open to freelance, full-time, or collaborative work.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-6 md:p-10 border border-white/10 backdrop-blur-md shadow-lg">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-white">

              {/* Email */}
              <a
                href="mailto:surajrajput221221@gmail.com"
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Send Email"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:animate-bounce" />
                <span className="text-sm md:text-base group-hover:underline">surajrajput221221@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Call Now"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-purple-400 group-hover:animate-pulse" />
                <span className="text-sm md:text-base group-hover:underline">+91 9510190352</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Suriya2023"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Visit GitHub"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white" />
                <span className="text-sm md:text-base group-hover:underline">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/suraj-rajput-a65bb9358/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:text-white" />
                <span className="text-sm md:text-base group-hover:underline">LinkedIn</span>
              </a>

              {/* Location */}
              <div
                className="group flex items-center space-x-2 hover:scale-105 transition-transform cursor-default"
                title="Location"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 12.5C19.5 17 12 21 12 21S4.5 17 4.5 12.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm md:text-base">Surat, Gujarat</span>
              </div>

              {/* Resume */}
              <a
                href="/suraj-resume.pdf"
                download
                className="group flex items-center space-x-2 hover:scale-105 transition-transform"
                title="Download Resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l3.5-3.5M12 20l-3.5-3.5" />
                </svg>
                <span className="text-sm md:text-base group-hover:underline">Download Resume</span>
              </a>


            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Technologies</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              My creative toolkit, ranging from UI development to AI integration — designed to deliver smart, sleek digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tech Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-5 md:p-6 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 text-white flex flex-col items-center`}
                >
                  <div className="p-4 bg-white/10 rounded-full mb-3 shadow-inner">
                    <tech.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base">{tech.name}</h4>
                  <div className="w-full mt-2 bg-white/20 rounded-full h-1.5">
                    <div
                      className="bg-white h-full rounded-full transition-all duration-1000"
                      style={{ width: tech.level }}
                    ></div>
                  </div>
                  <span className="text-xs text-white/80 mt-1">{tech.level}</span>
                </div>
              ))}
            </div>

            {/* Skill Descriptions */}
            <div className="space-y-6 relative">
              {/* Ribbon Badge */}
              <div className="absolute -top-5 left-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                Featured
              </div>

              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl space-y-4">
                <h3 className="text-xl font-bold text-white">AI Prompt Engineering</h3>
                <p className="text-white/90 text-sm">
                  Designing highly contextual prompts to maximize AI model efficiency and response precision using tools like GPT-4.
                </p>
              </div>

              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full shadow-md">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{skill.title}</h4>
                    <p className="text-sm text-gray-300">{skill.description}</p>
                  </div>
                </div>
              ))}

              {/* Extra Section – Optional */}
              <div className="pt-4">
                <h4 className="text-white font-semibold text-lg mb-2">Collaboration Strengths</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Team-first mindset & proactive communication</li>
                  <li>Agile & Scrum familiarity</li>
                  <li>Continuous learning & AI-integrated problem solving</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* Enhanced Projects Section */}
      <section data-aos="zoom-in" id="projects" className="py-12 md:py-16 lg:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl p-6 md:p-10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
          <div data-aos="zoom-in" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 border border-white/10">
                <FolderOpen className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                <span className="text-cyan-400 text-xs md:text-sm font-semibold">Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
                Showcase of my best work in MERN stack development
              </p>
            </div>

            {/* ✅ Project Carousel with dynamic height */}
            <div className="relative w-full">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${index === currentSlide ? 'relative z-10 opacity-100' : 'opacity-0 -z-10 pointer-events-none'
                    }`}
                >
                  <div
                    className={`bg-white/5 backdrop-blur-lg rounded-3xl p-4 md:p-6 lg:p-8 border border-white/10 hover:border-cyan-400/30 transition-all mx-2 md:mx-4 bg-gradient-to-br ${project.color}`}
                  >
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                      {/* Info */}
                      <div>
                        <div onClick={() => window.location.href = project.live} className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                          <div className="text-4xl md:text-6xl">{project.image}</div>
                          <div>
                            <div className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${project.status.includes('COMPLETED') || project.status.includes('Live')
                              ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                              }`}>
                              <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-1 md:mr-2 ${project.status.includes('COMPLETED') || project.status.includes('Live') ? 'bg-green-400' : 'bg-yellow-400'
                                } animate-pulse`}></div>
                              {project.status}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                        <p className="text-cyan-400 text-lg md:text-xl mb-4 md:mb-6 font-medium">{project.subtitle}</p>
                        <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">{project.description}</p>

                        {/* Features */}
                        <div className="mb-6 md:mb-8">
                          <h4 className="text-white font-semibold mb-3 md:mb-4 flex items-center text-sm md:text-base">
                            <Settings className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mr-2" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                            {project.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 rounded-full text-xs md:text-sm border border-cyan-400/30 font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                          <button
                            onClick={() => window.location.href = project.github}
                            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105"
                          >
                            {project.app ? <Globe className="w-4 h-4 md:w-5 md:h-5" /> : <Github className="w-4 h-4 md:w-5 md:h-5" />}
                            <span className="font-medium text-sm md:text-base">{project.app ? "Live Website" : "View Code"}</span>
                          </button>

                          <button
                            onClick={() => window.location.href = project.live}
                            className="flex items-center justify-center space-x-2 border-2 border-cyan-400/50 text-cyan-400 px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-medium text-sm md:text-base">Live Demo</span>
                          </button>
                          {project.app && (
                            <button
                              onClick={() => window.location.href = project.app}
                              className="flex items-center justify-center space-x-2 border-2 border-yellow-300/60 text-yellow-200 px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:border-yellow-300 hover:bg-yellow-300/10 transition-all"
                            >
                              <Store className="w-4 h-4 md:w-5 md:h-5" />
                              <span className="font-medium text-sm md:text-base">Play Store</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Image Preview */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10">
                          <div className="flex items-center space-x-2 mb-4 md:mb-6">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 bg-slate-700/50 rounded-full h-6 md:h-8 flex items-center px-3 md:px-4">
                              <span className="text-gray-400 text-xs md:text-sm">http://localhost:5173</span>
                            </div>
                          </div>
                          <div onClick={() => window.location.href = project.live} className="relative cursor-pointer py-5 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-xl h-32 md:h-48 lg:h-64 border border-white/5 overflow-hidden">
                            <img
                              src={project.screenshot}
                              alt="Project Preview"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Navigation Controls */}
              <div className="flex justify-center items-center space-x-4 mt-6 md:mt-8">
                <button
                  onClick={prevSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all hover:scale-110 border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide
                        ? 'bg-cyan-400 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all hover:scale-110 border border-white/20"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* Education Section */}
      <section data-aos="zoom-in" id="education" className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10">
              <BookOpen className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-purple-400 text-sm font-semibold">Academic Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Education</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-purple-400/30 transition-all space-y-6 mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-4">
                      <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-400 text-base font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="text-cyan-400 font-semibold text-base">{edu.year}</div>
                    <div className="text-gray-400 text-sm">{edu.status}</div>
                  </div>
                </div>

                {/* SGPA Panel */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {edu.semesters.map((sem, i) => (
                    <div key={i} className={`rounded-xl p-4 border text-center shadow-md ${sem.sgpa === "Processing"
                      ? "bg-yellow-900/20 border-yellow-400 text-yellow-300"
                      : "bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-purple-400 text-white"}`}>
                      <p className="text-sm font-semibold">{sem.sem}</p>
                      <p className="text-lg font-bold mt-1">{sem.sgpa}</p>
                    </div>
                  ))}
                </div>

                {/* Current CGPA */}
                <div className="flex items-center justify-between bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl p-4 border border-purple-400/20 mt-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium text-base">Current CGPA</span>
                  </div>
                  <div className="text-purple-400 font-bold text-xl">{edu.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section data-aos="zoom-in" id="contact" className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="zoom-in" className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 border border-white/10">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
              <span data-aos="zoom-in" className="text-cyan-400 text-xs md:text-sm font-semibold">Get In Touch</span>
            </div>
            <h2 data-aos="zoom-in" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Let's Work <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Together</span>
            </h2>
            <p data-aos="zoom-in" className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project!
            </p>
          </div>

          <div id='hire' data-aos="zoom-in" className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Contact Information</h3>

                <div data-aos="zoom-in" className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm md:text-base">Email</div>
                      <div className="text-gray-400 text-sm md:text-base">surajrajput221221@gmail.com</div>
                    </div>
                  </div>

                  <div data-aos="zoom-in" className="flex items-center space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Phone data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div data-aos="zoom-in" className="text-white font-medium text-sm md:text-base">Phone</div>
                      <a href="tel:+919510190352" data-aos="zoom-in" className="text-gray-400 text-sm md:text-base hover:text-white">
                        +91 9510190352
                      </a>

                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <MapPin data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <div data-aos="zoom-in" className="text-white font-medium text-sm md:text-base">Location</div>
                      <div data-aos="zoom-in" className="text-gray-400 text-sm md:text-base">Surat, Gujarat, India</div>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex space-x-4 mt-6 md:mt-8">
                  <button onClick={() => { window.location.href = 'https://github.com/Suriya2023' }} className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-full hover:scale-110 transition-transform border border-white/10">
                    <Github data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                  <button onClick={() => { window.location.href = 'https://www.linkedin.com/in/suraj-rajput-a65bb9358/' }} className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full hover:scale-110 transition-transform">
                    <Linkedin data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                  <button onClick={() => { window.location.href = 'https://x.com/RajputSr2k24' }} className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-full hover:scale-110 transition-transform">
                    <Twitter data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                  <button onClick={() => { window.location.href = 'https://www.instagram.com/suraj_rajput__2k25/' }} className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform">
                    <Instagram data-aos="zoom-in" className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="zoom-in" className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Send Message</h3>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (isSubmitting) return;

                  setIsSubmitting(true);
                  setFormStatus({ type: '', message: '' });

                  const name = e.target.name.value.trim();
                  const email = e.target.email.value.trim();
                  const subject = e.target.subject.value.trim();
                  const message = e.target.message.value.trim();
                  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  if (!emailPattern.test(email)) {
                    setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
                    setIsSubmitting(false);
                    return;
                  }

                  try {
                    const res = await Api.post('/api/send', {
                      name,
                      email,
                      subject,
                      message
                    });

                    if (res.data.success) {
                      setFormStatus({
                        type: 'success',
                        message: 'Message sent successfully. I will reply soon.'
                      });
                      e.target.reset();
                    } else {
                      setFormStatus({
                        type: 'error',
                        message: res.data.message || 'Message could not be sent.'
                      });
                    }
                  } catch (err) {
                    console.error('Submit error:', err);
                    setFormStatus({
                      type: 'error',
                      message: err.response?.data?.message || 'Something went wrong, please try again.'
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-4 md:space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm md:text-base">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      minLength={2}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm md:text-base">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      minLength={5}
                      pattern="^\S+@\S+\.\S+$"
                      title="Please enter a valid email address"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    minLength={2}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    minLength={10}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {formStatus.message && (
                  <div className={`rounded-lg border px-4 py-3 text-sm ${formStatus.type === 'success'
                    ? 'border-green-400/30 bg-green-500/10 text-green-300'
                    : 'border-red-400/30 bg-red-500/10 text-red-300'
                    }`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative w-full flex items-center justify-center gap-2  bg-gradient-to-br   to-blue-900  via-black  from-red-900 text-white py-3 md:py-4 rounded-xl transition-all transform font-semibold text-base tracking-wide shadow-lg 
    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:from-red-600 hover:to-blue-700'}
  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-aos="zoom-in" className="py-6 md:py-8 border-t border-white/10 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="zoom-in" className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div data-aos="zoom-in" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Suraj Rajput
              </div>
            </div>
            <p data-aos="zoom-in" className="text-gray-400 text-sm md:text-base">
              © 2024 Suraj Rajput. All rights reserved. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

