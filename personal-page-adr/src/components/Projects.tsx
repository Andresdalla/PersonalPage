"use client"
import { motion } from "motion/react";
import { fadeInUp, hoverScale, staggerContainer, scaleUp } from "./animations/animations";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product catalog, shopping cart, user authentication, and payment processing.",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "📋",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "🌤️",
    technologies: ["React", "Weather API", "Chart.js", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
    image: "🎨",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, file sharing, and emoji reactions.",
    image: "💬",
    technologies: ["React", "Socket.io", "Node.js", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, SEO optimization, and content management system.",
    image: "📝",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"
          />
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A collection of projects I've worked on, showcasing different technologies and problem-solving approaches
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={scaleUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                project.featured ? "lg:col-span-1 row-span-1" : ""
              }`}
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      variants={hoverScale}
                      whileHover="whileHover"
                      whileTap="whileTap"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      variants={hoverScale}
                      whileHover="whileHover"
                      whileTap="whileTap"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            variants={hoverScale}
            whileHover="whileHover"
            whileTap="whileTap"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            <Eye size={20} />
            <span>View All Projects</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};