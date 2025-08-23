import React, { useEffect, useState } from "react";
import blog from "../assets/blog.png";
import currency from "../assets/currency.jpg";
import note from "../assets/note.jpg";
import gallery from "../assets/gallery.png";
import weather from "../assets/weather.jpg";
import { ExternalLinkIcon, Github } from "lucide-react";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    const element = document.getElementById("projects");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Blog",
      description:
        "This is a fullstack blog platform built with React, Node.js, Express, and MongoDB, designed for seamless content creation, management, and publishing. It features a secure admin dashboard where posts, categories, and users can be managed efficiently. A standout functionality is the AI-powered content generation, which allows the admin to generate draft articles using AI before editing and publishing. The application supports full CRUD operations, secure authentication and authorization, and delivers a fully responsive interface for an engaging user experience.",
      image: blog,
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Fullstack",
      featured: true,
      link: "http://barakat-nine.vercel.app/",
    },
    {
      id: 2,
      title: "Image Gallery",
      description:
        "A modern image gallery web app built with React, Firebase, and Cloudinary. It features secure authentication with Firebase, ensuring only the admin can upload and manage images, while visitors can browse and search through the gallery. Uploaded images are stored in Cloudinary for optimized performance, with metadata managed in Firebase for persistence. The app is responsive, fast, and designed to provide a smooth user experience for showcasing visual content.",
      image: gallery,
      technologies: ["React", "Cloudinary", "Firesbase"],
      category: "Fullstack",
      featured: true,
      link: "https://lumicho.vercel.app/",
    },
    {
      id: 3,
      title: "Sticky note",
      description:
        "A React-based sticky notes app that allows users to quickly create, edit, and delete notes with ease. It uses local storage to save notes directly on the device, ensuring persistence even after page refresh. With a clean, responsive design and smooth interactions, the app provides an intuitive way to organize thoughts and reminders.",
      image: note,
      technologies: ["React", "tailwind"],
      category: "Front End",
      featured: true,
      link: "https://note-taupe-gamma.vercel.app/",
    },
    {
      id: 4,
      title: "Expense tracker",
      description:
        "A lightweight expense tracking app built with HTML, CSS, and JavaScript that helps users manage their daily finances. It allows users to add income and expenses, categorize transactions, and view their current balance in real time. With a simple and responsive interface, the app provides an easy-to-use solution for tracking personal spending without the need for external libraries or frameworks.",
      image: currency,
      technologies: ["HTML", "CSS", "javaScript"],
      category: "Front End",
      featured: true,
      link: "https://budget-app-dusky-seven.vercel.app/",
    },
    {
      id: 5, // fixed duplicate id
      title: "Weather App",
      description:
        "A responsive weather app built with HTML, CSS, and JavaScript that provides real-time weather updates for any city. It fetches live data from a weather API and displays key details such as temperature, conditions, and location. With a clean and user-friendly interface, the app makes it easy for users to quickly check current weather information on any device.",
      image: weather,
      technologies: ["HTML", "CSS", "javaScript"],
      category: "Front End",
      featured: true,
      link: "https://weather-app-virid-six-72.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2
       w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"
        ></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000
           ${
             isVisible
               ? "opacity-100 translate-y-0"
               : "opacity-0 translate-y-10"
           }`}
        >
          <p className="text-blue-800 font-semibold text-lg mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are my recently completed projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all
            duration-1000 delay-600 overflow-hidden border border-slate-700 hover:border-white hover:scale-105
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-70 object-cover group-hover:scale-105 transition-all duration-300"
                  />
                  <div
                    className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <button
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all
                  duration-300"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all
                  duration-300"
                    >
                      <ExternalLinkIcon className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white bg-slate-800 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-white cursor-pointer text-lg font-bold mb-2 group-hover:text-blue-800 transition-all duration-300">
                    <a target="_blank" href={project.link}>
                      {project.title}
                    </a>
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => {
                      return (
                        <div key={techIndex}>
                          <span className="bg-blue-800 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`text-center transition-all duration-1000 delay-1000 mt-5
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          <button
            className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-400 transition-all duration-300 font-medium 
             shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;