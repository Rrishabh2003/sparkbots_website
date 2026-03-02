"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
    "NEW: SPARK MASTERCLASS SERIES IS LIVE",
    "FREE SHIPPING ON ALL KITS ABOVE ₹2,999",
    "BUILD. PLAY. SPARK THE FUTURE.",
    "BILINGUAL GUIDES INCLUDED IN EVERY BOX",
    "JOIN 10,000+ YOUNG INNOVATORS TODAY"
];

export function AnnouncementBar() {
    return (
        <div className="bg-spark-lime overflow-hidden py-3 border-b border-black/10 relative z-[60]">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-12 items-center"
                >
                    {[...items, ...items, ...items].map((item, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-sm font-black font-outfit text-black tracking-tighter">
                                {item}
                            </span>
                            <span className="text-xl text-black">★</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
