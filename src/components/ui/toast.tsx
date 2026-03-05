"use client";

import React, { useState, useEffect, createContext, useContext, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Info, Sparkles } from "lucide-react";

type ToastType = "success" | "error" | "info" | "spark";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const toast = useCallback((message: string, type: ToastType = "info") => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 5000);
    }, []);

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-3 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((t) => (
                        <ToastItem key={t.id} toast={t} onClose={(id) => setToasts((prev) => prev.filter((toast) => toast.id !== id))} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within a ToastProvider");
    return context;
};

const ToastItem = ({ toast, onClose }: { toast: Toast; onClose: (id: string) => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`pointer-events-auto flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-md min-w-[320px] max-w-md ${toast.type === "success" ? "bg-spark-lime/10 border-spark-lime/20 text-foreground" :
                    toast.type === "error" ? "bg-red-500/10 border-red-500/20 text-foreground" :
                        toast.type === "spark" ? "bg-black text-spark-lime border-spark-lime/40" :
                            "bg-surface border-foreground/5 text-foreground"
                }`}
        >
            <div className="flex-shrink-0">
                {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-spark-lime" />}
                {toast.type === "error" && <AlertCircle className="w-5 h-5 text-red-500" />}
                {toast.type === "spark" && <Sparkles className="w-5 h-5 text-spark-lime" />}
                {toast.type === "info" && <Info className="w-5 h-5 text-foreground/40" />}
            </div>

            <p className="flex-grow text-sm font-black uppercase tracking-widest leading-tight">
                {toast.message}
            </p>

            <button
                onClick={() => onClose(toast.id)}
                className="flex-shrink-0 text-foreground/20 hover:text-foreground/40 transition-colors"
            >
                <X className="w-4 h-4" />
            </button>
        </motion.div>
    );
};
