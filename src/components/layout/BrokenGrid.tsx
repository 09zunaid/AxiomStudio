
"use client";

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BrokenGridProps {
    children: React.ReactNode[];
    className?: string;
}

// Logic to determine span and positioning based on index
// This creates a repeating but "broken" seeming pattern
const getGridItemClasses = (index: number) => {
    // Pattern cycle length
    const patternIndex = index % 8;

    switch (patternIndex) {
        case 0:
            return "col-span-12 md:col-span-6 lg:col-span-8 row-span-2"; // Large feature
        case 1:
            return "col-span-12 md:col-span-6 lg:col-span-4 row-span-1 mt-12 md:mt-0"; // Standard, potential offset
        case 2:
            return "col-span-12 md:col-span-6 lg:col-span-4 row-span-1";
        case 3:
            return "col-span-12 md:col-span-6 lg:col-span-5 md:translate-y-12"; // Offset down
        case 4:
            return "col-span-12 md:col-span-6 lg:col-span-7";
        case 5:
            return "col-span-12 md:col-span-4 lg:col-span-3 row-span-2 md:-translate-y-8"; // Tall narrow
        case 6:
            return "col-span-12 md:col-span-8 lg:col-span-9";
        case 7:
            return "col-span-12 md:col-span-6 lg:col-span-4 md:ml-auto"; // Right aligned
        default:
            return "col-span-12 md:col-span-4";
    }
};

export const BrokenGrid: React.FC<BrokenGridProps> = ({
    children,
    className,
}) => {
    return (
        <div
            className={twMerge(
                "grid grid-cols-12 gap-8 md:gap-y-24 md:gap-x-12 px-4 md:px-12 w-full max-w-[1920px] mx-auto",
                className
            )}
        >
            {React.Children.map(children, (child, index) => {
                const itemClasses = getGridItemClasses(index);
                return (
                    <div className={clsx("relative", itemClasses)}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
};
