"use client"
import { motion } from "motion/react";
import { fadeInUp, skillBarAnimation, staggerContainer, scaleUp } from "./animations/animations";

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: "JavaScript", level: 90, icon: "🟨", color: "bg-yellow-500" },
  { name: "TypeScript", level: 85, icon: "🔷", color: "bg-blue-500" },
  { name: "React", level: 88, icon: "⚛️", color: "bg-cyan-500" },
  { name: "Next.js", level: 82, icon: "▲", color: "bg-black" },
  { name: "Node.js", level: 80, icon: "🟢", color: "bg-green-500" },
  { name: "Python", level: 75, icon: "🐍", color: "bg-blue-600" },
  { name: "CSS/Tailwind", level: 92, icon: "🎨", color: "bg-pink-500" },
  { name: "Git", level: 88, icon: "📝", color: "bg-orange-500" },
];

export const Skills = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
          />
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={scaleUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <span className="text-lg font-bold text-blue-400">{skill.level}%</span>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${skill.color} relative`}
                    custom={skill.level}
                    variants={skillBarAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold text-white mb-8"
          >
            Other Technologies
          </motion.h3>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "MongoDB", "PostgreSQL", "Docker", "AWS", "Firebase", 
              "GraphQL", "Redux", "Sass", "Jest", "Cypress"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};