
"use client";

import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls } from "@react-three/drei";

export default function ContactPage() {
    return (
        <div className="h-screen w-full relative bg-axiom-1 text-axiom-9 overflow-hidden flex flex-col items-center justify-center">
            {/* 3D Wireframe Room Environment */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
                    <gridHelper args={[20, 20, 0x404040, 0x202020]} />
                    <Grid position={[0, -0.1, 0]} args={[20, 20]} cellColor="#404040" sectionColor="#808080" infiniteGrid />
                    <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
                </Canvas>
            </div>

            {/* Form Overlay */}
            <div className="relative z-10 w-full max-w-xl p-8 bg-axiom-1/50 backdrop-blur-sm border border-axiom-3">
                <h1 className="text-6xl font-serif mb-8 text-center">Initiate Protocol</h1>
                <form className="space-y-8 font-mono text-sm uppercase">
                    <div className="group relative">
                        <input type="text" placeholder="Identity / Name" className="w-full bg-transparent border-b border-axiom-5 py-4 focus:outline-none focus:border-axiom-9 transition-colors placeholder:text-axiom-5/50" />
                    </div>
                    <div className="group relative">
                        <input type="email" placeholder="Coordinates / Email" className="w-full bg-transparent border-b border-axiom-5 py-4 focus:outline-none focus:border-axiom-9 transition-colors placeholder:text-axiom-5/50" />
                    </div>
                    <div className="group relative">
                        <textarea placeholder="Transmission / Message" rows={4} className="w-full bg-transparent border-b border-axiom-5 py-4 focus:outline-none focus:border-axiom-9 transition-colors placeholder:text-axiom-5/50 resize-none" />
                    </div>
                    <button type="button" className="w-full py-4 border border-axiom-9 hover:bg-axiom-9 hover:text-axiom-1 transition-colors duration-300 font-bold tracking-widest">
                        Transmit
                    </button>
                </form>
            </div>
        </div>
    );
}
