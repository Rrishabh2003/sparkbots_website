"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ghost, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-24 overflow-hidden">
            <div className="max-w-2xl w-full text-center relative">
                {/* Background Spark Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-spark-lime/5 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-surface border border-foreground/5 mb-8 relative">
                        <Ghost className="w-12 h-12 text-spark-lime" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1 -right-1"
                        >
                            <Search className="w-6 h-6 text-foreground/20" />
                        </motion.div>
                    </div>

                    <h1 className="text-[80px] md:text-[120px] font-black font-outfit text-foreground leading-[0.8] tracking-tighter mb-6 uppercase">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-black font-outfit text-foreground uppercase tracking-tight mb-4">
                        Lost in the <span className="text-spark-lime">Spark Cloud?</span>
                    </h2>

                    <p className="text-muted-foreground font-lexend mb-12 text-lg max-w-md mx-auto leading-relaxed">
                        The page you're looking for has drifted away. Let's get you back to the workshop!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button
                                className="bg-foreground text-background hover:bg-spark-lime hover:text-black rounded-full px-10 py-8 font-black uppercase tracking-widest text-sm shadow-2xl transition-all group"
                            >
                                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Button>
                        </Link>

                        <Link href="/shop">
                            <Button
                                variant="outline"
                                className="border-2 border-foreground/5 text-foreground hover:bg-foreground/5 rounded-full px-10 py-8 font-black uppercase tracking-widest text-sm transition-all"
                            >
                                Shop Kits
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
