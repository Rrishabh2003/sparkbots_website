"use server";

import { PaymentData } from "@/hooks/useRazorpay";

export async function syncOrderToSheets(paymentId: string, data: PaymentData) {
    const sheetUrl = process.env.GOOGLE_SHEETS_URL;

    if (!sheetUrl) {
        console.error("GOOGLE_SHEETS_URL is not defined in environment variables");
        return { success: false, error: "Configuration error" };
    }

    try {
        // We use fetch on the server. The URL is now private.
        const response = await fetch(sheetUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                paymentId,
                ...data,
                product: "Spark Starter Kit",
                amount: "₹999"
            }),
        });

        // Google Apps Script usually returns 200 even if it's no-cors or redirect
        return { success: true };
    } catch (err) {
        console.error("Server-side sync failed:", err);
        return { success: false, error: "Sync failed" };
    }
}
