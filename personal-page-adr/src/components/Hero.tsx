"use client"
import { motion } from "motion/react"
import { heroAnimation } from "./animations/animations"
export const Hero = () => {
  return (
    <>
      <motion.div
        initial={heroAnimation.initial}
        animate={heroAnimation.animate}
        transition={heroAnimation.transition as any}>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-center font-bold">Welcome to My Personal Page.</h1>
          <h2 className="text-lg text-center font-bold">In the crafting of this page no AI was used.</h2>
        </div>
      </motion.div>
    </>
  );
}