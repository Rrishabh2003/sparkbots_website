"use client";

import React from "react";
import { Truck, Clock, Globe, Package, ShieldCheck, MapPin } from "lucide-react";

const shippingZones = [
    {
        zone: "Metro Cities",
        cities: "Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad",
        timeline: "3-5 Business Days",
        cost: "Free above ₹1,999"
    },
    {
        zone: "Tier 2 Cities",
        cities: "Jaipur, Lucknow, Chandigarh, Indore, Bhopal, Kochi, Coimbatore & more",
        timeline: "5-7 Business Days",
        cost: "Free above ₹1,999"
    },
    {
        zone: "Rest of India",
        cities: "All other serviceable pin codes across India",
        timeline: "7-10 Business Days",
        cost: "Free above ₹1,999"
    },
    {
        zone: "International",
        cities: "US, UK, UAE, Singapore, Australia, Canada, Germany, France & 10+ more",
        timeline: "10-15 Business Days",
        cost: "Calculated at checkout"
    }
];

const features = [
    { icon: Truck, title: "Free Shipping", desc: "On all domestic orders above ₹1,999. Flat ₹99 for smaller orders." },
    { icon: Clock, title: "Same-Day Dispatch", desc: "Orders placed before 2 PM IST are dispatched the same business day." },
    { icon: Package, title: "Tamper-Proof Packaging", desc: "Every kit is sealed in premium, tamper-proof packaging with cushioned inserts." },
    { icon: ShieldCheck, title: "Insured Shipments", desc: "All shipments are insured. Damaged or lost packages are replaced at no cost." },
    { icon: MapPin, title: "Real-Time Tracking", desc: "Track your order via email, SMS, and WhatsApp from dispatch to delivery." },
    { icon: Globe, title: "Global Delivery", desc: "We ship to 15+ countries. Customs duties are the buyer's responsibility." }
];

export default function ShippingPage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Delivery Info
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        Fast & <span className="text-spark-lime">Free</span> Shipping
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl leading-snug tracking-tight">
                        From our warehouse to your doorstep—tracked, insured, and lightning fast. Free shipping on domestic orders above ₹1,999.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, i) => (
                        <div key={i} className="p-8 bg-surface rounded-[40px] border border-foreground/5 group">
                            <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-spark-lime mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-black font-outfit text-foreground uppercase tracking-tight mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground font-lexend text-sm leading-snug tracking-tight">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Shipping Zones */}
                <div className="mb-20">
                    <h2 className="text-[32px] md:text-[48px] font-black font-outfit text-foreground uppercase tracking-[-0.04em] leading-[0.9] mb-12 text-center">
                        Shipping <span className="text-spark-lime">Zones</span>
                    </h2>
                    <div className="space-y-4">
                        {shippingZones.map((zone, i) => (
                            <div key={i} className="p-8 bg-surface rounded-[40px] border border-foreground/5 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                                <div>
                                    <h3 className="text-xl font-black font-outfit text-foreground uppercase tracking-tight">{zone.zone}</h3>
                                </div>
                                <div className="md:col-span-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 block mb-1">Coverage</span>
                                    <p className="text-muted-foreground font-lexend text-sm leading-snug tracking-tight">{zone.cities}</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 block mb-1">Timeline</span>
                                    <p className="text-foreground font-black font-outfit">{zone.timeline}</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 block mb-1">Cost</span>
                                    <p className="text-spark-lime font-black font-outfit">{zone.cost}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Process */}
                <div className="bg-black rounded-[40px] p-12 text-white">
                    <h2 className="text-2xl font-black font-outfit uppercase tracking-tight mb-8 text-center">
                        From Click to <span className="text-spark-lime">Doorstep</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Order Placed", desc: "Instant order confirmation via email and SMS." },
                            { step: "02", title: "Packed & Shipped", desc: "Same-day dispatch for orders before 2 PM IST." },
                            { step: "03", title: "In Transit", desc: "Real-time tracking updates via email, SMS & WhatsApp." },
                            { step: "04", title: "Delivered", desc: "Tamper-proof package arrives at your doorstep." }
                        ].map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="text-spark-lime font-black text-[48px] font-outfit mb-4">{step.step}</div>
                                <h4 className="font-black uppercase tracking-tight mb-2">{step.title}</h4>
                                <p className="text-white/40 font-lexend text-sm leading-snug tracking-tight">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
