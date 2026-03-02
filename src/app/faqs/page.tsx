"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqCategories = [
    {
        category: "Products & Kits",
        questions: [
            {
                q: "What age group are SparkBots kits designed for?",
                a: "Our kits are designed for children aged 6-12+. The Starter Kit (6+) focuses on basic motors and switches, the Explorer Kit (8+) introduces sensors and logic, and the Creator Kit (10+) includes AI vision and Python coding. Each kit clearly indicates the recommended age on the packaging."
            },
            {
                q: "Do kids need prior coding or electronics experience?",
                a: "Not at all! Our kits are designed for complete beginners. The Starter Kit requires zero prior knowledge. Each kit includes step-by-step bilingual guides (English & Hindi) with visual instructions. Kids progress naturally from snap-fit assembly to block coding to Python."
            },
            {
                q: "Are SparkBots kits compatible with LEGO?",
                a: "Yes! Our Starter Kit features LEGO-compatible connectors, so kids can integrate SparkBots components with their existing LEGO collection. This opens up limitless creative possibilities."
            },
            {
                q: "What's included in each kit?",
                a: "Every kit includes all necessary hardware components, a bilingual instruction manual, access to our coding platform, and a QR code linking to video tutorials. No additional tools or purchases are needed. Batteries are included in all kits."
            }
        ]
    },
    {
        category: "Orders & Payment",
        questions: [
            {
                q: "What payment methods do you accept?",
                a: "We accept UPI, all major credit and debit cards, net banking, and select digital wallets. EMI options are available on orders above ₹5,000 through select card providers. All transactions are secured with 256-bit SSL encryption."
            },
            {
                q: "Can I modify or cancel my order after placing it?",
                a: "Orders can be modified or cancelled within 2 hours of placement, before they enter the packing stage. Contact our support team immediately at support@sparkbots.in or through WhatsApp. Once shipped, cancellation isn't possible, but our 30-day return policy applies."
            },
            {
                q: "Do you offer bulk discounts for schools?",
                a: "Yes! We offer special institutional pricing for schools, makerspaces, and after-school programs. Bulk orders of 10+ kits receive tiered discounts. Visit our Schools page or email schools@sparkbots.in for a custom quote."
            }
        ]
    },
    {
        category: "Shipping & Delivery",
        questions: [
            {
                q: "How long does shipping take?",
                a: "Domestic orders are delivered in 3-5 business days for metro cities and 5-8 business days for other locations. International shipping typically takes 10-15 business days depending on the destination. You'll receive tracking information via email and SMS."
            },
            {
                q: "Is shipping free?",
                a: "Yes! Shipping is free on all domestic orders above ₹1,999. For orders below that threshold, a flat ₹99 shipping fee applies. International shipping rates are calculated at checkout based on destination and weight."
            },
            {
                q: "Do you ship internationally?",
                a: "Yes, we ship to over 15 countries including the US, UK, UAE, Singapore, Australia, and most of Europe. International orders may be subject to local customs duties and taxes, which are the responsibility of the buyer."
            }
        ]
    },
    {
        category: "Returns & Warranty",
        questions: [
            {
                q: "What is your return policy?",
                a: "We offer a 30-day return policy for unused, unopened products in original packaging. Opened kits can be returned within 14 days if all components are intact and undamaged. Refunds are processed within 7-10 business days. Contact support@sparkbots.in to initiate a return."
            },
            {
                q: "What does the warranty cover?",
                a: "All SparkBots products come with a 12-month warranty covering manufacturing defects in materials and workmanship. This includes faulty motors, sensors, PCBs, and structural components. The warranty does not cover damage from misuse, water exposure, or unauthorized modifications."
            },
            {
                q: "How do I claim warranty?",
                a: "Email support@sparkbots.in with your order number, a description of the issue, and photos/videos of the defect. Our team will assess the claim within 48 hours. If approved, we'll ship a replacement part or full kit at no cost."
            }
        ]
    },
    {
        category: "Software & Learning",
        questions: [
            {
                q: "What coding platforms do SparkBots support?",
                a: "SparkBots kits work with our proprietary block-coding platform (similar to Scratch), Scratch itself, and Python for advanced users. Our platform is available on web, iPad, and Android tablets. No installation required for the web version."
            },
            {
                q: "Are the educational resources free?",
                a: "Yes! All tutorials, video guides, and basic lesson plans on our Learn page are completely free. Premium curriculum packages with detailed lesson plans, assessments, and teacher guides are available for institutional license holders."
            },
            {
                q: "Can I use SparkBots in my school curriculum?",
                a: "Absolutely! Our kits are designed to align with STEM/STEAM curriculum standards and NEP 2020 guidelines. We provide zero-prep lesson plans for educators. Visit our Schools page to learn about institutional partnerships and training programs."
            }
        ]
    }
];

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleQuestion = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Help Center
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        Got <span className="text-spark-lime">Questions</span>?
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl leading-snug tracking-tight max-w-2xl mx-auto">
                        Find answers to the most common questions about SparkBots products, shipping, and support.
                    </p>
                </div>

                <div className="space-y-16">
                    {faqCategories.map((cat, ci) => (
                        <div key={ci}>
                            <h2 className="text-xl font-black font-outfit text-foreground uppercase tracking-tight mb-6 pb-4 border-b border-foreground/5">
                                {cat.category}
                            </h2>
                            <div className="space-y-2">
                                {cat.questions.map((faq, qi) => {
                                    const id = `${ci}-${qi}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div key={qi} className="rounded-2xl overflow-hidden">
                                            <button
                                                onClick={() => toggleQuestion(id)}
                                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                                                    isOpen ? "bg-black text-white" : "bg-surface hover:bg-black/5"
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
                    ))}
                </div>

                {/* Still need help */}
                <div className="mt-20 bg-surface rounded-[40px] border border-foreground/5 p-12 text-center">
                    <h3 className="text-2xl font-black font-outfit text-foreground uppercase tracking-tight mb-4">Still Have Questions?</h3>
                    <p className="text-muted-foreground font-lexend leading-snug tracking-tight mb-8 max-w-xl mx-auto">
                        Our support team is available Monday-Saturday, 9 AM - 7 PM IST. Average response time: under 2 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="mailto:support@sparkbots.in" className="bg-black text-spark-lime font-black uppercase tracking-widest text-[10px] px-8 py-4 rounded-full hover:bg-slate-900 transition-colors">
                            Email Support
                        </a>
                        <a href="https://wa.me/919876543210" className="bg-black/5 text-foreground font-black uppercase tracking-widest text-[10px] px-8 py-4 rounded-full hover:bg-black/10 transition-colors">
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
