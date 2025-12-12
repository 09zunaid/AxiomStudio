
"use client";

import { BrokenGrid } from "@/components/layout/BrokenGrid";
import Link from "next/link";

// Dummy data for portfolio projects
const projects = [
    { id: "lumina", title: "Lumina", category: "Brand Identity", year: "2024" },
    { id: "void", title: "Void", category: "Editorial Design", year: "2023" },
    { id: "apex", title: "Apex", category: "Digital Experience", year: "2024" },
    { id: "mono", title: "Mono", category: "Packaging", year: "2023" },
    { id: "spectra", title: "Spectra", category: "Art Direction", year: "2024" },
    { id: "helix", title: "Helix", category: "Motion", year: "2025" },
    { id: "brut", title: "Brut", category: "Typography", year: "2023" },
    { id: "echo", title: "Echo", category: "Spatial Design", year: "2024" },
];

export default function WorkPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-axiom-1 text-axiom-9 selection:bg-axiom-9 selection:text-axiom-1">
            <div className="px-4 md:px-12 mb-20">
                <h1 className="text-[10vw] font-serif leading-[0.85] tracking-tighter uppercase">
                    Selected <br /> Work
                </h1>
                <div className="flex justify-between items-end mt-8 border-t border-axiom-3 pt-4 font-mono text-xs uppercase tracking-widest text-axiom-5">
                    <span>( 2023 - 2025 )</span>
                    <span>Index [08]</span>
                </div>
            </div>

            <BrokenGrid>
                {projects.map((p, i) => (
                    <Link
                        href={`/work/${p.id}`}
                        key={p.id}
                        className="block group w-full h-full min-h-[40vh] md:min-h-[50vh] bg-axiom-2 relative overflow-hidden border border-axiom-2 hover:border-axiom-9 transition-colors duration-500"
                    >
                        {/* Image Placeholder - In real app, would be <Image> */}
                        <div className="absolute inset-0 bg-axiom-2 group-hover:scale-105 transition-transform duration-700" />

                        {/* Number */}
                        <span className="absolute top-4 right-4 font-mono text-xs opacity-50 mix-blend-difference">
                            0{i + 1}
                        </span>

                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-axiom-1/80 to-transparent">
                            <h2 className="text-3xl md:text-5xl font-serif tracking-tight group-hover:italic transition-all duration-300">
                                {p.title}
                            </h2>
                            <div className="flex justify-between items-center mt-2 border-t border-axiom-5/30 pt-2 opacity-70">
                                <p className="text-xs font-mono uppercase tracking-widest">{p.category}</p>
                                <p className="text-xs font-mono">{p.year}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </BrokenGrid>
        </div>
    );
}
