"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, FileDown, BookOpen, Youtube, ArrowRight } from "lucide-react";
import Image from "next/image";

const resources = [
    { title: "Building your first Rover", type: "Video", duration: "12 mins", color: "bg-red-50", text: "text-red-500", icon: Youtube },
    { title: "Intro to Logic Sensors", type: "Blog", duration: "5 min read", color: "bg-blue-50", text: "text-blue-500", icon: BookOpen },
    { title: "NEP 2020 & Robotics", type: "PDF", duration: "6 pages", color: "bg-green-50", text: "text-green-500", icon: FileDown },
    { title: "AI Vision Module Guide", type: "Video", duration: "25 mins", color: "bg-purple-50", text: "text-purple-500", icon: Youtube }
];

export default function LearnPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Resources
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-8 tracking-[-0.04em] leading-[0.9]">
                        Think. Build. <span className="text-spark-lime">Learn.</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl leading-snug tracking-tight">
                        Free resources for students, teachers, and curious parents. Start your journey into electronics and coding with our expert guides.
                    </p>
                </div>

                {/* Featured Video */}
                <div className="relative aspect-video rounded-[40px] overflow-hidden bg-surface shadow-2xl mb-24 border border-foreground/5 group cursor-pointer">
                    <Image
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                        alt="Getting started with robotics"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 fill-spark-lime text-spark-lime ml-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-12 text-white">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime mb-4 px-4 py-1 bg-black/60 backdrop-blur-md rounded-full inline-block">Featured Tutorial</div>
                        <h3 className="text-3xl font-black font-outfit uppercase tracking-tight">The First 30 Minutes: From Box to Bot</h3>
                        <p className="text-white/60 font-lexend tracking-tight">Master the basics of Spark Starter Kit in under 30 minutes.</p>
                    </div>
                </div>

                {/* Resource Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {resources.map((res, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-surface rounded-[40px] border border-foreground/5 hover:bg-background hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${res.color} flex items-center justify-center ${res.text} mb-6 transition-transform group-hover:rotate-6 shadow-inner`}>
                                <res.icon className="w-7 h-7" />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 mb-4">{res.type}</div>
                            <h3 className="text-xl font-black font-outfit text-foreground uppercase tracking-tight mb-2 group-hover:text-spark-lime transition-colors">{res.title}</h3>
                            <div className="flex items-center justify-between mt-8">
                                <span className="text-[10px] text-foreground/30 font-black uppercase tracking-[0.2em]">{res.duration}</span>
                                <ArrowRight className="w-4 h-4 text-spark-lime opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 p-12 bg-black rounded-[40px] text-center text-white">
                    <h2 className="text-[32px] md:text-[48px] font-black font-outfit uppercase tracking-[-0.04em] leading-[0.9] mb-6">Want Personalized <span className="text-spark-lime">Training</span>?</h2>
                    <p className="text-white/40 mb-10 max-w-2xl mx-auto font-lexend leading-snug tracking-tight">Join our weekly live masterclasses. Learn from engineers who build SparkBots.</p>
                    <Button size="lg" className="bg-spark-lime text-black hover:bg-background rounded-full px-12 py-8 text-sm font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105">
                        Join Masterclass
                    </Button>
                </div>
            </div>
        </div>
    );
}
