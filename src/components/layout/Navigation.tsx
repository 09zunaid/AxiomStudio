
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navItems = [
    { label: "Index", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
];

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 p-8 md:p-12 mix-blend-difference text-axiom-9">
            <div className="flex justify-between items-start pointer-events-auto">
                <Link href="/" className="uppercase font-serif text-xl tracking-tighter hover:italic transition-all">
                    Axiom Studio
                </Link>
                <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono mb-4 text-axiom-5">[ Table of Contents ]</span>
                    {navItems.map((item, i) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "text-4xl md:text-6xl font-serif tracking-tighter hover:italic transition-all duration-300 hover:tracking-wide",
                                pathname === item.href ? "italic" : ""
                            )}
                        >
                            <span className="text-xs font-sans mr-4 align-top opacity-50">0{i + 1}</span>
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer / Corner elements */}
            <div className="absolute bottom-8 left-8 pointer-events-auto hidden md:block">
                <span className="text-xs font-mono">
                    EST. 2025 <br />
                    AVANT-GARDE DESIGN SYSTEM
                </span>
            </div>
        </nav>
    );
};
