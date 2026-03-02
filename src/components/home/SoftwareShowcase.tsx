"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function SoftwareShowcase() {
    return (
        <section className="py-32 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-1">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-4 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                            Software Ecosystem
                        </div>
                        <h2 className="text-[48px] md:text-[80px] font-black font-outfit text-foreground mb-8 tracking-[-0.04em] uppercase leading-[0.9]">
                            Snap to <span className="text-spark-lime">Code</span>
                        </h2>
                        <p className="text-muted-foreground font-lexend text-xl max-w-xl leading-snug tracking-tight mb-12">
                            From block-based Scratch to professional Python. Our one-stop platform is tailored for STEAM education, making coding as simple as building with blocks.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-foreground font-black uppercase tracking-tight mb-2">Multi-Platform</h4>
                                <p className="text-muted-foreground text-sm">Available on iPad, Android, and Web.</p>
                            </div>
                            <div>
                                <h4 className="text-foreground font-black uppercase tracking-tight mb-2">Cloud Synced</h4>
                                <p className="text-muted-foreground text-sm">Save your classroom projects anywhere.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="bg-surface rounded-[40px] p-8 aspect-video relative overflow-hidden shadow-2xl border border-foreground/5 shadow-spark-lime/5"
                        >

                            <div className="absolute top-0 left-0 w-full h-full p-8 flex gap-4">
                                <div className="w-1/3 flex flex-col gap-3">
                                    <div className="h-10 bg-spark-lime rounded-xl w-full" />
                                    <div className="h-10 bg-foreground/5 rounded-xl w-3/4" />
                                    <div className="h-10 bg-foreground/5 rounded-xl w-full" />
                                </div>
                                <div className="flex-1 flex flex-col gap-4 items-center justify-center border-2 border-dashed border-foreground/5 rounded-3xl">
                                    <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-white font-black text-2xl">⚡</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20">Drop code here</span>
                                </div>
                            </div>
                        </motion.div>


                        <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-[30px] shadow-2xl z-10">
                            <span className="text-[10px] font-black uppercase tracking-widest block mb-1">Support</span>
                            <span className="text-spark-lime font-black text-2xl">SCRATCH & PYTHON</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
