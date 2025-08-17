import React, { useEffect, useState } from "react";
import { Github, Send, X } from "lucide-react";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

function Contact() {
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
    const element = document.getElementById("contact");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2
       w-full h-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blue-800 font-semibold text-lg mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let me be part of next big thing!
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            itaque sint officiis doloremque alias quaerat nihil aliquid ad rem,
            fugiat qui sapiente quasi maxime dolorem temporibus ducimus
            explicabo quo molestias provident consequuntur!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`space-y-8 transition-all duration-1000
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6 ">
              Contact Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              nesciunt itaque corrupti alias! Alias sequi nihil enim recusandae
              amet, facere ex placeat,
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: mail,
                  title: "Email",
                  info: "anuomochika@gmail.com",
                },
                {
                  icon: phone,
                  title: "Phone",
                  info: "+234 (0) 8137424027",
                },
              ].map((contact, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700
                transition-all duration-300 border border-slate-700 hover:border-blue-800 group cursor-pointer transform
                hover:scale-105
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                    style={{ animateDelay: `${index * 200 + 300}ms` }}
                  >
                    <div
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-blue-500
                    transition-all duration-300 group-hover:rotate"
                    >
                      <img
                        src={contact.icon}
                        alt={contact.title}
                        className="w-6 h-6"
                      />
                    </div>

                    <div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-all duration-300">
                        {contact.title}
                      </p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-all duration-300">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={`pt-8 transition-all duration-1000 delay-900
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="text-lg font-medium text-white nb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href=""
                  className="w-12 h-12 bg-slate-900 rounded-lg flex justify-center hover:bg-blue-800 hover:text-white
                  trnasition-all duration-300 group border border-slate-700 hover:border-blue-800 hover:scale-110 hover:rotate-6"
                >
                  <Github className="w-12 h-12" />
                </a>

                <a
                  href=""
                  className="w-12 h-12 bg-slate-900 rounded-lg flex justify-center hover:bg-blue-800 hover:text-white
                  trnasition-all duration-300 group border border-slate-700 hover:border-blue-800 hover:scale-110 hover:rotate-6"
                >
                  <X className="w-12 h-12" />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="bg-slate-900 p-8  rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300
          "
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2 transition-all duration-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white
                    placeholder:gray-400 focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all
                    duration-300 hover:border-blue-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2 transition-all duration-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white
                    placeholder:gray-400 focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all
                    duration-300 hover:border-blue-400"
                      placeholder="Enter your E-mail address"
                      required
                    />
                  </div>
                </div>
                <div className="group mt-5">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 transition-all duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white
                    placeholder:gray-400 focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all
                    duration-300 hover:border-blue-400"
                    placeholder="Project discussion"
                    required
                  />
                </div>
                <div className="group mt-5">
                  <label className="block text-sm font-semibold text-gray-300 mb-2 transition-all duration-300">
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white
                    placeholder:gray-400 focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all
                    duration-300 hover:border-blue-400 resize-none"
                    placeholder="Tell me about your project"
                    required
                  />
                </div>
                <button
                  className="mt-5 w-full bg-blue-800 text-white py-4 rounded-lg hover:bg-blue-400 transition-all duration-300
                  font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-lg hover:scale-105 group"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
