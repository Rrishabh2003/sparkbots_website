"use client";

import React from "react";

const sections = [
    {
        title: "Acceptance of Terms",
        content: "By accessing or using the SparkBots website, purchasing our products, or using our software, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and customers."
    },
    {
        title: "Products & Orders",
        content: "All products are subject to availability. We reserve the right to limit quantities or discontinue any product without notice. Prices are listed in Indian Rupees (INR) and include applicable GST. Orders are confirmed only after successful payment processing. We may cancel orders if fraud or unauthorized activity is detected."
    },
    {
        title: "Payment",
        content: "We accept payments via UPI, credit/debit cards, net banking, and select wallets through our secure payment gateway. All transactions are encrypted with 256-bit SSL. Payment must be received in full before order shipment. EMI options are available on select cards for orders above ₹5,000."
    },
    {
        title: "Shipping & Delivery",
        content: "We ship across India and to select international destinations. Standard shipping is free for domestic orders above ₹1,999. Estimated delivery times are 3-5 business days for metros and 5-8 business days for other locations. International shipping timelines vary by destination. See our Shipping Policy for complete details."
    },
    {
        title: "Returns & Refunds",
        content: "We offer a 30-day return policy for unused and unopened products in original packaging. Opened kits may be returned within 14 days if all components are intact. Refunds are processed within 7-10 business days to the original payment method. Return shipping costs are borne by the customer unless the product is defective."
    },
    {
        title: "Warranty",
        content: "All SparkBots hardware products come with a 12-month warranty from the date of purchase. The warranty covers manufacturing defects in materials and workmanship. It does not cover damage from misuse, accidents, unauthorized modifications, or normal wear. Warranty claims require proof of purchase."
    },
    {
        title: "Intellectual Property",
        content: "All content on the SparkBots website—including text, graphics, logos, images, software, and educational materials—is the property of SparkBots India B.V. and is protected by intellectual property laws. See our Licensing page for detailed usage rights and restrictions."
    },
    {
        title: "User Accounts",
        content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 18 years old to create an account. Parents/guardians are responsible for minors' use of the platform. We reserve the right to suspend or terminate accounts that violate these terms."
    },
    {
        title: "Limitation of Liability",
        content: "SparkBots India B.V. shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the purchase price of the product in question. This limitation applies to the fullest extent permitted by applicable law."
    },
    {
        title: "Governing Law",
        content: "These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka. We encourage customers to reach out to our support team before pursuing legal action."
    }
];

export default function TermsPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Legal
                    </div>
                    <h1 className="text-[48px] md:text-[80px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        Terms & <span className="text-spark-lime">Conditions</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-lg leading-snug tracking-tight">
                        Last updated: March 1, 2026. Please read these terms carefully before using SparkBots products and services.
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
