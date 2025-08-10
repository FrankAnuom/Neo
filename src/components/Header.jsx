import React, { useEffect, useState } from "react";
import {Menu, X} from "lucide-react"

function Header() {
  const [isMenuOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() =>{
    const handleScroll = () =>{
      setIsScrolled(window.screenY >50)

    }
    window.addEventListener("scroll", handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll)

  }, [])

  const scrollToSection = (href)=>{
    const element = document.querySelector(href)
    if(element){
      element.scrollIntoView({behavior: "smooth"})
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#project"},
    {name: "Contact", href: "#contact"}
  ]



  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${isScrolled ? 
        "bg-slate-950 backdrop-blur-lg shadow -lg border-slate-800" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl mt-4 font-bold">
            <span className="bg-white rounded text-blue-800 pt-2 pl-2 pr-2 pb-2">
              B8G
            </span>
          </div>
          {/* desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index)=>{
              return <button className="text-white hover:text-blue-200 hover:rounded transition-all duration-300 font-medium relative group"
              style={{animationDelay: `${index * 0.1}s`}}>
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            })}
          </nav>
          <button className="hidden md:flex items-center gap-2 
           bg-white text-blue-800 mt-4 px-6 py-2.5 rounded-lg 
           hover:bg-bluee-500 transition-all duration-300 font-medium
           shadow shadow-lg hover:shadow-xl hover:scale-105">
            Download CV Now
          </button>
          {/* mobile menu */}
          <button className="text-white md:hidden" onClick={() => setIsOpen(!isMenuOpen)}>
           {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg ">
            {navItems.map((item) =>{
              return <button className="block w-full text-center py-3 px-4 text-white  hover:bg-slate-blue-800 transition-all duration 300">{item.name}</button>
            })}
          <button className="mt-4 w-full flex items-center text-blue-800  justify-center gap-2 bg-white px-6 py-2.5
           rounded-lg hover:bg-blue-800 transition-all duration-300">
          Download CV Now
          </button>

        </nav>

        )}
      </div>
    </header>
  );
}

export default Header;
