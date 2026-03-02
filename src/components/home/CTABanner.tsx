"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTABanner() {
    return (
        <section className="px-6 md:px-12 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden bg-primary rounded-[3rem] px-8 py-20 md:p-24 text-center">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-8 border border-white/20">
                            <Sparkles className="w-3.5 h-3.5" />
                            Join the 10,000+ Club
                        </div>

                        <h2 className="text-4xl md:text-7xl font-bold font-outfit text-white mb-8 leading-tight tracking-tight">
                            Ready to spark <br />the future?
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl font-lexend mb-12 max-w-2xl mx-auto">
                            Gift your child the skills of tomorrow, today. Get started with our Starter Kit or save with Bundles.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-10 py-8 text-xl font-bold shadow-2xl transition-all hover:scale-105">
                                Shop All Kits
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-8 text-xl font-bold transition-all gap-2">
                                For Schools <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
