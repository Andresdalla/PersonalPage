"use client"
import { motion } from "motion/react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "./animations/animations";

export const About = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
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
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Full Stack Developer & Designer
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate developer with expertise in modern web technologies. 
              I love creating beautiful, functional applications that provide excellent 
              user experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a strong background in both frontend and backend development, 
              I enjoy working with React, Next.js, TypeScript, and various modern 
              frameworks to build scalable solutions.
            </p>
            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python"].map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeInUp}
                  className="px-4 py-2 bg-white rounded-full text-blue-600 font-medium shadow-md border border-blue-100"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">25+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-10 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-full opacity-5 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};