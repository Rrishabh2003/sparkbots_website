"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    hue: number;
}

export function StarCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -100, y: -100 });
    const particlesRef = useRef<Particle[]>([]);
    const frameRef = useRef<number>(0);
    const lastSpawnRef = useRef(0);

    const drawStar = useCallback(
        (
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            size: number,
            rotation: number,
            opacity: number,
            hue?: number
        ) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.globalAlpha = opacity;

            const spikes = 4;
            const outerRadius = size;
            const innerRadius = size * 0.4;

            ctx.beginPath();
            for (let i = 0; i < spikes * 2; i++) {
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const angle = (i * Math.PI) / spikes - Math.PI / 2;
                const px = Math.cos(angle) * radius;
                const py = Math.sin(angle) * radius;
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();

            const h = hue ?? 80;
            const color = `hsl(${h}, 100%, 70%)`;
            const glowColor = `hsl(${h}, 100%, 60%)`;

            ctx.shadowColor = glowColor;
            ctx.shadowBlur = size * 3;
            ctx.fillStyle = color;
            ctx.fill();

            ctx.shadowBlur = 0;
            ctx.globalAlpha = opacity * 0.9;
            const coreSize = size * 0.35;
            ctx.beginPath();
            ctx.arc(0, 0, coreSize, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();

            ctx.restore();
        },
        []
    );

    const hueRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        const spawnParticle = () => {
            const { x, y } = mouseRef.current;
            if (x < 0 || y < 0) return;

            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 1.5 + 0.5;
            const life = Math.random() * 40 + 25;
            hueRef.current = (hueRef.current + 3) % 360;

            particlesRef.current.push({
                x: x + (Math.random() - 0.5) * 8,
                y: y + (Math.random() - 0.5) * 8,
                vx: Math.cos(angle) * speed * 0.3,
                vy: Math.sin(angle) * speed * 0.3 + 1.2,
                life,
                maxLife: life,
                size: Math.random() * 6 + 4,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.15,
                opacity: 1,
                hue: hueRef.current,
            });
        };

        const animate = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (time - lastSpawnRef.current > 30) {
                spawnParticle();
                if (Math.random() > 0.5) spawnParticle();
                lastSpawnRef.current = time;
            }

            particlesRef.current = particlesRef.current.filter((p) => {
                p.life--;
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.03;
                p.vx *= 0.99;
                p.rotation += p.rotationSpeed;
                p.opacity = Math.max(0, p.life / p.maxLife);
                p.size *= 0.995;

                if (p.life <= 0 || p.opacity <= 0) return false;

                drawStar(ctx, p.x, p.y, p.size, p.rotation, p.opacity, p.hue);
                return true;
            });

            const { x, y } = mouseRef.current;
            if (x > 0 && y > 0) {
                const mainHue = (time * 0.1) % 360;
                drawStar(ctx, x, y, 10, time * 0.002, 0.9, mainHue);
            }

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(frameRef.current);
        };
    }, [drawStar]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[9999] pointer-events-none"
            style={{ cursor: "none" }}
        />
    );
}
