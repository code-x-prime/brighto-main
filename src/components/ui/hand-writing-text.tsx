"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

export function HandWrittenTitle({
    title = "Let's Connect!",
    subtitle,
    className = "",
}: HandWrittenTitleProps) {
    const draw: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
                opacity: { duration: 0.5 },
            },
        },
    };

    return (
        <div className={`relative w-full h-full flex items-center justify-center py-12 px-4 ${className}`}>
            {/* Background SVG Loop/Circle that frames the handwriting text */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 800 400"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full h-full max-w-[650px] max-h-[350px] opacity-75"
                >
                    <title>Handwritten Circle Loop</title>
                    <motion.path
                        d="M 650 80 
                           C 800 200, 700 320, 400 340
                           C 150 340, 50 300, 50 200
                           C 50 80, 200 60, 400 60
                           C 600 60, 680 140, 650 160"
                        fill="none"
                        strokeWidth="8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-[#F97316]"
                    />
                </motion.svg>
            </div>

            {/* Handwriting Text content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <motion.div
                    className="rotate-[-6deg] select-none cursor-default"
                    initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                        delay: 0.2 
                    }}
                >
                    <h1 
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F97316] font-normal tracking-wide drop-shadow-md select-none"
                        style={{ 
                            fontFamily: "'Caveat', cursive",
                            textShadow: "0px 4px 20px rgba(249, 115, 22, 0.2)"
                        }}
                    >
                        {title}
                    </h1>
                </motion.div>
                
                {subtitle && (
                    <motion.p
                        className="text-lg md:text-xl text-white/80 mt-6 font-medium max-w-md bg-white/5 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-full"
                        style={{ fontFamily: "'Caveat', cursive" }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

// Subcomponent to wrap any element and draw a hand-drawn circle/loop outline around it when in view
interface HandDrawnHighlightProps {
    children: React.ReactNode;
    className?: string;
}

export function HandDrawnHighlight({ children, className = "" }: HandDrawnHighlightProps) {
    const drawCircle: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 1.8, ease: "easeInOut", delay: 0.3 },
                opacity: { duration: 0.3, delay: 0.3 },
            },
        },
    };

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`relative p-1 ${className}`}
        >
            {/* Draw oval outline path around the card */}
            <div className="absolute inset-0 pointer-events-none z-20">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible"
                >
                    <motion.path
                        d="M 5 50 
                           C 5 15, 30 5, 50 5 
                           C 75 5, 95 20, 95 50 
                           C 95 80, 75 95, 50 95 
                           C 25 95, 5 80, 5 50"
                        fill="none"
                        strokeWidth="1.8"
                        stroke="#F97316"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={drawCircle}
                    />
                </svg>
            </div>
            {children}
        </motion.div>
    );
}
