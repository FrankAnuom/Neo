import React from "react";

function Projects() {
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



    </section>
  );
}

export default Projects;
