"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Target, Lightbulb } from "lucide-react";

const values = [
    { icon: Target, title: "Our Mission", desc: "To make robotics accessible to every child, regardless of their technical background." },
    { icon: Heart, title: "Our Passion", desc: "We love seeing the spark in a child's eyes when their first creation comes to life." },
    { icon: Lightbulb, title: "Our Vision", desc: "Building a future where every child is a creator, not just a consumer of technology." }
];

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Our Story
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-8 tracking-[-0.04em] leading-[0.9]">
                        Sparking <span className="text-spark-lime">Millions</span> of <br />Young Minds
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl leading-snug tracking-tight">
                        Founded in 2026, SparkBots was born out of a simple observation: robotics kits were either too complex or too boring. We set out to change that by building the "Apple of kids robotics"—premium, beautiful, and rewardingly simple.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-surface rounded-[40px] border border-foreground/5 hover:shadow-2xl transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-spark-lime mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                <v.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black font-outfit text-foreground uppercase tracking-tight mb-4">{v.title}</h3>
                            <p className="text-muted-foreground font-lexend leading-snug tracking-tight">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10" />
                    <img
                        src="/img/12.svg"
                        alt="SparkBots Workshop"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="bg-background/90 backdrop-blur-xl p-12 rounded-[40px] border border-foreground/5 shadow-2xl max-w-2xl text-center mx-6">
                            <Sparkles className="w-12 h-12 text-spark-lime mx-auto mb-6" />
                            <h2 className="text-[32px] md:text-[48px] font-black font-outfit text-foreground uppercase tracking-[-0.04em] leading-[0.9] mb-4">India + Global</h2>
                            <p className="text-muted-foreground font-lexend leading-snug tracking-tight">
                                From our design studio in Bangalore to homes in over 15 countries, we are on a mission to spark the next generation of global innovators.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
