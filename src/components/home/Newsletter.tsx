"use client";

import React from "react";
import { motion } from "framer-motion";

export function Newsletter() {
    return (
        <section className="py-32 bg-surface border-t border-foreground/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[48px] md:text-[80px] font-black font-outfit text-foreground mb-8 tracking-[-0.04em] uppercase leading-[0.9]">
                    Join the <span className="text-spark-lime">Spark</span> Club
                </h2>
                <p className="text-muted-foreground font-lexend text-xl max-w-xl mx-auto leading-snug tracking-tight mb-12">
                    Get early access to new kits, free curriculum updates, and 10% off your first order.
                </p>

                <form className="max-w-md mx-auto flex gap-4">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 bg-background border border-foreground/10 rounded-full px-8 py-4 font-lexend text-foreground focus:outline-none focus:border-spark-lime transition-colors"
                    />
                    <button className="bg-black text-spark-lime font-black uppercase tracking-widest px-8 py-4 rounded-full hover:scale-105 transition-transform">
                        Join
                    </button>
                </form>
            </div>
        </section>
    );
}
