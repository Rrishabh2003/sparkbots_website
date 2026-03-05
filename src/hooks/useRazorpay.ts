"use client";

import { useCallback } from "react";
import { useToast } from "@/components/ui/toast";

export type PaymentData = {
    name: string;
    email: string;
    contact: string;
    address: string;
};

export const useRazorpay = () => {
    const { toast } = useToast();

    const handlePayment = useCallback(async (data: PaymentData) => {
        if (typeof window === "undefined" || !(window as any).Razorpay) {
            toast("Payment gateway is loading, please try again in a moment.", "error");
            return;
        }

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
            amount: 99900, // Amount in paise (₹999)
            currency: "INR",
            name: "Spark Starter Kit",
            description: "Pre-order for Spark Starter Kit",
            image: "/img/logo.png",
            handler: async function (response: any) {
                const paymentId = response.razorpay_payment_id;

                // 1. Google Sheets Sync (Secure Server Action)
                try {
                    const { syncOrderToSheets } = await import("@/app/actions/orders");
                    await syncOrderToSheets(paymentId, data);
                } catch (err) {
                    console.error("Failed to trigger sync action:", err);
                }

                // 2. Construct WhatsApp Message
                const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918619356345";
                const message = `*SparkBots Order Confirmation* 🚀\n\n` +
                    `*Payment ID:* ${paymentId}\n` +
                    `*Name:* ${data.name}\n` +
                    `*Contact:* ${data.contact}\n` +
                    `*Email:* ${data.email}\n` +
                    `*Address:* ${data.address}\n\n` +
                    `Thank you for pre-ordering the Spark Starter Kit!`;

                const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                // 3. Success Notification & Redirect
                toast("Payment Successful! Order details sending via WhatsApp...", "spark");

                setTimeout(() => {
                    window.open(waUrl, "_blank");
                }, 1500);
            },
            prefill: {
                name: data.name,
                email: data.email,
                contact: data.contact,
            },
            notes: {
                shipping_address: data.address,
            },
            theme: {
                color: "#BEF264", // spark-lime
            },
            modal: {
                ondismiss: function () {
                    toast("Payment cancelled. Try again to secure your kit!", "info");
                }
            }
        };

        const rzp1 = new (window as any).Razorpay(options);

        rzp1.on('payment.failed', function (response: any) {
            toast("Payment Failed: " + response.error.description, "error");
        });

        rzp1.open();
    }, [toast]);

    return { handlePayment };
};
