"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CustomKitDialog({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-surface border-white/10 text-foreground">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black font-outfit uppercase tracking-tighter">Custom Build Request</DialogTitle>
                    <DialogDescription className="text-muted-foreground font-lexend">
                        Tell us about your dream robotics project and we'll help you build the perfect kit for Class 1-10.
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-6 pt-4" onSubmit={(e) => { e.preventDefault(); setOpen(false); }}>
                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Student Class</label>
                            <Input placeholder="e.g. Class 7" className="bg-foreground/5 border-none" />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Project Vision</label>
                            <Textarea placeholder="Describe what you want to build..." className="bg-foreground/5 border-none min-h-[100px]" />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Budget range (₹)</label>
                            <Input placeholder="e.g. ₹2000 - ₹5000" className="bg-foreground/5 border-none" />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-spark-lime text-black hover:bg-white font-black uppercase tracking-widest py-6 rounded-xl">
                        Send Request
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
