"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Priya Sharma",
        role: "Parent of 8-year-old",
        text: "Finally, a robotics kit that doesn't end up gathering dust. My son built the rover in 40 minutes and was so proud!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Dr. Arvind Gupta",
        role: "ATL Coordinator",
        text: "The quality of components and the clarity of the Hindi guides make SparkBots the best choice for our school labs.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
        name: "Sarah Jenkins",
        role: "Tech Journalist",
        text: "The Apple of kids robotics. Premium design meets meaningful education. A must-have for the modern classroom.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    }
];

export function Testimonials() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit text-foreground mb-4">
                        Loved by parents, <br />
                        <span className="text-primary tracking-tight">trusted by schools.</span>
                    </h2>
                    <div className="flex items-center justify-center gap-1 text-secondary">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        <span className="ml-2 text-muted-foreground font-bold">4.9/5 Rating</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-surface rounded-[2rem] border border-foreground/5 flex flex-col relative"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
                            <p className="text-muted-foreground font-lexend leading-relaxed mb-8 italic relative z-10">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <Image src={review.avatar} alt={review.name} width={48} height={48} className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground leading-tight">{review.name}</h4>
                                    <span className="text-xs text-muted-foreground font-medium">{review.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
