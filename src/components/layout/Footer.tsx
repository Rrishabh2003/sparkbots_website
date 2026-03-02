"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const contentY = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const logoY = useTransform(scrollYProgress, [0, 1], [300, 0]);

    return (
        <footer ref={containerRef} className="bg-surface-alt pt-20 md:pt-32 pb-8 px-6 md:px-12 relative overflow-hidden min-h-[600px] flex flex-col justify-end">
            <motion.div style={{ y: contentY }} className="max-w-7xl mx-auto relative z-10 w-full">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-24">

                    <div className="lg:col-span-5">
                        <h3 className="text-lg md:text-xl font-medium text-foreground mb-6 md:mb-8">Subscribe to the SparkBots Newsletter</h3>
                        <form className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="bg-foreground/5 border-none rounded-sm px-6 py-4 text-sm text-foreground focus:ring-1 focus:ring-foreground/10 outline-none w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="yourname@email.com"
                                    className="bg-foreground/5 border-none rounded-sm px-6 py-4 text-sm text-foreground focus:ring-1 focus:ring-foreground/10 outline-none w-full"
                                />
                            </div>
                            <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-5 h-5 rounded-full border border-foreground/10 flex items-center justify-center bg-transparent group-hover:bg-foreground/5 transition-colors shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-foreground opacity-0 group-hover:opacity-10" />
                                </div>
                                <p className="text-[12px] text-foreground/40 leading-tight">
                                    I agree to the <Link href="/privacy" className="underline underline-offset-2">Privacy Policy</Link>
                                </p>
                            </div>
                            <button className="bg-black text-white px-10 py-4 rounded-sm text-sm font-medium hover:bg-black/90 transition-colors w-full md:w-auto">
                                Get updates
                            </button>
                        </form>
                    </div>


                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
                        <div>
                            <h4 className="text-foreground/40 text-sm font-medium mb-4 md:mb-6 uppercase tracking-wider">Product</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {[
                                    { label: "The Vault", href: "/shop" },
                                    { label: "Robotics Kits", href: "/shop" },
                                    { label: "Guides", href: "/learn" },
                                    { label: "Software", href: "/learn" },
                                ].map(item => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-foreground text-sm hover:underline underline-offset-4 decoration-foreground/20">{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-foreground/40 text-sm font-medium mb-4 md:mb-6 uppercase tracking-wider">Community</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {[
                                    { label: "Showcase", href: "/showcase" },
                                    { label: "About Spark", href: "/about" },
                                    { label: "Updates", href: "/updates" },
                                    { label: "Schools", href: "/schools" },
                                ].map(item => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-foreground text-sm hover:underline underline-offset-4 decoration-foreground/20">{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-foreground/40 text-sm font-medium mb-4 md:mb-6 uppercase tracking-wider">Support</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {[
                                    { label: "Pricing", href: "/pricing" },
                                    { label: "FAQs", href: "/faqs" },
                                    { label: "Support", href: "/support" },
                                    { label: "Shipping", href: "/shipping" },
                                ].map(item => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-foreground text-sm hover:underline underline-offset-4 decoration-foreground/20">{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-24 md:mb-32">
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <Link href="/login" className="flex-1 md:flex-none text-center bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                            Login
                        </Link>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_FkB9JsBZersln47y8O7r6GmEf-ib598D_YFZE3SNJ-HA7Q/viewform?usp=dialog" target="_blank" className="flex-1 md:flex-none text-center bg-[#A3FF2E] text-black px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                            Join Spark
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                            <Link key={i} href="#" className="w-10 h-10 bg-foreground/5 rounded-lg flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors">
                                <Icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-none relative">
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        {[
                            { label: "LICENSING", href: "/licensing" },
                            { label: "T&CS", href: "/terms" },
                            { label: "PRIVACY", href: "/privacy" },
                            { label: "COOKIES", href: "/cookies" },
                        ].map(tag => (
                            <Link key={tag.label} href={tag.href} className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-sm tracking-widest hover:bg-black/80 transition-colors">
                                {tag.label}
                            </Link>
                        ))}
                    </div>

                    <p className="md:absolute md:bottom-[-4%] md:left-1/2 md:transform md:-translate-x-1/2 text-[12px] text-foreground/40 font-medium order-3 md:order-none">
                        © 2026 SPARKBOTS INDIA B.V.
                    </p>

                    <div className="flex items-center gap-1 text-[10px] font-bold tracking-widest text-foreground/40">
                        CREATED BY
                        <span className="bg-[#7B61FF] text-white px-3 py-1.5 rounded-sm ml-2">VARS.ai</span>
                    </div>
                </div>
            </motion.div>


            <motion.div
                style={{ y: logoY }}
                className="absolute bottom-[-1%] md:bottom-[-2%] left-[-50%] md:left-[-5%] w-[200%] md:w-[220%] pointer-events-none select-none overflow-hidden h-[150px] md:h-[300px] flex items-center justify-center"
            >
                <h1 className="text-[25vw] md:text-[18vw] font-black text-foreground leading-none tracking-tighter opacity-10 md:opacity-100 whitespace-nowrap">
                    SPARKBOTS<span className="opacity-0">O</span>SPARKBOTS
                </h1>
            </motion.div>
        </footer>
    );
}
