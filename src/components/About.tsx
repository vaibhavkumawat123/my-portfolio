import React from 'react';
import { Code2, Database, Globe, Server } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { FcAbout } from "react-icons/fc";

export function About() {
  const highlights = [
    { icon: Code2, title: "Frontend Development", desc: "HTML, CSS, JavaScript, React" },
    { icon: Server, title: "Backend Development", desc: "Node.js, Express.js, REST APIs" },
    { icon: Database, title: "Database Management", desc: "MongoDB, MySQL, NoSQL Databases" },
    { icon: Globe, title: "Full-Stack Solutions", desc: "End-to-end web applications" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center gap-6 text-4xl md:text-5xl font-bold text-white mb-4"><FcAbout className='text-[88px] flex items-center' />About Me</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Passionate MERN stack developer with expertise in building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                I'm a dedicated MERN stack developer with a passion for creating innovative web solutions. 
                My journey in web development started with curiosity about how websites work, and it has 
                evolved into a deep expertise in modern JavaScript technologies.
              </p>
              <p>
                I specialize in building full-stack applications using MongoDB, Express.js, React, and Node.js. 
                My approach focuses on writing clean, maintainable code and creating user-centric experiences 
                that solve real-world problems.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and sharing knowledge with the developer community through blogs and mentoring.
              </p>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <item.icon className="mx-auto mb-4 text-blue-400" size={32} />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}