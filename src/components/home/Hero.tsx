"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background">

            <div className="absolute inset-0 z-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.06]" />

            <div className="relative z-10 w-full max-w-7xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground text-background text-[10px] font-black tracking-[0.2em] uppercase mb-8 md:mb-12">
                        <Sparkles className="w-3 h-3 text-spark-lime" />
                        <span>Built for the next generation</span>
                    </div>

                    <h1 className="text-[36px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-black font-outfit text-foreground uppercase leading-[1.1] sm:leading-[0.95] md:leading-[0.9] tracking-[-0.04em] mb-6 md:mb-8">
                        Build. Play. <span className="text-spark-lime">Spark</span><br />
                        the <span className="inline-block relative">
                            Future
                            <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2 bg-spark-lime rounded-full" />
                        </span>
                    </h1>

                    <p className="text-sm sm:text-lg md:text-xl text-muted-foreground font-lexend mb-10 md:mb-16 max-w-2xl mx-auto leading-tight tracking-tight px-0">
                        SparkBots lighting up potential for Class 1-10 students through hands-on robotics. Expand possibilities and turn ideas into captivating real-life projects.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-0">
                        <Button className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 md:px-12 py-5 md:py-8 text-xs md:text-sm font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105 group">
                            Start Building
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 md:px-10 py-5 md:py-8 text-xs md:text-sm font-black border-2 border-foreground/5 hover:bg-foreground/5 transition-all gap-3 uppercase tracking-widest">
                            <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center text-background">
                                <Play className="w-3 h-3 fill-current ml-0.5" />
                            </div>
                            Watch Reel
                        </Button>
                    </div>
                </motion.div>
            </div>


            <div className="absolute bottom-10 left-10 w-16 h-16 md:w-32 md:h-32 opacity-10 pointer-events-none hidden sm:block">
                <NextImage src="/img/1.svg" alt="" fill className="object-contain" />
            </div>
            <div className="absolute top-40 right-10 w-24 h-24 md:w-48 md:h-48 opacity-5 pointer-events-none rotate-12 hidden sm:block">
                <NextImage src="/img/2.svg" alt="" fill className="object-contain" />
            </div>
        </section>
    );
}
