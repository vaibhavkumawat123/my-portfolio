import React from "react";
import { GlassCard } from "./GlassCard";
import { MdOutlineWorkOutline } from "react-icons/md";

export function Experience() {
  const experiences = [
    {
      title: "Full-Stack Web Development Trainee",
      institute: "Grras Solution Pvt.Ltd",
      location: "Jaipur, Rajasthan, India",
      period: "August 2024 - March 2025",
      description:
        "As a Fresher, Currently building full-stack web applications using the MERN stack with a focus on clean, scalable code. Continuously learning modern development practices to prepare for enterprise-grade software projects.",
      achievements: [
        "Developed and maintained scalable web applications using React, Node.js, Express, and MongoDB/MySQL.",
        "Designed and implemented RESTful APIs and microservices for seamless data flow between front-end and back-end.",
        "Optimized application performance by implementing caching strategies, database indexing, and code refactoring.",
        "Integrated third-party APIs and authentication systems including OAuth and JWT.",
        "Collaborated with cross-functional teams to define, design, and deploy new features, improving user engagement and experience.",
        "Ensured application security by implementing best practices for authentication, authorization, and data protection.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center text-4xl md:text-5xl font-bold text-white mb-4 gap-5">
            <MdOutlineWorkOutline className="text-[76px]" /> <span>Professional and Work Experience</span>
          </h2>
          <p className="text-xl text-white/70">
            My journey as a MERN stack developer
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>
              <div className="absolute left-2 top-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>

              <GlassCard className="ml-12 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex flex-col gap-0.9">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <h2 className="text-blue-400 text-xl font-bold">
                      {exp.institute}
                    </h2>
                    <h3 className="font-semibold text-[14.5px]">
                      {exp.location}
                    </h3>
                  </div>
                  <span className="text-white/70 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-white/90 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="text-white/70 text-sm flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
