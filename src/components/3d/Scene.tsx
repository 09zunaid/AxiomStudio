
"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";

interface SceneProps {
    children?: React.ReactNode;
    className?: string;
}

export const Scene: React.FC<SceneProps> = ({ children, className }) => {
    return (
        <div className={className || "fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none"}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Performance optimization for high DPI
            >
                <Suspense fallback={null}>
                    <Environment preset="studio" />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    {children}
                </Suspense>
            </Canvas>
        </div>
    );
};
