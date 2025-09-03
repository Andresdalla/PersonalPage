export const heroAnimation = {
  initial: { opacity: 0, y: -600, color: "#ff0000" },
  animate: { opacity: 1, y: [-600, 10, 0], color: "#0000ff" },
  transition: { duration: 2, ease: [0.39, 0.24, 0.3, 1] },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

export const scaleUp = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { 
    opacity: 1, 
    scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
  },
  transition: { duration: 1.2, ease: "easeOut" },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const skillBarAnimation = {
  initial: { width: 0 },
  animate: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
  }),
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05, 
    transition: { duration: 0.2, ease: "easeOut" },
  },
  whileTap: { scale: 0.95 },
};

export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
