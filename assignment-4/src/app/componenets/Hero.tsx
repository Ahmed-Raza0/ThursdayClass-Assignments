'use client';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex items-center flex-col justify-center bg-gradient-to-b from-blue-900 to-purple-600 h-screen">
     
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent text-5xl font-bold shadow-lg"
      >
        I&apos;m Ahmed Raza, a Front-End Developer
      </motion.h1>
      
      
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-3xl font-bold mt-4 text-white shadow-md"
      >
        I build interactive, responsive, and visually appealing <br /> web applications
      </motion.h2>
    </div>
  );
};

export default Hero;
