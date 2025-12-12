
"use client";

import { Scene } from "@/components/3d/Scene";
import { FloatingShape } from "@/components/3d/FloatingShape";

export default function StudioPage() {
    return (
        <div className="bg-axiom-1 min-h-screen text-axiom-9 selection:bg-axiom-9 selection:text-axiom-1 pb-32">
            {/* 3D Background - Subtle */}
            <Scene className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <FloatingShape position={[3, 2, -2]} type="box" color="#d4d4d4" />
                <FloatingShape position={[-3, -2, 0]} type="torus" color="#737373" />
            </Scene>

            <div className="relative z-10 px-4 md:px-12 pt-32 max-w-7xl mx-auto">
                <h1 className="text-[10vw] font-serif leading-[0.8] tracking-tighter uppercase border-b border-axiom-3 pb-8 mb-20">
                    The <br /> Studio
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-24">
                    <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-axiom-5 sticky top-32 h-fit">
                        <p>01 - Philosophy</p>
                        <p className="mt-2">Values</p>
                        <p className="mt-2 text-axiom-9">Manifesto</p>
                    </div>

                    <div className="md:col-span-8 md:text-3xl lg:text-5xl font-serif leading-snug space-y-24">
                        <p>
                            We believe design is not decoration but the architecture of ideas. In a world saturated with visual noise, we seek clarity through reduction.
                        </p>
                        <p>
                            "Form follows function" is not a limitation but a liberation. It forces us to strip away the unessential until only the truth remains.
                        </p>
                        <p>
                            Our process is algorithmic yet human. We embrace the broken grid, the erratic line, the glitch in the system—because perfection is static, but imperfection is alive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
