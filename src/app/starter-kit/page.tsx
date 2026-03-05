"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Play, Sparkles, ArrowRight, ShieldCheck, BookOpen, Wrench,
    Cpu, Lightbulb, CloudRain, Binary, Fan, ChevronDown,
    Package, Check, Star, Zap, Globe, Flag
} from "lucide-react";

/* ─── SEO METADATA (exported for Next.js) ─── */
// Note: metadata export must be in a server component or layout.
// We'll handle SEO via a head component or layout-level metadata.

/* ─── DATA ─── */

const trustItems = [
    { icon: <ShieldCheck className="w-5 h-5" />, label: "BIS Certified Safe" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Hindi + English Picture Guide" },
    { icon: <Wrench className="w-5 h-5" />, label: "No Soldering • No Tools Needed" },
    { icon: <Cpu className="w-5 h-5" />, label: "Pre-programmed – Just Press & Play" },
    { icon: <Star className="w-5 h-5" />, label: "Perfect for Class 1–3" },
    { icon: <Flag className="w-5 h-5" />, label: "Made in India" },
];

const projects = [
    {
        icon: <Lightbulb className="w-8 h-8" />,
        name: "Automatic Night Lamp",
        desc: "Lights up automatically when the room gets dark!",
        color: "text-yellow-500",
    },
    {
        icon: <CloudRain className="w-8 h-8" />,
        name: "Rain Detection System",
        desc: "Detects rain or water and triggers an alert!",
        color: "text-blue-500",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        name: "LED Blinking System",
        desc: "Make LEDs blink in fun patterns and sequences!",
        color: "text-green-500",
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        name: "Automatic Street Light Using Arduino",
        desc: "Street light that turns on at night and off during the day!",
        color: "text-purple-500",
    },
    {
        icon: <Binary className="w-8 h-8" />,
        name: "Arduino Traffic Light Model",
        desc: "Red = Stop, Yellow = Wait, Green = Go",
        color: "text-red-500",
    },
];

const kitContents = [
    "Arduino Nano (pre-programmed) ×1",
    "Mini breadboard (400 points) ×1",
    "LEDs (various colors) ×10",
    "Resistors (220Ω, 10kΩ) ×20",
    "LDR (light sensor) ×2",
    "Rain sensor module ×1",
    "Buzzer ×1",
    "Push buttons ×2",
    "Jumper wires (male-male, 40 pcs)",
    "9V battery + snap connector",
    "Small DC motor (optional fun add-on)",
    "Cardboard enclosure + fun stickers",
    "Big-picture Hindi/English instruction booklet (1 page per project)",
];

const benefits = [
    {
        title: "Safe & Frustration-Free",
        desc: "Designed for ages 5–9 with zero sharp edges, no soldering, and non-toxic BIS-certified components.",
    },
    {
        title: "Real Electronics Through Play",
        desc: "Kids learn about LEDs, sensors, buzzers, and circuits — all while building real-world projects.",
    },
    {
        title: "Aligned With Curiosity-Based Learning",
        desc: "Follows NEP/CBSE-style hands-on exploration. Perfect complement to school STEM curriculum.",
    },
    {
        title: "Reusable Parts – Infinite Creativity",
        desc: "Build 5 guided projects, then disassemble and create your own inventions. The kit never stops giving.",
    },
];

const faqs = [
    {
        q: "Is it safe for young kids?",
        a: "Yes! All components are BIS certified. There's no soldering involved. We recommend adult help for the first setup, but after that kids can build independently.",
    },
    {
        q: "Do I need a computer?",
        a: "No – everything is pre-programmed on the Arduino Nano. Just plug in the battery and follow the picture guide. No coding, no downloads.",
    },
    {
        q: "What if my child gets stuck?",
        a: "Each project has a step-by-step picture book with large, clear illustrations. Plus, our WhatsApp support team is available for quick help.",
    },
];

/* ─── PAGE COMPONENT ─── */

import { useRazorpay } from "@/hooks/useRazorpay";
import { CheckoutDialog } from "@/components/shared/CheckoutDialog";

export default function StarterKitPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { handlePayment } = useRazorpay();

    /* inView refs */
    const projectsRef = useRef<HTMLDivElement>(null);
    const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
    const insideRef = useRef<HTMLDivElement>(null);
    const insideInView = useInView(insideRef, { once: true, margin: "-100px" });
    const benefitsRef = useRef<HTMLDivElement>(null);
    const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

    return (
        <main className="min-h-screen bg-background">

            {/* ════════════════════════════════════════════
                1. HERO SECTION
            ════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background">
                {/* Dot pattern */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.06]" />

                <div className="relative z-10 w-full max-w-7xl px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Tagline pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground text-background text-[10px] font-black tracking-[0.2em] uppercase mb-8 md:mb-12">
                            <Sparkles className="w-3 h-3 text-spark-lime" />
                            <span>Build. Play. Spark the Future.</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-[32px] sm:text-[52px] md:text-[72px] lg:text-[90px] font-black font-outfit text-foreground uppercase leading-[1.1] sm:leading-[0.95] md:leading-[0.9] tracking-[-0.04em] mb-6 md:mb-8">
                            Spark <span className="text-spark-lime">Starter Kit</span>
                            <br />
                            <span className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px]">
                                5 Fun Projects in 1 Box!
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-sm sm:text-lg md:text-xl text-muted-foreground font-lexend mb-10 md:mb-16 max-w-2xl mx-auto leading-tight tracking-tight">
                            Build traffic lights, night lamps, rain alarms and more – no soldering, super easy for little hands
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-0">
                            <CheckoutDialog>
                                <Button className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 md:px-12 py-5 md:py-8 text-xs md:text-sm font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105 group">
                                    Pre-order Now – ₹999
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CheckoutDialog>
                            <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 md:px-10 py-5 md:py-8 text-xs md:text-sm font-black border-2 border-foreground/5 hover:bg-foreground/5 transition-all gap-3 uppercase tracking-widest">
                                <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center text-background">
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                </div>
                                Watch 30-min Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Hero image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 w-full max-w-4xl mx-auto mt-12 md:mt-16 px-6"
                >
                    <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden shadow-2xl border border-foreground/5">
                        <Image
                            src="/img/starter-kit-hero.png"
                            alt="SparkBots Starter Kit – kid building electronics projects"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </section>


            {/* ════════════════════════════════════════════
                2. TRUST BAR
            ════════════════════════════════════════════ */}
            <div className="bg-black py-4 overflow-hidden border-y border-white/10">
                <motion.div
                    className="flex whitespace-nowrap gap-24 items-center"
                    animate={{ x: [0, -1200] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    {[...trustItems, ...trustItems, ...trustItems].map((t, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/60 hover:text-spark-lime transition-colors cursor-default">
                            <div className="text-spark-lime">{t.icon}</div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>


            {/* ════════════════════════════════════════════
                3. 5 EXCITING PROJECTS
            ════════════════════════════════════════════ */}
            <section ref={projectsRef} className="py-20 md:py-32 px-6 md:px-12 bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-4 px-4 py-1 border border-foreground/5 rounded-full inline-block"
                    >
                        What You'll Build
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[28px] sm:text-[48px] md:text-[80px] font-black font-outfit text-foreground mb-4 tracking-[-0.02em] md:tracking-[-0.04em] uppercase leading-[1.1] md:leading-[0.9]"
                    >
                        5 Beginner Projects – <span className="text-spark-lime">All Reusable Parts</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground font-lexend max-w-lg text-sm md:text-lg tracking-tight"
                    >
                        Each project uses the same reusable components – build one, disassemble, and build the next!
                    </motion.p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * index + 0.3 }}
                        >
                            <div className="aspect-[4/5] relative bg-surface rounded-[32px] p-8 flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-foreground/5">
                                <div className="relative z-10">
                                    <div className={`${project.color} mb-4 opacity-60 group-hover:opacity-100 transition-opacity`}>
                                        {project.icon}
                                    </div>
                                    <h3 className="text-xl font-black font-outfit text-foreground leading-tight uppercase tracking-tighter group-hover:text-spark-lime transition-colors">
                                        {project.name}
                                    </h3>
                                </div>
                                <p className="text-sm text-foreground/40 font-medium relative z-10">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* ════════════════════════════════════════════
                4. WHAT'S INSIDE
            ════════════════════════════════════════════ */}
            <section ref={insideRef} className="py-20 md:py-32 px-6 md:px-12 bg-background border-t border-foreground/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={insideInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-4 px-4 py-1 border border-foreground/5 rounded-full inline-block"
                    >
                        Unbox It
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={insideInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[28px] sm:text-[48px] md:text-[80px] font-black font-outfit text-foreground mb-12 md:mb-20 tracking-[-0.02em] md:tracking-[-0.04em] uppercase leading-[1.1] md:leading-[0.9]"
                    >
                        Everything Included – <span className="text-spark-lime">No Extra Shopping</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Visual placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={insideInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative aspect-square md:aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-foreground/5 bg-surface group"
                        >
                            <Image
                                src="/Users/rishabhrajhans/.gemini/antigravity/brain/049a1ac0-7ea7-40e9-8525-91f33635a7e2/starter_kit_contents_photo_1772710630240.png"
                                alt="SparkBots Starter Kit Contents – Everything included in the box"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                        </motion.div>

                        {/* Component list */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={insideInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <ul className="space-y-5">
                                {kitContents.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-spark-lime/10 flex items-center justify-center text-spark-lime mt-0.5 flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-spark-lime" />
                                        </div>
                                        <span className="font-lexend text-foreground/70 group-hover:text-foreground transition-colors tracking-tight">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════
                5. WHY PARENTS CHOOSE SPARKBOTS
            ════════════════════════════════════════════ */}
            <section ref={benefitsRef} className="py-20 md:py-32 px-6 md:px-12 bg-background flex flex-col items-center overflow-hidden">
                <div className="max-w-7xl w-full border-t border-foreground/5 pt-16 md:pt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
                        <div>
                            <h2 className="text-[32px] sm:text-[50px] md:text-[70px] font-black font-outfit text-foreground mb-8 md:mb-10 tracking-tighter uppercase leading-[1] md:leading-[0.8] max-w-xl text-center lg:text-left">
                                Why Parents Choose <span className="text-spark-lime italic">SparkBots</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8 md:gap-[80px]">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 pb-8 md:pb-[80px] border-b border-foreground/[0.05] last:border-0 group cursor-default"
                                >
                                    <div className="text-[12px] md:text-[14px] font-medium text-foreground/20 group-hover:text-foreground transition-colors font-outfit">
                                        0{index + 1}
                                    </div>
                                    <div className="flex flex-col gap-3 md:gap-6">
                                        <h3 className="text-[24px] sm:text-[32px] md:text-[48px] font-black font-outfit text-foreground uppercase tracking-[-0.02em] leading-tight md:leading-none group-hover:text-spark-lime transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground font-lexend text-base md:text-xl max-w-xl leading-snug tracking-tight">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════
                6. PRICING & OFFER BLOCK
            ════════════════════════════════════════════ */}
            <section className="px-6 md:px-12 py-20 md:py-32 bg-background">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black text-white rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-spark-lime/5 via-transparent to-transparent" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spark-lime/20 text-spark-lime text-[10px] font-black uppercase tracking-widest mb-8 border border-spark-lime/20">
                                <Sparkles className="w-3.5 h-3.5" />
                                Launch Offer – Limited Stock
                            </div>

                            <h2 className="text-[32px] md:text-[56px] font-black font-outfit text-white uppercase tracking-[-0.04em] leading-[0.9] mb-6">
                                Grab Your <span className="text-spark-lime">Starter Kit</span>
                            </h2>

                            <div className="flex items-center justify-center gap-6 mb-4">
                                <span className="text-2xl text-white/30 line-through font-outfit font-black">₹1,999</span>
                                <span className="text-[56px] md:text-[72px] font-black font-outfit text-spark-lime tracking-tight">₹999</span>
                            </div>

                            <div className="inline-block bg-spark-lime text-black font-black text-[10px] uppercase tracking-[0.2em] px-6 py-2 rounded-full mb-6">
                                50% OFF – Launch Price
                            </div>

                            <p className="text-white/50 font-lexend mb-10 tracking-tight">
                                Free shipping across India on all pre-orders
                            </p>

                            <CheckoutDialog>
                                <Button className="bg-spark-lime text-black hover:bg-white rounded-full px-12 py-8 font-black uppercase tracking-widest text-sm shadow-2xl transition-all hover:scale-105">
                                    Secure Your Kit Today
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </CheckoutDialog>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ════════════════════════════════════════════
                7. FAQ ACCORDION
            ════════════════════════════════════════════ */}
            <section className="py-20 md:py-32 px-6 md:px-12 bg-background border-t border-foreground/5">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                            Common Questions
                        </div>
                        <h2 className="text-[28px] sm:text-[48px] md:text-[72px] font-black font-outfit text-foreground uppercase tracking-[-0.04em] leading-[0.9]">
                            Got <span className="text-spark-lime">Questions</span>?
                        </h2>
                    </div>

                    <div className="space-y-2">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} className="rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? "bg-black text-white" : "bg-surface hover:bg-black/5"
                                            }`}
                                    >
                                        <span className="font-black font-outfit text-sm uppercase tracking-tight pr-4">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? "rotate-180 text-spark-lime" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="bg-black text-white overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-white/60 font-lexend leading-relaxed tracking-tight">{faq.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════
                8. FINAL CTA
            ════════════════════════════════════════════ */}
            <section className="px-6 md:px-12 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden bg-black rounded-[3rem] px-8 py-20 md:p-24 text-center">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-8 border border-white/20">
                                <Sparkles className="w-3.5 h-3.5" />
                                Limited Launch Stock
                            </div>

                            <h2 className="text-4xl md:text-7xl font-bold font-outfit text-white mb-8 leading-tight tracking-tight">
                                Ready to spark <br />the future?
                            </h2>
                            <p className="text-white/80 text-lg md:text-xl font-lexend mb-12 max-w-2xl mx-auto">
                                Give your child the gift of real electronics learning. Pre-order the SparkBots Starter Kit today!
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <CheckoutDialog>
                                    <Button
                                        size="lg"
                                        className="bg-spark-lime text-black hover:bg-white rounded-full px-10 py-8 text-xl font-bold shadow-2xl transition-all hover:scale-105"
                                    >
                                        Pre-order Starter Kit – ₹999
                                    </Button>
                                </CheckoutDialog>
                            </div>
                            <p className="text-white/50 text-sm font-lexend mt-6 tracking-tight">
                                Limited launch stock – secure yours now!
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    );
}
