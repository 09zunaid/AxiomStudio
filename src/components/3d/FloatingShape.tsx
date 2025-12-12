
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
    position?: [number, number, number];
    color?: string;
    type?: "box" | "sphere" | "torus" | "icosahedron";
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({
    position = [0, 0, 0],
    color = "#404040",
    type = "box"
}) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    const getGeometry = () => {
        switch (type) {
            case "sphere": return <sphereGeometry args={[0.5, 32, 32]} />;
            case "torus": return <torusGeometry args={[0.4, 0.2, 16, 100]} />;
            case "icosahedron": return <icosahedronGeometry args={[0.6, 0]} />;
            case "box": default: return <boxGeometry args={[1, 1, 1]} />;
        }
    };

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                {getGeometry()}
                <meshStandardMaterial
                    color={color}
                    wireframe={true} // Avant-garde aesthetic
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    );
};

// Fix for default export if needed, but naming it Float wrapper component is cleaner
function Floatwrapper({ children, ...props }: any) {
    return <Float {...props}>{children}</Float>;
}

// Adjusting export logic to avoid TS issues with Float props if any.
// Just using standard Float from drei.
