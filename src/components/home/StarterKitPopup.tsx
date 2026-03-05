"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRazorpay } from "@/hooks/useRazorpay";
import { CheckoutDialog } from "@/components/shared/CheckoutDialog";

export function StarterKitPopup() {
    const [show, setShow] = useState(false);
    const { handlePayment } = useRazorpay();

    useEffect(() => {
        // Only show once per session
        if (typeof window !== "undefined") {
            const seen = sessionStorage.getItem("starterkit-popup-seen");
            if (!seen) {
                const timer = setTimeout(() => setShow(true), 1500);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    const dismiss = () => {
        setShow(false);
        sessionStorage.setItem("starterkit-popup-seen", "1");
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
                    onClick={dismiss}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-background rounded-[32px] p-8 md:p-10 shadow-2xl border border-foreground/5 text-center"
                    >
                        {/* Close button */}
                        <button
                            onClick={dismiss}
                            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
                        >
                            <X className="w-4 h-4 text-foreground/40" />
                        </button>

                        {/* Rocket icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-spark-lime/10 mb-6">
                            <Rocket className="w-8 h-8 text-spark-lime" />
                        </div>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground text-background text-[10px] font-black tracking-[0.2em] uppercase mb-6">
                            <Sparkles className="w-3 h-3 text-spark-lime" />
                            Just Launched!
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl md:text-3xl font-black font-outfit text-foreground uppercase tracking-tight leading-tight mb-3">
                            SparkBots <span className="text-spark-lime">Starter Kit</span>
                        </h3>
                        <p className="text-muted-foreground font-lexend text-sm leading-snug tracking-tight mb-6">
                            5 Fun Projects in 1 Box! Build traffic lights, night lamps, rain alarms and more.
                        </p>

                        {/* Price badge */}
                        <div className="inline-flex items-center gap-3 bg-black text-white rounded-full px-6 py-3 mb-8">
                            <span className="text-white/40 line-through text-sm font-outfit font-black">₹1,999</span>
                            <span className="text-spark-lime text-xl font-black font-outfit">₹999</span>
                            <span className="bg-spark-lime text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">50% Off</span>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-3">
                            <CheckoutDialog>
                                <Button
                                    className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full py-6 font-black uppercase tracking-widest text-[11px] shadow-xl transition-all hover:scale-[1.02] group"
                                >
                                    Pre-order Now – ₹999
                                </Button>
                            </CheckoutDialog>
                            <Link href="/starter-kit" onClick={dismiss} className="block">
                                <Button variant="outline" className="w-full border-foreground/5 hover:bg-foreground/5 rounded-full py-6 font-black uppercase tracking-widest text-[11px] transition-all hover:scale-[1.02] group">
                                    Explore Kit
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>

                        <button onClick={dismiss} className="mt-4 text-[10px] font-black uppercase tracking-widest text-foreground/30 hover:text-foreground/50 transition-colors">
                            Maybe Later
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
