"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const kits = [
    {
        id: "starter-kit",
        name: "Starter Kit",
        age: "6+",
        price: "₹999",
        image: "/img/0EJAb.jpg",
        tag: "LEGO Compatible",
        description: "Perfect first robotics kit for young builders",
    },
    {
        id: "explorer-kit",
        name: "Rover Explorer Kit",
        age: "8+",
        price: "₹1,999",
        image: "/img/3EL5W.jpg",
        tag: "10-in-1 Versatility",
        description: "Build 10 different robots with one kit",
    },
    {
        id: "ai-vision-kit",
        name: "AI Vision Creator Kit",
        age: "10+",
        price: "₹2,999",
        image: "/img/49tr0.jpg",
        tag: "Advanced Learning",
        description: "Camera-powered AI & machine learning projects",
    },
    {
        id: "spark-pro-kit",
        name: "Spark Pro Masterclass",
        age: "12+",
        price: "₹5,499",
        image: "/img/M8FHd.jpg",
        tag: "Professional Grade",
        description: "Competition-ready robotics for serious builders",
    }
];

export function FeaturedKits() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollTo = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const cardWidth = container.scrollWidth / kits.length;
        const newIndex = direction === "left"
            ? Math.max(0, activeIndex - 1)
            : Math.min(kits.length - 1, activeIndex + 1);
        setActiveIndex(newIndex);
        container.scrollTo({ left: newIndex * cardWidth, behavior: "smooth" });
    };

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const cardWidth = container.scrollWidth / kits.length;
        const newIndex = Math.round(container.scrollLeft / cardWidth);
        setActiveIndex(newIndex);
    };

    return (
        <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-12 bg-background overflow-hidden">

            <div className="max-w-7xl mx-auto mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-8">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-4 px-4 py-1 border border-foreground/5 rounded-full inline-block"
                    >
                        The Vault
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[28px] sm:text-[48px] md:text-[80px] font-black font-outfit text-foreground mb-4 tracking-[-0.02em] md:tracking-[-0.04em] uppercase leading-[1.1] md:leading-[0.9]"
                    >
                        Choose Your <span className="text-spark-lime">Spark</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground font-lexend max-w-lg text-sm md:text-lg tracking-tight px-0"
                    >
                        Premium robotics kits built to flex with your progress.
                    </motion.p>
                </div>


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 self-center md:self-auto"
                >
                    <button
                        onClick={() => scrollTo("left")}
                        disabled={activeIndex === 0}
                        className="w-12 h-12 rounded-full border-2 border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:border-foreground/10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scrollTo("right")}
                        disabled={activeIndex === kits.length - 1}
                        className="w-12 h-12 rounded-full border-2 border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:border-foreground/10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <span className="text-[11px] font-black uppercase tracking-widest text-foreground/30 ml-2">
                        {String(activeIndex + 1).padStart(2, "0")} / {String(kits.length).padStart(2, "0")}
                    </span>
                </motion.div>
            </div>


            <div className="relative max-w-7xl mx-auto">
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-0"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {kits.map((kit, index) => (
                        <motion.div
                            key={kit.id}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * index + 0.3 }}
                            className="min-w-[280px] sm:min-w-[320px] md:min-w-[420px] snap-center px-2 md:px-0"
                        >
                            <div className="aspect-[4/5] relative bg-surface rounded-[32px] p-8 md:p-10 flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                                <div className="relative z-10">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 bg-foreground/5 px-3 py-1 rounded-full">
                                        {kit.tag}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-black font-outfit text-foreground mt-4 leading-[0.9] uppercase tracking-tighter">
                                        {kit.name}
                                    </h3>
                                    <p className="text-sm text-foreground/40 mt-2 font-medium">{kit.description}</p>
                                </div>


                                <div className="absolute inset-0 z-0 flex items-center justify-center p-10">
                                    <div className="relative w-full h-full opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100 transition-all duration-700">
                                        <Image
                                            src={kit.image}
                                            alt={kit.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>


                                <div className="relative z-10 flex justify-between items-end">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-black text-white hover:bg-black rounded-full px-4 py-1 font-black text-[10px]">
                                                AGE {kit.age}
                                            </Badge>
                                            <Badge className="bg-spark-lime text-black hover:bg-spark-lime rounded-full px-4 py-1 font-black text-[10px]">
                                                NEW
                                            </Badge>
                                        </div>
                                        <p className="text-2xl font-black font-outfit text-foreground">{kit.price}</p>
                                    </div>
                                    <Link href={`/shop/${kit.id}`}>
                                        <Button size="icon" className="w-14 h-14 rounded-full bg-black hover:bg-spark-lime hover:text-black transition-all group-hover:rotate-45 duration-300">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="flex justify-center gap-2 mt-8">
                {kits.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setActiveIndex(i);
                            if (!scrollContainerRef.current) return;
                            const cardWidth = scrollContainerRef.current.scrollWidth / kits.length;
                            scrollContainerRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-foreground" : "w-1.5 bg-foreground/15"}`}
                    />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link href="/shop">
                    <Button variant="outline" className="rounded-full px-12 py-8 font-black uppercase tracking-widest border-2 border-foreground/5 hover:bg-foreground hover:text-background gap-3 transition-all">
                        View Full Toolkit
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
