import React from 'react'
import { Cpu } from 'lucide-react'

const skills = [
  { name: 'Python', level: 85, icon: '🐍' },
  { name: 'JavaScript', level: 80, icon: '⚡' },
  { name: 'Golang', level: 75, icon: '🔷' },
  { name: 'React', level: 80, icon: '⚛️' },
  { name: 'Node.js', level: 75, icon: '🟢' },
  { name: 'AI/ML', level: 70, icon: '🤖' },
  { name: 'HTML/CSS', level: 90, icon: '🎨' }
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 flex items-center gap-4">
          <Cpu className="text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technical Arsenal</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="text-xl font-semibold">{skill.name}</span>
                </div>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 group-hover:scale-x-105" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


