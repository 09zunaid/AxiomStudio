
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, PresentationControls } from "@react-three/drei";

export const ModelViewer = () => {
    return (
        <div className="w-full h-[50vh] md:h-[70vh] bg-axiom-2/50 border border-axiom-3 relative cursor-grab active:cursor-grabbing">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 45 }}>
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                    <mesh rotation={[0.5, 0.5, 0]}>
                        <boxGeometry args={[1, 1.5, 0.2]} /> {/* Book/Artifact shape */}
                        <meshStandardMaterial color="#2a2a2a" roughness={0.5} />
                    </mesh>
                </PresentationControls>
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
            </Canvas>
            <div className="absolute bottom-4 right-4 font-mono text-xs uppercase tracking-widest text-axiom-5 pointer-events-none">
                [ Drag to Rotate ]
            </div>
        </div>
    );
};
