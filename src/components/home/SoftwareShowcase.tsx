"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function SoftwareShowcase() {
    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1 text-center md:text-left">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-4 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                            Software Ecosystem
                        </div>
                        <h2 className="text-[36px] sm:text-[48px] md:text-[80px] font-black font-outfit text-foreground mb-6 md:mb-8 tracking-[-0.04em] uppercase leading-[1] md:leading-[0.9]">
                            Snap to <span className="text-spark-lime">Code</span>
                        </h2>
                        <p className="text-muted-foreground font-lexend text-sm md:text-xl max-w-xl mx-auto md:mx-0 leading-snug tracking-tight mb-10 md:mb-12">
                            From block-based Scratch to professional Python. Our one-stop platform is tailored for STEAM education, making coding as simple as building with blocks.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-md mx-auto md:mx-0">
                            <div>
                                <h4 className="text-foreground font-black uppercase tracking-tight mb-1 md:mb-2">Multi-Platform</h4>
                                <p className="text-muted-foreground text-xs md:text-sm">Available on iPad, Android, and Web.</p>
                            </div>
                            <div>
                                <h4 className="text-foreground font-black uppercase tracking-tight mb-1 md:mb-2">Cloud Synced</h4>
                                <p className="text-muted-foreground text-xs md:text-sm">Save your classroom projects anywhere.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full mt-8 md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="bg-surface rounded-[30px] md:rounded-[40px] p-6 md:p-8 aspect-video relative overflow-hidden shadow-2xl border border-foreground/5 shadow-spark-lime/5"
                        >

                            <div className="absolute top-0 left-0 w-full h-full p-4 md:p-8 flex gap-3 md:gap-4">
                                <div className="w-1/3 flex flex-col gap-2 md:gap-3">
                                    <div className="h-6 md:h-10 bg-spark-lime rounded-lg md:rounded-xl w-full" />
                                    <div className="h-6 md:h-10 bg-foreground/5 rounded-lg md:rounded-xl w-3/4" />
                                    <div className="h-6 md:h-10 bg-foreground/5 rounded-lg md:rounded-xl w-full" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2 md:gap-4 items-center justify-center border-2 border-dashed border-foreground/5 rounded-2xl md:rounded-3xl">
                                    <div className="w-12 h-12 md:w-20 md:h-20 bg-black rounded-2xl md:rounded-3xl flex items-center justify-center text-white font-black text-xl md:text-2xl">⚡</div>
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-foreground/20">Drop code here</span>
                                </div>
                            </div>
                        </motion.div>


                        <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-black text-white p-4 md:p-6 rounded-[20px] md:rounded-[30px] shadow-2xl z-10 scale-90 md:scale-100">
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest block mb-0.5 md:mb-1">Support</span>
                            <span className="text-spark-lime font-black text-lg md:text-2xl">SCRATCH & PYTHON</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
