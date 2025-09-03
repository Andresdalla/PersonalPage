"use client"
import { motion } from "motion/react"
import { heroAnimation, fadeInUp, staggerContainer, floatingAnimation } from "./animations/animations"
import { ChevronDown, Download, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col justify-center items-center px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          variants={floatingAnimation}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
        />
        <motion.div 
          variants={floatingAnimation}
          animate="animate" 
          transition={{ delay: 1 }}
          className="absolute top-40 right-32 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"
        />
        <motion.div 
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-32 left-32 w-28 h-28 bg-pink-200/30 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="text-center z-10 max-w-4xl"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-6">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Andrés 
            </span>
          </h1>
          <motion.h2 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 font-medium mb-8"
          >
            Full Stack Developer & Creative Problem Solver
          </motion.h2>
        </motion.div>

        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          I craft beautiful, functional web experiences using modern technologies. 
          Passionate about creating solutions that make a difference.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.button>

          <motion.div
            variants={fadeInUp} 
            className="flex space-x-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}