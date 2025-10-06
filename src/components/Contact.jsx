import React from 'react'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-400 mb-8">Open to opportunities in AI/ML and Full Stack Development</p>
          <div className="flex flex-col gap-4 items-center">
            <a href="mailto:prashant.14219011622@ipu.ac.in" className="flex items-center gap-3 text-lg hover:text-cyan-400 transition-colors"><Mail /> prashant.14219011622@ipu.ac.in</a>
            <a href="tel:7065423323" className="flex items-center gap-3 text-lg hover:text-cyan-400 transition-colors"><Phone /> +91 7065423323</a>
            <div className="text-gray-400">📍 Delhi, India</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


