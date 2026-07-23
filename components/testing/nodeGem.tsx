"use client";

import React, { useEffect, useRef } from "react";

interface StreamLine {
  yBase: number;
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  opacity: number;
  width: number;
}

interface Packet {
  lineIndex: number;
  progress: number;
  speed: number;
  length: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export const DataStream: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Portfolio color palette
    const colors = {
      bg: "#161A1D",
      primary: "#00A19B",
      accent: "#5FC7C2",
      particle: "#E4DDD3",
    };

    let animationFrameId: number;
    let lines: StreamLine[] = [];
    let packets: Packet[] = [];
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      lines = [];
      packets = [];
      particles = [];

      // Create flowing stream curves across the height
      const numLines = Math.floor(canvas.height / 75);
      for (let i = 0; i < numLines; i++) {
        lines.push({
          yBase:
            (canvas.height / (numLines + 1)) * (i + 1) +
            (Math.random() * 40 - 20),
          amplitude: Math.random() * 35 + 15,
          frequency: Math.random() * 0.002 + 0.001,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.008 + 0.003,
          opacity: Math.random() * 0.2 + 0.08,
          width: Math.random() * 1.5 + 0.5,
        });
      }

      // Generate data packets travelling along lines
      for (let i = 0; i < lines.length * 2; i++) {
        packets.push({
          lineIndex: Math.floor(Math.random() * lines.length),
          progress: Math.random(),
          speed: Math.random() * 0.003 + 0.002,
          length: Math.random() * 0.12 + 0.05,
        });
      }

      // Ambient floating particles
      const numParticles = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.2 + 0.4,
          opacity: Math.random() * 0.35 + 0.1,
        });
      }
    };

    // Calculate Y coordinates along mathematical sine waves
    const getYForLine = (line: StreamLine, x: number): number => {
      return (
        line.yBase + Math.sin(x * line.frequency + line.phase) * line.amplitude
      );
    };

    const draw = () => {
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Draw ambient floating particles (#E4DDD3)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 221, 211, ${p.opacity})`;
        ctx.fill();
      });

      // 2. Draw organic stream paths (#00A19B)
      lines.forEach((line) => {
        line.phase += line.speed;

        ctx.beginPath();
        ctx.lineWidth = line.width;
        ctx.strokeStyle = `rgba(0, 161, 155, ${line.opacity})`;

        const step = 12;
        for (let x = 0; x <= canvas.width + step; x += step) {
          const y = getYForLine(line, x);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // 3. Draw fast-moving data packet glows (#5FC7C2)
      packets.forEach((p) => {
        const line = lines[p.lineIndex];
        if (!line) return;

        p.progress += p.speed;
        if (p.progress > 1.2) {
          p.progress = -0.2;
          p.lineIndex = Math.floor(Math.random() * lines.length);
        }

        const startX = p.progress * canvas.width;
        const endX = (p.progress - p.length) * canvas.width;

        const step = 6;
        ctx.beginPath();
        ctx.lineWidth = line.width + 1.2;

        let firstPoint = true;
        for (
          let x = Math.max(0, endX);
          x <= Math.min(canvas.width, startX);
          x += step
        ) {
          const y = getYForLine(line, x);
          if (firstPoint) {
            ctx.moveTo(x, y);
            firstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        const gradient = ctx.createLinearGradient(endX, 0, startX, 0);
        gradient.addColorStop(0, "rgba(95, 199, 194, 0)");
        gradient.addColorStop(1, "rgba(95, 199, 194, 0.85)");

        ctx.strokeStyle = gradient;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};
