"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRazorpay, PaymentData } from "@/hooks/useRazorpay";
import { ShoppingCart, MapPin, Phone, Mail, User } from "lucide-react";
import { useToast } from "@/components/ui/toast";

interface CheckoutDialogProps {
    children: React.ReactNode;
}

export function CheckoutDialog({ children }: CheckoutDialogProps) {
    const { handlePayment } = useRazorpay();
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<PaymentData>({
        name: "",
        email: "",
        contact: "",
        address: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.contact || !formData.address) {
            toast("Please fill in all the details for delivery.", "error");
            return;
        }

        setOpen(false);
        handlePayment(formData);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-background border-foreground/5 rounded-[32px] p-8">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl font-black font-outfit uppercase tracking-tight flex items-center gap-3">
                        <ShoppingCart className="w-8 h-8 text-spark-lime" />
                        Checkout
                    </DialogTitle>
                    <DialogDescription className="font-lexend text-muted-foreground text-sm">
                        Please provide your delivery details to complete the pre-order.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20" />
                            <Input
                                placeholder="John Doe"
                                className="pl-10 rounded-2xl border-foreground/5 bg-surface focus-visible:ring-spark-lime h-12 font-lexend"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20" />
                                <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="pl-10 rounded-2xl border-foreground/5 bg-surface focus-visible:ring-spark-lime h-12 font-lexend"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20" />
                                <Input
                                    type="tel"
                                    placeholder="+91 99999 99999"
                                    className="pl-10 rounded-2xl border-foreground/5 bg-surface focus-visible:ring-spark-lime h-12 font-lexend"
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">Full Delivery Address</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-4 w-4 h-4 text-foreground/20" />
                            <Textarea
                                placeholder="House No, Street, Landmark, City, State, Pincode"
                                className="pl-10 pt-4 rounded-2xl border-foreground/5 bg-surface focus-visible:ring-spark-lime min-h-[100px] font-lexend"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full bg-spark-lime text-black hover:bg-white rounded-full py-7 font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-[1.02] mt-4">
                        Proceed to Payment – ₹999
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
