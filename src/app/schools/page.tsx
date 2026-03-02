"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SchoolsPage() {
    const handleGenerateQuote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const institution = formData.get("institution");
        const contact = formData.get("contact");
        const email = formData.get("email");
        const requirements = formData.get("requirements");

        const message = `*SparkBots Institutional Quote Request*%0A%0A` +
            `*Institution:* ${institution}%0A` +
            `*Contact Person:* ${contact}%0A` +
            `*Email:* ${email}%0A` +
            `*Quantity & Requirements:* ${requirements}`;

        window.open(`https://wa.me/918674987240?text=${message}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-background">
            <div className="pt-48 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-4 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Institutional Partners
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase leading-[0.9] tracking-[-0.04em] mb-8">
                        Lighting up<br /><span className="text-spark-lime">Education</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl max-w-2xl mx-auto leading-snug tracking-tight">
                        Revolutionizing the teaching and learning experience with professional STEAM tools tailored for schools and makerspaces.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 tracking-tight">Request an Auto-Quote</h3>
                            <p className="text-muted-foreground mb-8 font-lexend">Streamline your procurement process. Fill out the form and receive a professional PDF quote instantly.</p>

                            <form onSubmit={handleGenerateQuote} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input name="institution" placeholder="Institution Name" className="rounded-2xl border-foreground/5 bg-surface h-14 text-foreground" required />
                                    <Input name="contact" placeholder="Contact Person" className="rounded-2xl border-foreground/5 bg-surface h-14 text-foreground" required />
                                </div>
                                <Input name="email" type="email" placeholder="Email Address" className="rounded-2xl border-foreground/5 bg-surface h-14 text-foreground" required />
                                <Textarea name="requirements" placeholder="Quantity & Requirements" className="rounded-2xl border-foreground/5 bg-surface h-32 text-foreground" required />
                                <Button type="submit" className="w-full bg-black text-spark-lime font-black uppercase tracking-widest h-14 rounded-2xl hover:scale-[1.02] transition-transform">
                                    Generate Quote
                                </Button>
                            </form>
                        </div>

                        <div className="bg-surface p-10 rounded-[40px] border border-foreground/5">
                            <h4 className="text-xl font-black uppercase tracking-tight mb-4 text-spark-lime">Free Product Trial</h4>
                            <p className="text-sm text-muted-foreground mb-6 font-lexend">Gain peace of mind by applying for a product trial. We'll send a kit to your school for 14 days of hands-on evaluation.</p>
                            <Button variant="outline" className="border-foreground/10 rounded-xl h-12 uppercase font-black tracking-widest text-[10px]">
                                Apply for Trial
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-8 bg-black p-10 rounded-[40px] text-white">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Why Educators Choose SparkBots</h3>
                        <div className="space-y-6">
                            {[
                                "Zero-Prep professional lesson plans",
                                "Curriculum-integrated coding tracks",
                                "BIS certified & Classroom-Safe hardware",
                                "Bulk pricing & custom kit bundles",
                                "12-month institutional warranty",
                                "Priority technical support & training"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-spark-lime flex items-center justify-center text-black font-black text-[10px]">
                                        {i + 1}
                                    </div>
                                    <span className="font-lexend text-white/60 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
