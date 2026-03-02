"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Rocket, Wrench, Cpu, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const updates = [
    {
        date: "Feb 28, 2026",
        category: "Product Launch",
        icon: Rocket,
        title: "AI Vision Creator Kit — Now Available",
        description: "Our most advanced kit yet is here. Featuring a programmable AI vision module, Python coding support, and 15+ projects. Perfect for young engineers aged 10+.",
        link: "/shop/ai-vision-kit",
        featured: true
    },
    {
        date: "Feb 15, 2026",
        category: "Software Update",
        icon: Cpu,
        title: "SparkCode Platform v3.0 Released",
        description: "Major update to our coding platform: new block categories, real-time robot simulation preview, cloud save support, and improved Android tablet performance.",
        link: "/learn",
        featured: false
    },
    {
        date: "Feb 1, 2026",
        category: "Curriculum",
        icon: BookOpen,
        title: "NEP 2020 Aligned Lesson Plans — Free Download",
        description: "We've released 24 new lesson plans aligned with NEP 2020 STEM guidelines. Free for all educators. Covers classes 1-8 with detailed activity sheets.",
        link: "/learn",
        featured: false
    },
    {
        date: "Jan 20, 2026",
        category: "Hardware Update",
        icon: Wrench,
        title: "Explorer Kit v2 — Improved Sensors",
        description: "The Rover Explorer Kit now ships with upgraded IR sensors featuring 2x detection range, a new quick-connect system, and improved battery life of up to 6 hours.",
        link: "/shop/explorer-kit",
        featured: false
    },
    {
        date: "Jan 10, 2026",
        category: "Community",
        icon: Rocket,
        title: "SparkBots Robotics Championship 2026 Announced",
        description: "Registrations are now open for the first-ever SparkBots Robotics Championship. Open to all SparkBots kit owners aged 6-14. Exciting prizes and scholarships await!",
        link: "/showcase",
        featured: false
    },
    {
        date: "Dec 20, 2025",
        category: "Partnership",
        icon: BookOpen,
        title: "Partnership with 500+ Schools Across India",
        description: "SparkBots is now the official STEM robotics partner for over 500 schools across 12 states. Our kits are being used in classroom instruction and ATL labs.",
        link: "/schools",
        featured: false
    },
    {
        date: "Dec 5, 2025",
        category: "Product Launch",
        icon: Rocket,
        title: "Monthly Spark Box — Subscription Kits Launched",
        description: "A new robotic challenge delivered every month. Each box includes exclusive components, a digital masterclass, and free shipping. Cancel anytime.",
        link: "/shop/monthly-spark-box",
        featured: false
    },
    {
        date: "Nov 15, 2025",
        category: "Certification",
        icon: Wrench,
        title: "BIS Certification Achieved for All Products",
        description: "All SparkBots kits are now BIS (Bureau of Indian Standards) certified for safety. Every component meets rigorous quality and safety standards for children's products.",
        link: "/about",
        featured: false
    }
];

export default function UpdatesPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        What&apos;s New
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        Spark <span className="text-spark-lime">Updates</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl leading-snug tracking-tight max-w-2xl mx-auto">
                        The latest product launches, software updates, and community news from SparkBots.
                    </p>
                </div>

                {/* Featured Update */}
                {updates.filter(u => u.featured).map((update, i) => (
                    <Link key={i} href={update.link}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-black rounded-[40px] p-12 text-white mb-16 group hover:scale-[1.01] transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime bg-white/10 px-4 py-1 rounded-full">
                                    {update.category}
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                                    {update.date}
                                </span>
                            </div>
                            <h2 className="text-[32px] md:text-[48px] font-black font-outfit uppercase tracking-[-0.04em] leading-[0.9] mb-4 group-hover:text-spark-lime transition-colors">
                                {update.title}
                            </h2>
                            <p className="text-white/40 font-lexend leading-relaxed tracking-tight max-w-2xl mb-6">
                                {update.description}
                            </p>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                                Read More <ArrowRight className="w-3 h-3" />
                            </span>
                        </motion.div>
                    </Link>
                ))}

                {/* Timeline */}
                <div className="space-y-6">
                    {updates.filter(u => !u.featured).map((update, i) => (
                        <Link key={i} href={update.link}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="p-8 bg-surface rounded-[40px] border border-foreground/5 hover:shadow-2xl transition-all group cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-spark-lime shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <update.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">{update.date}</span>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime bg-black px-3 py-0.5 rounded-full">{update.category}</span>
                                        </div>
                                        <h3 className="text-lg font-black font-outfit text-foreground uppercase tracking-tight mb-1 group-hover:text-spark-lime transition-colors">
                                            {update.title}
                                        </h3>
                                        <p className="text-muted-foreground font-lexend text-sm leading-snug tracking-tight">
                                            {update.description}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-spark-lime opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
