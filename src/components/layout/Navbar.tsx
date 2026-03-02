"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Shop", href: "/shop" },
    { name: "Guides", href: "/learn" },
    { name: "Pricing", href: "/pricing" },
    { name: "For Schools", href: "/schools" },
    { name: "About Us", href: "/about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            setShowIcon(window.scrollY >= window.innerHeight * 0.8);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out px-2 sm:px-4",
                isScrolled ? "top-4 sm:top-6" : "top-8 sm:top-16"
            )}
        >
            <div className="max-w-6xl mx-auto bg-black/80 backdrop-blur-[16px] border border-white/10 rounded-full px-4 sm:px-6 py-2 flex items-center justify-between shadow-2xl relative">
                {/* Menu */}
                <div className="flex-1 flex justify-start">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="w-4 h-0.5 bg-current rounded-full" />
                            <span className="w-3 h-0.5 bg-current rounded-full" />
                        </div>
                        <span className="text-[14px] font-medium uppercase tracking-tight">Menu</span>
                    </button>
                </div>

                {/* Logo */}
                <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center h-8">
                        <motion.span
                            animate={{
                                opacity: showIcon ? 0 : 1,
                                scale: showIcon ? 0.8 : 1,
                                filter: showIcon ? "blur(6px)" : "blur(0px)",
                            }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="text-white text-xl font-black font-outfit tracking-tighter whitespace-nowrap absolute"
                        >
                            SPARKBOTS
                        </motion.span>

                        <motion.div
                            animate={{
                                opacity: showIcon ? 1 : 0,
                                scale: showIcon ? 1 : 0.5,
                                filter: showIcon ? "blur(0px)" : "blur(6px)",
                            }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="w-8 h-8 relative absolute"
                        >
                            <Image
                                src="/img/1.svg"
                                alt="SparkBots"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                </Link>

                {/* Actions */}
                <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3">
                    <ThemeToggle />
                    <Link href="/login" className="hidden sm:block text-white/50 hover:text-white text-[14px] font-medium transition-colors">
                        Login
                    </Link>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_FkB9JsBZersln47y8O7r6GmEf-ib598D_YFZE3SNJ-HA7Q/viewform?usp=dialog" target="_blank">
                        <Button className="bg-spark-lime text-black hover:bg-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-[12px] sm:text-[14px] font-medium transition-all">
                            Join
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-black rounded-[2.5rem] shadow-2xl border border-white/10 p-8 z-40 overflow-hidden"
                    >
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            {navItems.map((item, i) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group relative overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-4xl font-black text-white hover:text-spark-lime transition-colors font-outfit uppercase tracking-tighter py-2 border-b border-white/5 flex items-center justify-between"
                                    >
                                        {item.name}
                                        <span className="text-sm border border-white/20 rounded-full px-3 py-1 text-white/40 group-hover:border-spark-lime/50 group-hover:text-spark-lime transition-colors">
                                            0{i + 1}
                                        </span>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">© 2026 SparkBots Supply</span>
                            <div className="flex gap-4">
                                <span className="text-spark-lime text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:underline">Twitter</span>
                                <span className="text-spark-lime text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:underline">Instagram</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
