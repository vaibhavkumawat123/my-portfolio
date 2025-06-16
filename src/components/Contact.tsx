import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Button } from "./ui/button";
import { MdContactMail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="flex justify-center gap-5 items-center text-4xl md:text-5xl font-bold text-white mb-4">
            <MdContactMail className="text-[66px]" />
            Get In Touch
          </h2>
          <p className="text-xl text-white/70">
            Let's discuss your next MERN stack project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <GlassCard className="p-8">
            <h3 className="flex items-center justify-center gap-1 text-2xl font-semibold text-white mb-10">
              <IoMdContact className="text-[34px]" />
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/70">vaibhavraj771@gamil.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-white/70">+91 9166452259</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-white/70">Jaipur, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <a
                  className="hover:scale-125"
                  href="https://github.com/vaibhavkumawat123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="glass" size="icon" className="rounded-full">
                    <Github size={20} />
                  </Button>
                </a>
                <a
                  className="hover:scale-125"
                  href="https://www.linkedin.com/in/vaibhav-kumawat-b9388132b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="glass" size="icon" className="rounded-full">
                    <Linkedin size={20} />
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/vaibhh.avv"
                  className="hover:scale-125"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="glass" size="icon" className="rounded-full">
                    <Instagram size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project requirements..."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="glass"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
              >
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
