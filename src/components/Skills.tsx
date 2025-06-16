import React from 'react';
import { GlassCard } from './GlassCard';
import { Badge } from './ui/badge';
import img from "../assets/white_head_gear_icon_highres.png"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux", "Context API" , "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware", "Server-side Rendering"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "MySQL", "NoSQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="flex justify-center items-center text-4xl md:text-5xl font-bold text-white mb-4 gap-[13px]"><img className='h-[9vh] w-[6rem]' src={img} alt="" />Technical Skills</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="glass" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}