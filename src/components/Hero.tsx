import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./GlassCard";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 mt-[76px]">
        <GlassCard className="p-8 md:p-12">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-4xl font-bold text-white">
                VK
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Vaibhav Kumawat
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-white/80 mb-6">
            MERN Stack Developer
          </p>

          {/* Bio */}
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer specializing in MongoDB, Express.js,
            React, and Node.js. I create scalable web applications with modern
            technologies and clean, efficient code.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => scrollToSection("projects")}
              variant="glass"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="glass"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              {
                href: "https://github.com/vaibhavkumawat123",
                icon: <Github size={20} />,
              },
              {
                href: "https://www.linkedin.com/in/vaibhav-kumawat-b9388132b",
                icon: <Linkedin size={20} />,
              },
              {
                href: "https://www.instagram.com/vaibhh.avv",
                icon: <Instagram size={20} />,
              },
              {
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavraj771@gmail.com",
                icon: <Mail size={20} />,
              },
            ].map(({ href, icon }, index) => (
              <a
                key={index}
                className="hover:scale-125 transition-transform"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glass" size="icon" className="rounded-full">
                  {icon}
                </Button>
              </a>
            ))}
          </div>

          {/* Down Arrow */}
          <Button
            onClick={() => scrollToSection("about")}
            variant="ghost"
            className="text-white/70 hover:text-white animate-bounce"
          >
            <ArrowDown size={24} />
          </Button>
        </GlassCard>
      </div>
    </section>
  );
}
