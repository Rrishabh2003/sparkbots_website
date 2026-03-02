"use client";

import React from "react";

const sections = [
    {
        title: "Information We Collect",
        content: "We collect information you provide directly, such as your name, email address, shipping address, and payment details when you make a purchase. We also collect device and usage data automatically through cookies and similar technologies, including your IP address, browser type, and pages visited."
    },
    {
        title: "How We Use Your Information",
        content: "We use your information to process orders, deliver products, provide customer support, send marketing communications (with your consent), improve our products and website, and comply with legal obligations. We never sell your personal information to third parties."
    },
    {
        title: "Data Sharing & Disclosure",
        content: "We share your information only with trusted service providers who help us operate our business—such as payment processors, shipping partners, and analytics services. We may also disclose data when required by law or to protect the rights and safety of SparkBots and our users."
    },
    {
        title: "Data Security",
        content: "We implement industry-standard security measures including SSL encryption, secure payment gateways (PCI-DSS compliant), and regular security audits. All sensitive data is encrypted both in transit and at rest."
    },
    {
        title: "Children's Privacy",
        content: "SparkBots products are designed for children, but our website and purchases are intended for parents and guardians. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us immediately."
    },
    {
        title: "Cookies & Tracking",
        content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through our Cookie Settings or your browser settings. See our Cookies Policy for more details."
    },
    {
        title: "Your Rights",
        content: "You have the right to access, correct, delete, or export your personal data at any time. You can also opt out of marketing communications by clicking the unsubscribe link in any email or contacting our support team. We respond to all data requests within 30 days."
    },
    {
        title: "Data Retention",
        content: "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Order data is retained for 7 years for tax and accounting purposes."
    },
    {
        title: "Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the effective date. We encourage you to review this policy periodically."
    },
    {
        title: "Contact Us",
        content: "If you have questions about this Privacy Policy or our data practices, please contact us at privacy@sparkbots.in or write to SparkBots India B.V., 42 Innovation Drive, Koramangala, Bangalore, Karnataka 560034, India."
    }
];

export default function PrivacyPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Legal
                    </div>
                    <h1 className="text-[48px] md:text-[80px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        Privacy <span className="text-spark-lime">Policy</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-lg leading-snug tracking-tight">
                        Last updated: March 1, 2026. Your privacy matters to us. This policy explains how SparkBots India B.V. collects, uses, and protects your personal information.
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
