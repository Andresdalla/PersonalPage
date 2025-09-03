import { motion } from "motion/react"

interface LayoutWrapperProps{
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) =>{
  const myAnimation = {
    initial: { opacity: 0, x: -50 },
    inView: { opacity: 1, x: 0, transition: { delay: 0.5 } },
  };
  return(
    <>
      <motion.div initial='initial' whileInView='inView' viewport={{ once: true }}
        variants={myAnimation}>
        {children}
      </motion.div>
    </>
  );
}