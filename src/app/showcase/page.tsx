"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Smart Traffic Light",
        creator: "Arjun S., Age 9",
        location: "Bangalore",
        kit: "Explorer Kit",
        description: "Built a working traffic light system with timed LED sequences and a pedestrian crossing button using infrared sensors.",
        color: "bg-red-50"
    },
    {
        title: "Line-Following Robot",
        creator: "Priya M., Age 11",
        location: "Mumbai",
        kit: "Creator Kit",
        description: "Programmed a robot to follow black lines on white paper using IR sensors and Python. Competed in a school robotics fair.",
        color: "bg-blue-50"
    },
    {
        title: "Solar-Powered Fan",
        creator: "Rohan K., Age 7",
        location: "Delhi",
        kit: "Starter Kit",
        description: "Combined SparkBots motor components with a small solar panel to create an eco-friendly desk fan. Zero coding required!",
        color: "bg-green-50"
    },
    {
        title: "AI Face Tracker",
        creator: "Ananya R., Age 12",
        location: "Chennai",
        kit: "Creator Kit",
        description: "Used the AI Vision Module to build a camera that tracks and follows faces. Presented at the school science exhibition.",
        color: "bg-purple-50"
    },
    {
        title: "Obstacle-Avoiding Car",
        creator: "Dev P., Age 10",
        location: "Pune",
        kit: "Explorer Kit",
        description: "Built a car that detects and avoids obstacles using ultrasonic sensors. Added custom LEGO body panels for style.",
        color: "bg-orange-50"
    },
    {
        title: "Automatic Plant Watering",
        creator: "Meera L., Age 8",
        location: "Hyderabad",
        kit: "Starter Kit",
        description: "Created a moisture-sensing system that automatically waters houseplants. Mom's favorite project ever!",
        color: "bg-teal-50"
    },
    {
        title: "Bluetooth RC Bot",
        creator: "Kabir J., Age 11",
        location: "Jaipur",
        kit: "Explorer Kit",
        description: "Built a Bluetooth-controlled robot operated via smartphone. Added a gripper arm to pick up small objects.",
        color: "bg-yellow-50"
    },
    {
        title: "Weather Station",
        creator: "Isha N., Age 12",
        location: "Kochi",
        kit: "Creator Kit",
        description: "Combined temperature, humidity, and light sensors to build a real-time weather monitoring dashboard with Python.",
        color: "bg-indigo-50"
    }
];

export default function ShowcasePage() {
    return (
        <div className="bg-background min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-6 px-4 py-1 border border-foreground/5 rounded-full inline-block">
                        Community
                    </div>
                    <h1 className="text-[60px] md:text-[100px] font-black font-outfit text-foreground uppercase mb-6 tracking-[-0.04em] leading-[0.9]">
                        Built by <span className="text-spark-lime">Kids</span>
                    </h1>
                    <p className="text-muted-foreground font-lexend text-xl leading-snug tracking-tight">
                        Real projects built by real kids with SparkBots kits. Get inspired and share your own creations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="p-8 bg-surface rounded-[40px] border border-foreground/5 hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer flex flex-col"
                        >
                            {/* Project visual placeholder */}
                            <div className={`aspect-square rounded-[24px] ${project.color} mb-6 flex items-center justify-center overflow-hidden`}>
                                <div className="text-[48px] font-black font-outfit text-black/5 uppercase leading-none text-center px-4">
                                    {project.title}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-spark-lime bg-black px-3 py-1 rounded-full">
                                    {project.kit}
                                </span>
                            </div>

                            <h3 className="text-xl font-black font-outfit text-foreground uppercase tracking-tight mb-2 group-hover:text-spark-lime transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground font-lexend text-sm leading-snug tracking-tight mb-4 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-foreground/5">
                                <div>
                                    <span className="text-foreground font-black text-sm block">{project.creator}</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">{project.location}</span>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-spark-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 bg-black rounded-[40px] p-12 text-center text-white">
                    <h2 className="text-[32px] md:text-[48px] font-black font-outfit uppercase tracking-[-0.04em] leading-[0.9] mb-4">
                        Share Your <span className="text-spark-lime">Build</span>
                    </h2>
                    <p className="text-white/40 font-lexend leading-snug tracking-tight mb-8 max-w-xl mx-auto">
                        Built something awesome with SparkBots? Tag us on Instagram @sparkbots.in or email your project to showcase@sparkbots.in and get featured!
                    </p>
                    <a href="mailto:showcase@sparkbots.in" className="inline-block bg-spark-lime text-foreground font-black uppercase tracking-widest text-[10px] px-10 py-4 rounded-full hover:bg-background transition-colors">
                        Submit Your Project
                    </a>
                </div>
            </div>
        </div>
    );
}
