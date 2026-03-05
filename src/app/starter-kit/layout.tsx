import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Spark Starter Kit – 5-in-1 Robotics for Kids Ages 5–9 | Pre-order Now",
    description: "Launch offer: ₹999 Spark Starter Kit with 5 easy projects (traffic light, night lamp, rain alarm & more). Safe, no-soldering, Hindi/English guide. Pre-order today!",
    openGraph: {
        title: "Spark Starter Kit – 5 Fun Projects in 1 Box!",
        description: "The perfect introduction to robotics for kids. Pre-order now for ₹999!",
        images: ["/img/starter-kit-hero.png"],
        url: "https://sparkbots.in/starter-kit",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Spark Starter Kit – Build. Play. Spark the Future.",
        description: "5 fun robotics projects in 1 box for little hands.",
        images: ["/img/starter-kit-hero.png"],
    },
};

export default function StarterKitLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
            />
            {children}
        </>
    );
}
