import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { GoProjectRoadmap } from "react-icons/go";
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/NewsAI.png";

export function Projects() {
  const projects = [
    {
      title: "BlogFoster",
      description:
        "BlogFoster is a minimalist social blogging platform built with the MERN stack. It lets users create, edit, and manage posts with ease.Clean UI, author-wise post display, and smooth dynamic routing for every blog.",
      image: poster1,
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "JWT"],
      github: "#",
      live: "#",
    },
    {
      title: "NewsAI",
      description:
        "NewsAI is an AI-powered news platform that delivers real-time, personalized updates based on your interests. It intelligently filters out fake or irrelevant content, ensuring you only see accurate and meaningful news. With a clean interface and smart recommendations, NewsAI keeps you informed, faster and smarter.",
      image: poster2,
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "JWT"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            <GoProjectRoadmap className="text-[50px] sm:text-[60px] md:text-[70px]" />
            <span>Featured Projects</span>
          </h2>

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
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

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
