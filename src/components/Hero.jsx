import React, { useEffect, useState } from "react";
import { ArrowRight, Github, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import neo from "../assets/neo.jpg";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br 
   from-slate-900 to-slate-900 pt-20 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2
       w-full h-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"
        ></div>
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left container */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p
                className={`text-blue-600 font-semibold text-lg transition-all duration-1000
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
              >
                Get Ready to Start Work
              </p>
              <h1
                className={`text-5xl md:text-7xl font-black
                 text-white leading-tight transition-all duration-1000 delay-200
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
              >
                I'm
                <span className="text-blue-600"> Frank,</span> <br />
                <span className="text-white">front-end Dev</span>
              </h1>
              <p
                className={`text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-1000 delay-400
                   ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
              >I’m a certified web developer skilled in HTML, CSS, JavaScript, 
              and React. With training from FreeCodeCamp and Udemy, I’m currently 
              studying Computer Science at the University of the People and building modern, user-friendly web applications.
               Click the ‘Learn More’ button to know more.
              </p>
              <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000
                 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}>
                <button
                  className="bg-white text-blue-800 h-13
                 px-6 py-4 rounded-lg hover:bg-blue-800 hover:text-white 
                 transition-all duration-300 flex items-center gap-2
                  group shadow-lg hover:shadow-xl font-medium hover:scale-105"
                >
                  Learn More{" "}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover;translate-x-1" />
                </button>
                <button
                  className="border-2 border-slate-300 text-white px-5 py-2 h-13 rounded-lg
                 hover:bg-blue-800 hover:text-white trasnition-all duration-300 
                 font-medium flex items-center gap-2 group hover:scale-105 "
                >
                  <a
                    href="https://wa.me/qr/HR4KC53VG3KGL1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire me
                  </a>
                </button>
              </div>
              {/* social links */}
              <div className={`flex gap-4 pt-6 transition-all duration-100 delay-800
                 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}>
                <a
                  href="https://github.com/FrankAnuom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 bg-white rounded-lg flex items-center justify-center hover:bg-white hover:text-blue
                transition-all duration-300 group hover:scale-110 hover:rotate-6"
                >
                  <Github className="w-12 h-12" />
                </a>
                <a
                  href="https://x.com/neoryte?t=kDcRbeZxIbY0_8x5e7bZ2w&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 bg-white rounded-lg flex items-center justify-center hover:bg-white hover:text-blue
                transition-all duration-300 group hover:scale-110 hover:rotate-6"
                >
                  <X className="w-12 h-12" />
                </a>
                <a href="https://wa.me/qr/HR4KC53VG3KGL1" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp
                    className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-500 hover:text-blue
                transition-all duration-300 group hover:scale-110 hover:rotate-6"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* right container */}
          <div className={`relative transition-all duration-1000 delay-300
             ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}>
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative group">
                  <img
                    src={neo}
                    alt=""
                    className={`w-full rounded-2xl shadow-2xl border-3 border-blue-800
                     transition-all duration-500 group-hover:scale-105
                      ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  />
                </div>
              </div>
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-2xl opacity-20
                 `}></div>
              <div className={`absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full opacity-20
                `}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
