export type Product = {
    id: string;
    name: string;
    classLevel: string;
    category: "Starter" | "Explorer" | "Creator" | "Subscription";
    price: string;
    image: string;
    description: string;
    features: string[];
};

export const products: Product[] = [
    {
        id: "starter-kit",
        name: "Spark Starter Kit",
        classLevel: "Class 1-3",
        category: "Starter",
        price: "₹999",
        image: "/img/0EJAb.jpg",
        description: "Built for beginners. Learn the basics of motors and switches.",
        features: ["5 Projects", "No Tools Required", "Bilingual Guide"]
    },
    {
        id: "explorer-kit",
        name: "Rover Explorer Kit",
        classLevel: "Class 4-6",
        category: "Explorer",
        price: "₹1,999",
        image: "/img/3EL5W.jpg",
        description: "Go beyond basics. Sensors, obstacle avoidance, and logic gates.",
        features: ["10 Projects", "Infrared Sensors", "Curriculum Linked"]
    },
    {
        id: "ai-vision-kit",
        name: "AI Vision Creator Kit",
        classLevel: "Class 7-10",
        category: "Creator",
        price: "₹2,999",
        image: "/img/49tr0.jpg",
        description: "Master level robotics. Includes programmable AI vision module.",
        features: ["15+ Projects", "Python/Block Coding", "App Control"]
    },
    {
        id: "monthly-spark-box",
        name: "Monthly Spark Box",
        classLevel: "Class 1-10",
        category: "Subscription",
        price: "₹1,099/mo",
        image: "/img/M8FHd.jpg",
        description: "A new robotic challenge delivered to your doorstep every month.",
        features: ["New Project Monthly", "Digital Masterclass", "Exclusive Parts"]
    }
];
