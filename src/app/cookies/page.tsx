"use client";

import React from "react";

const cookieTypes = [
    {
        title: "Essential Cookies",
        description: "These cookies are strictly necessary for the website to function. They enable core features like secure login, shopping cart functionality, and checkout. These cookies cannot be disabled.",
        examples: ["Session management", "Authentication tokens", "CSRF protection", "Cart contents"],
        required: true
    },
    {
        title: "Analytics Cookies",
        description: "We use analytics cookies to understand how visitors interact with our website. This helps us improve user experience and optimize content. All data is aggregated and anonymized.",
        examples: ["Page views & navigation paths", "Time spent on pages", "Error tracking", "Device & browser info"],
        required: false
    },
    {
        title: "Marketing Cookies",
        description: "Marketing cookies are used to deliver relevant advertisements and track the effectiveness of our campaigns. These cookies may be set by third-party advertising partners.",
        examples: ["Ad personalization", "Campaign performance", "Retargeting pixels", "Social media integrations"],
        required: false
    },
    {
        title: "Preference Cookies",
        description: "These cookies remember your preferences and settings to provide a personalized experience. They help us remember your language, region, and display preferences.",
        examples: ["Language selection", "Theme preferences", "Recently viewed products", "Newsletter preferences"],
        required: false
    }
];

export default function CookiesPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Legal
                    </div>
                    <h1 className="text-[48px] md:text-[80px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        Cookie <span className="text-spark-lime">Policy</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-lg leading-snug tracking-tight">
                        Last updated: March 1, 2026. This policy explains how SparkBots uses cookies and similar technologies on our website.
                    </p>
                </div>

                {/* What are cookies */}
                <div className="bg-surface rounded-[40px] border border-foreground/5 p-10 mb-16">
                    <h2 className="text-2xl font-black font-outfit text-foreground uppercase tracking-tight mb-4">What Are Cookies?</h2>
                    <p className="text-muted-foreground font-lexend leading-relaxed tracking-tight">
                        Cookies are small text files stored on your device when you visit a website. They help the site remember your actions and preferences over time, so you don&apos;t have to re-enter them whenever you come back. Cookies are widely used to make websites work efficiently and provide a better user experience.
                    </p>
                </div>

                {/* Cookie types */}
                <div className="space-y-8 mb-16">
                    {cookieTypes.map((cookie, i) => (
                        <div key={i} className="p-10 bg-surface rounded-[40px] border border-foreground/5">
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xl font-black font-outfit text-foreground uppercase tracking-tight">{cookie.title}</h3>
                                {cookie.required ? (
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-black text-spark-lime px-3 py-1 rounded-full">Required</span>
                                ) : (
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-black/5 text-foreground/40 px-3 py-1 rounded-full">Optional</span>
                                )}
                            </div>
                            <p className="text-muted-foreground font-lexend leading-relaxed tracking-tight mb-6">{cookie.description}</p>
                            <div className="grid grid-cols-2 gap-3">
                                {cookie.examples.map((example, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-spark-lime" />
                                        <span className="text-sm text-foreground/40 font-lexend">{example}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Managing cookies */}
                <div className="bg-black rounded-[40px] p-10 text-white">
                    <h2 className="text-2xl font-black font-outfit uppercase tracking-tight mb-4">Managing Your <span className="text-spark-lime">Cookies</span></h2>
                    <p className="text-white/40 font-lexend leading-relaxed tracking-tight mb-6">
                        You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may affect website functionality.
                    </p>
                    <p className="text-white/40 font-lexend leading-relaxed tracking-tight">
                        For more information about managing cookies, visit your browser&apos;s help section. If you have questions about our cookie practices, contact us at privacy@sparkbots.in.
                    </p>
                </div>
            </div>
        </div>
    );
}
