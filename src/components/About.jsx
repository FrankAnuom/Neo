import React, { useEffect, useState } from "react";
import chika from "../assets/chika.jpg";

function About() {
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
    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2
       w-full h-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"
        ></div>
      </div>

      <div className="container mx-auto">
        <p className="text-blue-500 font-semibold text-lg mt-0 text-center mb-8 md:hidden sm:block ">
          About Me
        </p>
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-space">
            {/* image left */}

            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              } `}
            >
              <div className="relative group">
                <div className="w-full max-w-md mx-auto">
                  <div
                    className="relative border-4 border-white rounded-2xl p-2 group-hover:border-blue-800
                            transition-all duration-300"
                  >
                    <p className="text-blue-500 font-semibold text-lg hidden ">
                      About Me
                    </p>
                    <img
                      src={chika}
                      alt=""
                      className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-2 bg-gradient-to-tr from-blue-800/10 to-transparent rounded-xl opacity-0
                    group-hover:opacity-100 transition-all duration-500"
                    ></div>
                    {/* float decoration */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-600/20 rounded-full"></div>
                    <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                } `}
            >
              <div className="space-y-4">
                <p className="text-blue-500 font-semibold text-lg hidden sm:block">
                  About Me
                </p>
                <h2 className="text-4xl md:text-5xl text-gray-500 font-bold animate-slide-up">
                  Why I am Qualified
                </h2>
                <p className="text-blue-500 font-semibold delay-200">
                  Wordpress Web designer & Web Developer
                </p>
              </div>
              <div className="space-y-6 text-white leading-relaxed">
                <p className={`text-lg transition-all duration-100 delay-500`}>
                  My name is Anuom Chika Frank, and I’m a Nigerian student of
                  Medicine and Surgery at Obafemi Awolowo University, Ile-Ife.
                  Alongside my medical journey, I’m also pursuing a Bachelor of
                  Science in Computer Science at the University of the People,
                  USA a fully accredited, tuition-free, online American
                  university recognized for its innovative approach to
                  accessible higher education.
                </p>
                <p className={`transition-all duration-1000 delay-700`}>
                  I am a certified web developer, holding certifications from
                  FreeCodeCamp in HTML & CSS, JavaScript, and React, as well as
                  additional training in HTML & CSS from Udemy. My work focuses
                  on creating modern, responsive, and user-friendly web
                  applications.
                </p>
                <p className={`transition-all duration-1000 delay-700`}>
                  My deep interest lies at the intersection of technology,
                  healthcare, and artificial intelligence. I believe that
                  tech—especially AI—has the potential to transform healthcare
                  delivery, making it smarter, more efficient, and more
                  accessible. My journey into tech comes from a lifelong love
                  for innovation and problem-solving, and I am committed to
                  building solutions that bridge the gap between medicine and
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
