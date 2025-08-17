import React, { useEffect, useState } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        skills.forEach(
          (skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 200);
          },
          { threshold: 0.3 }
        );
      }
    });
    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Wordpress web design", level: 94 },
    { name: "Facebook Ad expert", level: 90 },
    { name: "HTML & CSS", level: 94 },
    { name: "JavaScript", level: 93 },
    { name: "React.js", level: 90 },
  ];

  const education = [
    {
      year: "2024-PRESENT",
      title: "M.B.Ch.B",
      institution: "Obafemi Awolowo University.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vel inventore, quas illum iste recusanda",
    },
    {
      year: "2025-PRESENT",
      title: "BSC",
      institution: "University of the people, US.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vel inventore, quas illum iste recusanda",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* background element */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2
       w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* left side */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-blue-600 font-semibold text-lg mb-4">
                Qualifications
              </p>
              <p className="text-blue-600 text-4xl font-bold mb-8">Education</p>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className={`border-l-2 border-blue-800 pl-6 relative group transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                  >
                    <div
                      className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full 
                        group-hover:scale-125 transition-all duration-300"
                    ></div>
                    <div className=" text-white text-sm font-semibold mb-2 group-hover:text-green-300 transition-all duration-300 whitespace-nowrap">
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                      {edu.title}
                    </h3>
                    <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 mb-2 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                      {edu.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right side */}
          <div className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}>
            <div className="mb-12">
              <p className="text-blue-600 font-semibold text-lg mb-4">
                Expertise
              </p>
              <p className="font-black text-4xl text-white mb-8">My Skills</p>
            </div>
            <div className="space-y-8">
              {skills.map((skill, index) => {
                return (
                  <div 
                  key={index} className={`space-y-2 duration-1000`}
                  style={{transitionDelay: `${index * 150}ms`}}>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <span className="text-white font-semibold ">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden ">
                      <div className="bg-gradient-to-r from-blue-800 to-blue-400 h-2 rounded-full
                       transition-all duration-1500 easy-out relative" 
                       style={{width: `${animatedSkills[skill.name] || 0}%`}}></div>
                      <div className="absolute inset-o bg-white/20 "></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
