"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, ShoppingCart } from "lucide-react";
import { useRazorpay } from "@/hooks/useRazorpay";
import { CheckoutDialog } from "@/components/shared/CheckoutDialog";

export function StarterKitBanner() {
    const { handlePayment } = useRazorpay();

    return (
        <section className="px-6 md:px-12 py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-spark-lime/10 via-transparent to-transparent" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Text side */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spark-lime/20 text-spark-lime text-[10px] font-black uppercase tracking-widest mb-6 border border-spark-lime/20">
                                <Rocket className="w-3.5 h-3.5" />
                                Just Launched
                            </div>

                            <h2 className="text-[28px] sm:text-[40px] md:text-[56px] font-black font-outfit text-white uppercase tracking-[-0.04em] leading-[0.9] mb-4">
                                Spark <span className="text-spark-lime">Starter Kit</span>
                            </h2>

                            <p className="text-white/60 font-lexend text-sm md:text-lg leading-snug tracking-tight mb-6 max-w-md">
                                5 fun projects in 1 box! Build night lamps, rain alarms, traffic lights and more – no soldering needed.
                            </p>

                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-white/30 line-through font-outfit font-black text-lg">₹1,999</span>
                                <span className="text-spark-lime font-outfit font-black text-3xl md:text-4xl">₹999</span>
                                <span className="bg-spark-lime text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">50% Off</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <CheckoutDialog>
                                    <Button
                                        className="bg-spark-lime text-black hover:bg-white rounded-full px-10 py-6 md:py-8 font-black uppercase tracking-widest text-[11px] shadow-xl transition-all hover:scale-105 group gap-2"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        Pre-order Now
                                    </Button>
                                </CheckoutDialog>
                                <Link href="/starter-kit">
                                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 rounded-full px-10 py-6 md:py-8 font-black uppercase tracking-widest text-[11px] transition-all hover:scale-105 group">
                                        Explore Kit
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image side */}
                        <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
                            <Image
                                src="/img/starter-kit-hero.png"
                                alt="SparkBots Starter Kit"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
