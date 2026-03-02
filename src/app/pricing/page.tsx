"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "₹999",
        period: "one-time",
        description: "Perfect for curious beginners. Everything needed to build their first robot.",
        features: [
            "5 guided projects",
            "Bilingual instruction manual",
            "No tools required",
            "Community forum access",
            "30-day return policy",
            "12-month warranty"
        ],
        cta: "Get Starter Kit",
        href: "/shop/starter-kit",
        highlighted: false
    },
    {
        name: "Explorer",
        price: "₹1,999",
        period: "one-time",
        description: "For kids ready to level up. Sensors, logic gates, and real-world challenges.",
        features: [
            "10 guided projects",
            "Infrared & touch sensors",
            "Curriculum-linked lessons",
            "Video masterclass access",
            "Priority email support",
            "12-month warranty"
        ],
        cta: "Get Explorer Kit",
        href: "/shop/explorer-kit",
        highlighted: true
    },
    {
        name: "Creator",
        price: "₹2,999",
        period: "one-time",
        description: "Master-level robotics. AI vision, Python coding, and app control.",
        features: [
            "15+ advanced projects",
            "AI vision module included",
            "Python & block coding",
            "Mobile app control",
            "1-on-1 onboarding call",
            "12-month warranty"
        ],
        cta: "Get Creator Kit",
        href: "/shop/ai-vision-kit",
        highlighted: false
    }
];

const subscriptionPlan = {
    name: "Monthly Spark Box",
    price: "₹1,099",
    period: "/month",
    description: "A new robotic challenge delivered to your doorstep every month. Cancel anytime.",
    features: [
        "New project every month",
        "Exclusive components",
        "Digital masterclass included",
        "Early access to new kits",
        "Members-only community",
        "Free shipping on all boxes"
    ]
};

export default function PricingPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Transparent Pricing
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        Pick Your <span className="text-spark-lime">Spark</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl leading-snug tracking-tight">
                        No hidden fees. No subscriptions required. Just pure robotics at fair prices. Free shipping on orders above ₹1,999.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`p-10 rounded-[40px] border flex flex-col ${
                                plan.highlighted
                                    ? "bg-black text-white border-foreground"
                                    : "bg-surface text-foreground border-foreground/5"
                            }`}
                        >
                            <div className="mb-8">
                                <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${plan.highlighted ? "text-spark-lime" : "text-foreground/40"}`}>
                                    {plan.name}
                                </div>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className={`text-[48px] font-black font-outfit tracking-tight ${plan.highlighted ? "text-spark-lime" : "text-foreground"}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-sm font-lexend ${plan.highlighted ? "text-white/40" : "text-foreground/40"}`}>
                                        {plan.period}
                                    </span>
                                </div>
                                <p className={`font-lexend leading-snug tracking-tight ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? "bg-spark-lime text-foreground" : "bg-black/5 text-foreground"}`}>
                                            <Check className="w-3 h-3" strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm font-lexend ${plan.highlighted ? "text-white/70" : "text-foreground/60"}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link href={plan.href}>
                                <Button className={`w-full rounded-full py-6 font-black uppercase tracking-widest text-[10px] ${
                                    plan.highlighted
                                        ? "bg-spark-lime text-foreground hover:bg-background"
                                        : "bg-black text-spark-lime hover:bg-slate-900"
                                }`}>
                                    {plan.cta}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Subscription Section */}
                <div className="bg-surface rounded-[40px] border border-foreground/5 p-12 md:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime mb-4 px-4 py-1 bg-black rounded-full inline-block">
                                Subscription
                            </div>
                            <h2 className="text-[32px] md:text-[48px] font-black font-outfit text-foreground uppercase tracking-[-0.04em] leading-[0.9] mb-4">
                                {subscriptionPlan.name}
                            </h2>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-[48px] font-black font-outfit text-foreground tracking-tight">{subscriptionPlan.price}</span>
                                <span className="text-foreground/40 font-lexend">{subscriptionPlan.period}</span>
                            </div>
                            <p className="text-muted-foreground font-lexend leading-snug tracking-tight mb-8">{subscriptionPlan.description}</p>
                            <Link href="/shop/monthly-spark-box">
                                <Button className="bg-black text-spark-lime hover:bg-slate-900 rounded-full px-10 py-6 font-black uppercase tracking-widest text-[10px]">
                                    Subscribe Now
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {subscriptionPlan.features.map((feature, j) => (
                                <div key={j} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-spark-lime flex items-center justify-center text-foreground font-black text-[10px]">
                                        {j + 1}
                                    </div>
                                    <span className="font-lexend text-foreground/60 group-hover:text-foreground transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
