import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D particle background
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.z -= 2;
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        const scale = 1000 / (1000 + particle.z);
        const x = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = particle.size * scale;

        ctx.fillStyle = `rgba(100, 200, 255, ${1 - particle.z / 1000})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addProject = () => {
    if (newProject.title && newProject.description) {
      const techArray = newProject.tech.split(',').map(t => t.trim()).filter(t => t);
      const gradients = [
        "from-orange-500 to-red-500",
        "from-indigo-500 to-purple-500",
        "from-teal-500 to-cyan-500",
        "from-yellow-500 to-orange-500"
      ];
      
      setProjects([...projects, {
        ...newProject,
        tech: techArray,
        gradient: gradients[Math.floor(Math.random() * gradients.length)]
      }]);
      
      setNewProject({ title: "", description: "", tech: "", category: "Web Development" });
    }
  };

  const skills = [
    { name: "Python", level: 85, icon: "🐍" },
    { name: "JavaScript", level: 80, icon: "⚡" },
    { name: "Golang", level: 75, icon: "🔷" },
    { name: "React", level: 80, icon: "⚛️" },
    { name: "Node.js", level: 75, icon: "🟢" },
    { name: "AI/ML", level: 70, icon: "🤖" },
    { name: "HTML/CSS", level: 90, icon: "🎨" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative z-10">
      {/* 3D Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10" />

      {/* Cursor Glow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(100,200,255,0.15) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease'
        }}
      />

      <Header onNav={setActiveSection} />

      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div  id="skills"><Skills /></div>

      <div id="projects"><Projects /></div>

      <div id="contact"><Contact /></div>

      <Footer />
    </div>
  );
};

export default Portfolio;
