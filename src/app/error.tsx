"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Global Error Boundary:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-24">
            <div className="max-w-md w-full text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-8">
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>

                <h1 className="text-4xl font-black font-outfit text-foreground uppercase tracking-tight mb-4">
                    Something went wrong
                </h1>

                <p className="text-muted-foreground font-lexend mb-12 text-lg">
                    We encountered an unexpected error. Don't worry, your progress is safe. Please try refreshing or return home.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={() => reset()}
                        className="bg-spark-lime text-black hover:bg-white rounded-full px-8 py-6 font-black uppercase tracking-widest text-xs shadow-xl transition-all flex items-center gap-2"
                    >
                        <RefreshCcw className="w-4 h-4" />
                        Try Again
                    </Button>

                    <Link href="/">
                        <Button
                            variant="outline"
                            className="border-foreground/10 text-foreground hover:bg-foreground/5 rounded-full px-8 py-6 font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2"
                        >
                            <Home className="w-4 h-4" />
                            Return Home
                        </Button>
                    </Link>
                </div>

                {process.env.NODE_ENV === "development" && (
                    <div className="mt-12 p-4 bg-surface rounded-2xl border border-foreground/5 text-left overflow-auto max-h-40">
                        <p className="text-[10px] font-mono text-foreground/40 leading-tight">
                            {error.message}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
