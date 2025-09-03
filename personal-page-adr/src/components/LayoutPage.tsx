"use client"
import { NavigationMenuDemo } from "./NavBar"
import { motion } from "motion/react"
interface LayoutPageProps{
  children:React.ReactNode
}
export const LayoutPage = ({ children }: LayoutPageProps) => {
  const myAnimation = {
    initial: { opacity: 0, x: -50 },
    inView: { opacity: 1, x: 0, transition: { delay: 0.5 } },
  };
  return (
    <div className="flex flex-col items-center">
      <motion.div initial='initial' whileInView='inView' viewport={{ once: true }}
        variants={myAnimation}>
        <NavigationMenuDemo />
      </motion.div>
      {children}
    </div>
  );
}