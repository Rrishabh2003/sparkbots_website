"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all border-4 border-white/20"
        >
            <MessageCircle className="w-8 h-8 fill-current" />
            <span className="sr-only">Contact on WhatsApp</span>
        </motion.a>
    );
}
