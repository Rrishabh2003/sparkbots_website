"use client";

import React from "react";

const sections = [
    {
        title: "Brand & Trademark",
        content: "The SparkBots name, logo, and all associated branding elements are registered trademarks of SparkBots India B.V. Use of our trademarks without prior written permission is strictly prohibited. This includes use in advertising, product names, domain names, or social media handles."
    },
    {
        title: "Product Designs",
        content: "All SparkBots kit designs, mechanical assemblies, PCB layouts, and packaging are protected by design patents and intellectual property laws. Reproduction, reverse-engineering, or derivative works based on our designs require explicit licensing agreements."
    },
    {
        title: "Software & Firmware",
        content: "SparkBots software, including our block-coding platform, mobile apps, and embedded firmware, is proprietary and protected by copyright. Personal, non-commercial use is granted with product purchase. Redistribution, modification, or decompilation is prohibited without written consent."
    },
    {
        title: "Educational Content",
        content: "All lesson plans, curriculum guides, video tutorials, and instructional materials are copyrighted by SparkBots India B.V. Schools and educational institutions may use these materials in classroom settings with a valid institutional license. Commercial redistribution is not permitted."
    },
    {
        title: "Open-Source Components",
        content: "Certain SparkBots software components utilize open-source libraries under their respective licenses (MIT, Apache 2.0, GPL). A full list of open-source attributions is available in our software documentation and GitHub repositories."
    },
    {
        title: "User-Generated Content",
        content: "By sharing projects, reviews, or content on SparkBots platforms, you grant SparkBots a non-exclusive, royalty-free license to use, display, and promote your content across our channels. You retain full ownership of your original creations."
    },
    {
        title: "Licensing for Schools",
        content: "Institutional licenses are available for schools, makerspaces, and after-school programs. These licenses include usage rights for curriculum materials, software access for multiple students, and priority technical support. Contact schools@sparkbots.in for custom licensing agreements."
    },
    {
        title: "Third-Party Integrations",
        content: "SparkBots products are compatible with third-party platforms like Scratch and Arduino IDE. These platforms are governed by their own licenses. SparkBots is not affiliated with these platforms and makes no claims to their intellectual property."
    }
];

export default function LicensingPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Legal
                    </div>
                    <h1 className="text-[48px] md:text-[80px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        <span className="text-spark-lime">Licensing</span> & IP
                    </h1>
                    <p className="text-muted-foreground font-lexend text-lg leading-snug tracking-tight">
                        Information about intellectual property, trademarks, and usage rights for SparkBots products, software, and educational content.
                    </p>
                </div>

                <div className="space-y-12">
                    {sections.map((section, i) => (
                        <div key={i} className="pb-12 border-b border-foreground/5 last:border-0">
                            <div className="flex items-start gap-6">
                                <div className="text-[14px] font-black text-foreground/10 font-outfit mt-1">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black font-outfit text-foreground uppercase tracking-tight mb-4">
                                        {section.title}
                                    </h2>
                                    <p className="text-muted-foreground font-lexend leading-relaxed tracking-tight">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
