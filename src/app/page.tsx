
"use client";

import { Scene } from "@/components/3d/Scene";
import { FloatingShape } from "@/components/3d/FloatingShape";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-axiom-1">
      {/* 3D Background */}
      <Scene className="absolute inset-0 z-0">
        <FloatingShape position={[-2.5, 1.2, 0]} type="box" color="#ffffff" />
        <FloatingShape position={[3, -1.5, -1]} type="icosahedron" color="#d4d4d4" />
        <FloatingShape position={[0, 2, -3]} type="torus" color="#737373" />
        <FloatingShape position={[-1, -2, 1]} type="sphere" color="#404040" />
      </Scene>

      {/* DOM Overlay - Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none text-axiom-9 p-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="text-[12vw] leading-[0.8] font-serif font-bold tracking-tighter uppercase mix-blend-difference">
            Axiom <br className="md:hidden" /> Studio
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-xs md:text-sm max-w-sm font-mono uppercase tracking-[0.2em] text-axiom-5 mix-blend-difference"
        >
          Design as Architecture for Ideas
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 text-[10px] font-mono animate-pulse"
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>
    </div>
  );
}
