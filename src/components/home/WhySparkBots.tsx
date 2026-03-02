import React from "react";
import NextImage from "next/image";
import { Wrench, BookOpen, Lightbulb, Zap } from "lucide-react";

const features = [
    {
        icon: Wrench,
        title: "No Tools Needed",
        desc: "Build complex robots without a single screw. Snap-fit parts designed for zero-prep classroom environments.",
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        icon: BookOpen,
        title: "Bilingual Guides",
        desc: "Step-by-step instruction manuals in both English and Hindi. Inclusive learning for every student.",
        color: "text-orange-500",
        bg: "bg-orange-50"
    },
    {
        icon: Zap,
        title: "Curriculum Linked",
        desc: "Professional lessons that align with school STEM curriculum, taking educators out of preparation time.",
        color: "text-purple-500",
        bg: "bg-purple-50"
    }
];

export function WhySparkBots() {
    return (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-background flex flex-col items-center overflow-hidden">
            <div className="max-w-7xl w-full border-t border-foreground/5 pt-20 md:pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-outfit text-foreground mb-8 tracking-tighter uppercase leading-[0.85] md:leading-[0.8] max-w-xl">
                            The New Standard for <span className="text-spark-lime italic">Robotics</span>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-12 md:gap-[80px]">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 pb-12 md:pb-[80px] border-b border-foreground/[0.05] last:border-0 group cursor-default">
                                <div className="text-[14px] font-medium text-foreground/20 group-hover:text-foreground transition-colors font-outfit">0{index + 1}</div>
                                <div className="flex flex-col gap-4 md:gap-6">
                                    <h3 className="text-[28px] sm:text-[32px] md:text-[48px] font-black font-outfit text-foreground uppercase tracking-[-0.02em] leading-none group-hover:text-spark-lime transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground font-lexend text-lg md:text-xl max-w-xl leading-snug tracking-tight">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="mt-20 md:mt-32 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-black rounded-[2rem] md:rounded-[3rem] text-white">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 md:mb-0">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black bg-slate-800 overflow-hidden relative">
                                <NextImage src={`https://i.pravatar.cc/100?u=${i}`} alt="" fill />
                            </div>
                        ))}
                    </div>
                    <p className="text-xs font-black uppercase tracking-widest text-white/60 text-center sm:text-left">Join 2,000+ parents</p>
                </div>
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <p className="text-sm italic font-medium text-white/80 mb-2">"The only kit my son didn't abandon after two days."</p>
                    <p className="text-xs font-black uppercase tracking-widest text-spark-lime">— Priya S., Mother</p>
                </div>
            </div>
        </section>
    );
}
