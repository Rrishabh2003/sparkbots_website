"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/lib/products";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ShoppingCart, ShieldCheck, Zap, Clock, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="pt-40 text-center">
                <h1 className="text-4xl font-bold">Product Not Found</h1>
                <Button onClick={() => router.push("/shop")} className="mt-8">Back to Shop</Button>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                    <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-8 hover:bg-foreground/5 text-foreground/40 hover:text-foreground transition-colors gap-2 font-black uppercase tracking-widest text-[10px]"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Product Media */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="aspect-square relative rounded-[40px] overflow-hidden bg-surface border border-foreground/5 shadow-inner">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover p-8 md:p-12 hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute top-8 left-8 bg-background/90 backdrop-blur-md text-foreground font-black text-[10px] uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                                {product.age}
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square rounded-2xl bg-surface border border-foreground/5 cursor-pointer hover:border-spark-lime/30 transition-all overflow-hidden relative">
                                    <Image src={product.image} alt="Thumbnail" fill className="object-cover opacity-50 hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <div className="mb-8">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime mb-4 px-4 py-1 bg-black rounded-full inline-block">
                                SparkBots Original
                            </div>
                            <h1 className="text-[48px] md:text-[80px] font-black font-outfit text-foreground uppercase mb-4 tracking-[-0.04em] leading-[0.9]">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-6 mb-6">
                                <span className="text-3xl font-black text-spark-lime font-lexend">{product.price}</span>
                                <div className="bg-green-50 text-green-600 font-black text-[10px] uppercase tracking-[0.2em] px-4 py-1 rounded-full">In Stock</div>
                            </div>
                            <p className="text-muted-foreground font-lexend text-lg leading-snug tracking-tight">
                                {product.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="p-4 rounded-2xl bg-surface border border-foreground/5 flex items-center gap-3">
                                <Clock className="w-6 h-6 text-spark-lime" />
                                <div>
                                    <span className="block font-black text-foreground leading-none">30 Mins</span>
                                    <span className="text-[10px] text-foreground/30 font-black uppercase tracking-[0.2em]">Build Time</span>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-surface border border-foreground/5 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-spark-lime" />
                                <div>
                                    <span className="block font-black text-foreground leading-none">Easy</span>
                                    <span className="text-[10px] text-foreground/30 font-black uppercase tracking-[0.2em]">Skill Level</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mb-12">
                            <Button size="lg" className="rounded-full py-8 text-sm font-black uppercase tracking-widest shadow-2xl bg-black text-spark-lime hover:bg-slate-900 hover:scale-[1.02] transition-all gap-3">
                                <ShoppingCart className="w-6 h-6" />
                                Add to Cart
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full py-8 text-sm font-black uppercase tracking-widest border-2 border-foreground/5 hover:bg-foreground/5 transition-all">
                                Buy for School
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 border-t border-foreground/5 flex items-center gap-8 text-foreground/30">
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                                <ShieldCheck className="w-4 h-4 text-spark-lime" /> BIS Certified
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                                <Package className="w-4 h-4 text-spark-lime" /> Ships in 2 Days
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Tabs */}
                <div className="mt-20">
                    <Tabs defaultValue="inside" className="w-full">
                        <TabsList className="bg-transparent border-b border-foreground/5 w-full justify-start rounded-none h-auto p-0 mb-12">
                            {["What's Inside", "How to Build", "Reviews"].map((tab) => (
                                <TabsTrigger
                                    key={tab}
                                    value={tab.toLowerCase().replace("'", "").split(" ")[tab.split(" ").length - 1]}
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-spark-lime data-[state=active]:bg-transparent data-[state=active]:text-foreground px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em] transition-all"
                                >
                                    {tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <TabsContent value="inside" className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="relative aspect-video rounded-[40px] bg-surface overflow-hidden shadow-inner border border-foreground/5 flex items-center justify-center text-foreground/10">
                                    <Package className="w-20 h-20" />
                                    {/* Mock open-box photo placeholder */}
                                </div>
                                <ul className="space-y-6">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-spark-lime/10 flex items-center justify-center text-spark-lime mt-1">
                                                <div className="w-2 h-2 rounded-full bg-spark-lime" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-foreground uppercase tracking-tight">{feature}</h4>
                                                <p className="text-sm text-muted-foreground font-lexend tracking-tight">Premium quality components guaranteed.</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
