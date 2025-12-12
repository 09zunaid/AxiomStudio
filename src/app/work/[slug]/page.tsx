
"use client";

import { ModelViewer } from "@/components/3d/ModelViewer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

    return (
        <div ref={containerRef} className="bg-axiom-1 text-axiom-9 min-h-screen">
            {/* Editorial Cover */}
            <div className="relative w-full h-screen overflow-hidden flex flex-col justify-end p-8 md:p-12 pb-32">
                <div className="absolute inset-0 bg-axiom-3 z-0">
                    {/* Hero Image Component would go here */}
                    <div className="w-full h-full bg-neutral-900 opacity-50" />
                </div>

                <div className="relative z-10 max-w-6xl">
                    <h1 className="text-[12vw] leading-[0.8] font-serif uppercase tracking-tighter mix-blend-difference mb-8">
                        {params.slug}
                    </h1>
                    <div className="flex flex-col md:flex-row gap-12 border-t border-axiom-9 pt-8 mix-blend-difference">
                        <div className="w-full md:w-1/3">
                            <h3 className="font-mono text-xs uppercase tracking-widest mb-2 opacity-70">Client</h3>
                            <p className="text-xl font-serif">Global Brands Inc.</p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h3 className="font-mono text-xs uppercase tracking-widest mb-2 opacity-70">Services</h3>
                            <p className="text-xl font-serif">Identity, Strategy, Spatial</p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h3 className="font-mono text-xs uppercase tracking-widest mb-2 opacity-70">Year</h3>
                            <p className="text-xl font-serif">2025</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Brief - Editorial Pull Quote */}
            <section className="py-32 px-4 md:px-12 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif leading-tight text-center">
                    "The challenge was to translate a digital-first concept into a tangible, spatial experience without losing the core algorithmic identity."
                </h2>
            </section>

            {/* Process / Editorial Layout */}
            <section className="py-20 px-4 md:px-12 grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-8 md:col-start-3">
                    <div className="aspect-[4/3] bg-axiom-2 mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-axiom-5 font-mono text-xs">
                            [ Process Image 01 ]
                        </div>
                    </div>
                    <p className="font-mono text-xs max-w-xs ml-auto mt-4 text-axiom-5">
                        Fig 01. Initial sketches demonstrating the topographic evolution of the logo mark.
                    </p>
                </div>
            </section>

            {/* Interactive 3D Artifact */}
            <section className="py-32 px-4 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-5xl font-serif mb-8">The Artifact</h3>
                        <p className="text-lg text-axiom-5 max-w-md leading-relaxed font-sans">
                            We designed a limited edition physical object to commemorate the launch. Utilizing milled aluminum and rapid prototyping, the form follows the generative data currents.
                        </p>
                    </div>
                    <ModelViewer />
                </div>
            </section>

            {/* Next Project Nav */}
            <section className="py-32 border-t border-axiom-3 text-center">
                <Link href="/work" className="text-9xl font-serif hover:italic transition-all">
                    Next Project
                </Link>
            </section>
        </div>
    );
}
