import { ArrowUp, Heart } from "lucide-react";
import React from "react";

function Footer() {
    const scrollToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })

    }
  return (
    <div className="bg-slate-900 text-white py-12 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2
       w-full h-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:text-start text-center justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2 group cursor-pointer">
              <span className="text-blue-500 transition-all duration-300">
                Anuom
              </span>
              <span className="text-white transition-all duration-300">
                {" "}
                Chika
              </span>
              <span className="text-white transition-all duration-300"> Frank
              </span>
              <p className="text-gray-400 transition-all duration-300">
                Front end Developer & Wordpress website designer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-gray-400">
              <Heart className="w-4 h-4 fill-current" />
              <span>By Neo</span>
            </div>
            <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-blue-800 transition-all duration-300 justify-center flex items-center hover:bg-blue-500">
              <ArrowUp />
            </button>
          </div>
        </div>
        <div className="mt-8 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Neoryte. All rights reserved

        </div>
      </div>
    </div>
  );
}

export default Footer;
