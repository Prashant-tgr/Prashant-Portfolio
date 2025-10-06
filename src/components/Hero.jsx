import React from 'react'
import { Brain, Sparkles, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full">
        <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 shadow-2xl shadow-cyan-500/20">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="text-cyan-400 animate-pulse" size={32} />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Prashant Kumar
            </h1>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Brain className="text-purple-400" size={28} />
            <h2 className="text-3xl text-gray-300">AI/ML Developer & Full Stack Engineer</h2>
          </div>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl">
            Crafting intelligent solutions at the intersection of artificial intelligence and web technologies.
            Passionate about building impactful applications that leverage machine learning to solve real-world problems.
          </p>
          <div className="flex gap-4 mb-8">
            <a href="mailto:prashant.14219011622@ipu.ac.in" className="backdrop-blur-sm bg-cyan-500/20 hover:bg-cyan-500/30 px-6 py-3 rounded-full border border-cyan-500/50 flex items-center gap-2 transition-all hover:scale-110">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://linkedin.com/in/prashant-kumar-a5786727b" target="_blank" rel="noopener noreferrer" className="backdrop-blur-sm bg-blue-500/20 hover:bg-blue-500/30 px-6 py-3 rounded-full border border-blue-500/50 flex items-center gap-2 transition-all hover:scale-110">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


