"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, Phone, Clock, BookOpen, Wrench, ArrowRight } from "lucide-react";

const contactMethods = [
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "Chat with our team for quick answers. Available Mon-Sat, 9 AM - 7 PM IST.",
        action: "Start Chat",
        href: "https://wa.me/919876543210",
        response: "Under 30 mins"
    },
    {
        icon: Mail,
        title: "Email",
        description: "Send us a detailed query. We respond to all emails within 24 hours.",
        action: "Send Email",
        href: "mailto:support@sparkbots.in",
        response: "Under 2 hours"
    },
    {
        icon: Phone,
        title: "Phone",
        description: "Speak directly with our support engineers. Mon-Fri, 10 AM - 6 PM IST.",
        action: "Call Us",
        href: "tel:+919876543210",
        response: "Instant"
    }
];

const helpTopics = [
    {
        icon: Wrench,
        title: "Kit Assembly Help",
        description: "Having trouble building your kit? Access step-by-step video guides and troubleshooting tips.",
        link: "/learn",
        linkText: "View Guides"
    },
    {
        icon: BookOpen,
        title: "Software Setup",
        description: "Need help setting up the coding platform? Follow our quick-start guide for web, iPad, or Android.",
        link: "/learn",
        linkText: "Setup Guide"
    }
];

const commonIssues = [
    "Motor not spinning — Check battery orientation and ensure connectors are firmly seated.",
    "Bluetooth won't connect — Ensure the kit is powered on and within 10m range. Restart the app if needed.",
    "Code not uploading — Verify USB cable is data-capable (not charge-only). Try a different USB port.",
    "Sensor readings incorrect — Clean the sensor surface gently. Ensure proper alignment as shown in the manual.",
    "App crashes on launch — Update to the latest version. Clear app cache and restart your device.",
    "Missing parts — Email support@sparkbots.in with your order number and a photo of the kit contents."
];

export default function SupportPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Help Center
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        We&apos;ve Got <span className="text-spark-lime">Your Back</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl leading-snug tracking-tight">
                        World-class support for world-class kits. Reach out through any channel — we&apos;re here to help.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {contactMethods.map((method, i) => (
                        <a
                            key={i}
                            href={method.href}
                            className="p-10 bg-surface rounded-[40px] border border-foreground/5 hover:shadow-2xl transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-spark-lime mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <method.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black font-outfit text-foreground uppercase tracking-tight mb-2">{method.title}</h3>
                            <p className="text-muted-foreground font-lexend leading-snug tracking-tight mb-6">{method.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">
                                    <Clock className="w-3 h-3 inline mr-1" /> {method.response}
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                    {method.action} <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Help Topics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {helpTopics.map((topic, i) => (
                        <Link
                            key={i}
                            href={topic.link}
                            className="p-10 bg-black rounded-[40px] text-white group hover:scale-[1.01] transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-spark-lime mb-6">
                                <topic.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black font-outfit uppercase tracking-tight mb-2">{topic.title}</h3>
                            <p className="text-white/40 font-lexend leading-snug tracking-tight mb-6">{topic.description}</p>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                {topic.linkText} <ArrowRight className="w-3 h-3" />
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Common Issues */}
                <div className="bg-surface rounded-[40px] border border-foreground/5 p-12">
                    <h2 className="text-2xl font-black font-outfit text-foreground uppercase tracking-tight mb-8">
                        Quick <span className="text-spark-lime">Fixes</span>
                    </h2>
                    <div className="space-y-4">
                        {commonIssues.map((issue, i) => (
                            <div key={i} className="flex items-start gap-4 pb-4 border-b border-foreground/5 last:border-0">
                                <div className="w-6 h-6 rounded-full bg-spark-lime flex items-center justify-center text-foreground font-black text-[10px] flex-shrink-0 mt-0.5">
                                    {i + 1}
                                </div>
                                <p className="text-muted-foreground font-lexend leading-relaxed tracking-tight">
                                    <span className="text-foreground font-black">{issue.split("—")[0]}—</span>
                                    {issue.split("—")[1]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
