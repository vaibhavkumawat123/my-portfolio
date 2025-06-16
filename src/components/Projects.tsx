import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { GoProjectRoadmap } from "react-icons/go";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, post scheduling, and engagement metrics.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Chart.js", "Node.js", "MongoDB", "REST API"],
      github: "#",
      live: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, group chats, and user presence indicators.",
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
      github: "#",
      live: "#"
    },
    {
      title: "Blog Platform",
      description: "Full-featured blogging platform with rich text editor, comment system, user profiles, and content management.",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Node.js", "MongoDB", "Rich Text Editor"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather App",
      description: "Weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Weather API", "Geolocation", "Charts"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="flex justify-center items-center gap-6 text-4xl md:text-5xl font-bold text-white mb-4"><GoProjectRoadmap className='text-[67px]' />Featured Projects</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of my recent MERN stack projects and technical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="glass" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="glass" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button variant="glass" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}