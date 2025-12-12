"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Always call hooks at top level
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Trail hooks must be top level too
    const trailConfig = { damping: 35, stiffness: 2000 };
    const trailX = useSpring(cursorX, trailConfig);
    const trailY = useSpring(cursorY, trailConfig);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseDown = () => setIsHovered(true);
        const handleMouseUp = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        document.body.style.cursor = 'none';
        const links = document.querySelectorAll('a, button');
        links.forEach(el => (el as HTMLElement).style.cursor = 'none');

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = 'auto';
        };
    }, [cursorX, cursorY]);

    if (!isMounted) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            <motion.div
                className={`absolute top-0 left-0 w-8 h-8 border border-axiom-9 rounded-full mix-blend-difference ${isHovered ? 'scale-75' : 'scale-100'} transition-transform duration-200`}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            />
            <motion.div
                className="absolute top-0 left-0 w-2 h-2 bg-axiom-9 rounded-full mix-blend-difference"
                style={{
                    x: trailX, // Used the hoisted hook value
                    y: trailY, // Used the hoisted hook value
                    translateX: 12,
                    translateY: 12
                }}
            />
        </div>
    );
};
