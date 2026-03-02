"use client";

import React, { useState } from "react";
import { products, Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Filter, Search } from "lucide-react";

export default function ShopPage() {
    const [filter, setFilter] = useState<string>("All");

    const filteredProducts = filter === "All"
        ? products
        : products.filter(p => p.category === filter || p.age.includes(filter));

    const categories = ["All", "Starter", "Explorer", "Creator", "Subscription"];

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                            The Vault
                        </div>
                        <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-4 tracking-[-0.04em] leading-[0.9]">
                            The <span className="text-spark-lime">Toybox</span> of <br />the Future
                        </h1>
                        <p className="text-muted-foreground font-lexend text-lg max-w-xl leading-snug tracking-tight">
                            Every kit is a new adventure. Filter by age or kit level to find the perfect match for your young innovator.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                            <input
                                type="text"
                                placeholder="Search kits..."
                                className="pl-10 pr-4 py-2 rounded-full border border-foreground/10 bg-surface focus:outline-none focus:border-spark-lime text-sm w-full md:w-64 transition-all font-lexend text-foreground"
                            />
                        </div>
                        <Button variant="outline" className="rounded-full gap-2 border-foreground/10 font-black uppercase tracking-widest text-[10px]">
                            <Filter className="w-4 h-4" /> Filters
                        </Button>
                    </div>
                </div>

                {/* Filters Tabs */}
                <div className="mb-12 overflow-x-auto pb-2">
                    <Tabs defaultValue="All" onValueChange={setFilter} className="w-full">
                        <TabsList className="bg-surface p-1 rounded-full border border-foreground/5 h-auto flex flex-nowrap w-fit">
                            {categories.map((cat) => (
                                <TabsTrigger
                                    key={cat}
                                    value={cat}
                                    className="rounded-full px-8 py-2.5 data-[state=active]:bg-black data-[state=active]:text-spark-lime data-[state=active]:shadow-lg transition-all font-black text-[10px] uppercase tracking-[0.2em]"
                                >
                                    {cat}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <Link key={product.id} href={`/shop/${product.id}`} className="flex flex-col">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group flex flex-col bg-surface rounded-[40px] overflow-hidden border border-foreground/5 transition-all hover:shadow-2xl cursor-pointer h-full"
                                >
                                    <div className="aspect-square relative overflow-hidden bg-background">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-6 left-6 z-10 flex gap-2">
                                            <div className="bg-background/90 backdrop-blur-md text-foreground font-black rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em] shadow-sm">
                                                {product.age}
                                            </div>
                                            <div className="bg-black/80 backdrop-blur-md text-spark-lime font-black rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em] shadow-sm">
                                                {product.category}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-black font-outfit text-foreground uppercase tracking-tight group-hover:text-spark-lime transition-colors">
                                                {product.name}
                                            </h3>
                                            <span className="text-xl font-black text-spark-lime font-lexend">{product.price}</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-snug tracking-tight mb-8 flex-grow font-lexend">
                                            {product.description}
                                        </p>
                                        <Button className="w-full rounded-full py-6 font-black uppercase tracking-widest bg-black text-spark-lime hover:bg-slate-900 flex items-center justify-center gap-2 group/btn text-[10px]">
                                            <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                            Add to Cart
                                        </Button>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
