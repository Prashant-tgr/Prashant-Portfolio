import React, { useState } from 'react'
import { Code, Sparkles } from 'lucide-react'

const initialProjects = [
  {
    title: 'To-Do List App',
    description: 'A fundamental development project exploring core web technologies and state management',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Unit Converter',
    description: 'Practical application of conversion algorithms built during IBM frontend course',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'FinChat - Chatting Platform',
    description: 'Real-time chat platform with StockBot using Golang for backend processing',
    tech: ['Golang', 'React', 'Node.js'],
    category: 'Full Stack',
    gradient: 'from-green-500 to-emerald-500'
  }
]

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects)
  const [newProject, setNewProject] = useState({ title: '', description: '', tech: '', category: 'Web Development' })

  const addProject = () => {
    if (!newProject.title || !newProject.description) return
    const techArray = newProject.tech.split(',').map(t => t.trim()).filter(Boolean)
    const gradients = [
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-teal-500 to-cyan-500',
      'from-yellow-500 to-orange-500'
    ]
    setProjects(prev => ([
      ...prev,
      { ...newProject, tech: techArray, gradient: gradients[Math.floor(Math.random() * gradients.length)] }
    ]))
    setNewProject({ title: '', description: '', tech: '', category: 'Web Development' })
  }

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 flex items-center gap-4">
          <Code className="text-purple-400" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Featured Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-2 group cursor-pointer">
              <div className={`w-full h-40 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-all`}>
                <Code size={48} className="text-white opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30">{tech}</span>
                ))}
              </div>
              <div className="text-sm text-purple-400">{project.category}</div>
            </div>
          ))}
        </div>

        <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Sparkles className="text-purple-400" />
            Add New Project
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Project Title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-all" />
            <select value={newProject.category} onChange={(e) => setNewProject({ ...newProject, category: e.target.value })} className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-all">
              <option value="Web Development">Web Development</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Backend">Backend</option>
            </select>
          </div>
          <textarea placeholder="Project Description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-purple-500 transition-all h-24" />
          <input type="text" placeholder="Technologies (comma separated)" value={newProject.tech} onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })} className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-purple-500 transition-all" />
          <button onClick={addProject} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">Add Project</button>
        </div>
      </div>
    </section>
  )
}

export default Projects


