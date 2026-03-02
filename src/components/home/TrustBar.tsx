"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, RotateCcw, Truck } from "lucide-react";

const trusts = [
    { icon: <ShieldCheck className="w-5 h-5" />, label: "BIS Certified Safe" },
    { icon: <Award className="w-5 h-5" />, label: "12-Month Warranty" },
    { icon: <RotateCcw className="w-5 h-5" />, label: "60-Day Price Guarantee" },
    { icon: <Truck className="w-5 h-5" />, label: "Free Global Shipping" },
];

export function TrustBar() {
    return (
        <div className="bg-black py-4 overflow-hidden border-y border-white/10">
            <motion.div
                className="flex whitespace-nowrap gap-24 items-center"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {[...trusts, ...trusts, ...trusts].map((trust, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/60 hover:text-spark-lime transition-colors cursor-default">
                        <div className="text-spark-lime">{trust.icon}</div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{trust.label}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
