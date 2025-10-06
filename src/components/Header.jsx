import React from 'react'

const Header = ({ onNav }) => {
   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onNav(sectionId);
  };

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          PK.dev
        </div>
        <div className="flex gap-6">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <button
              key={item}
              onClick={() => scrollTosection(item.toLowerCase())}
              className="hover:text-cyan-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header


