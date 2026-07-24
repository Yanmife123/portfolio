"use client";

import React, { useEffect, useRef } from "react";

interface Pulse {
  x: number;
  y: number;
  axis: "x" | "y";
  direction: 1 | -1;
  speed: number;
  length: number;
  opacity: number;
}

interface GlowingNode {
  col: number;
  row: number;
  opacity: number;
  phase: number;
  speed: number;
}

export const GeometricMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Your exact portfolio colors
    const colors = {
      bg: "#161A1D", // Dark background
      primary: "#00A19B", // Glowing nodes (Teal)
      accent: "#5FC7C2", // Moving data pulses (Lighter Teal)
      gridLine: "rgba(228, 221, 211, 0.04)", // Very faint secondary color for the grid structure
    };

    let animationFrameId: number;
    const gridSize = 60; // Size of each grid square
    let cols = 0;
    let rows = 0;

    let pulses: Pulse[] = [];
    let nodes: GlowingNode[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / gridSize);
      rows = Math.ceil(canvas.height / gridSize);
      initMatrix();
    };

    const initMatrix = () => {
      pulses = [];
      nodes = [];

      // Generate random pulsing structural nodes
      const numNodes = Math.floor(cols * rows * 0.05); // 5% of intersections glow
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          col: Math.floor(Math.random() * cols),
          row: Math.floor(Math.random() * rows),
          opacity: Math.random() * 0.5 + 0.1,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const spawnPulse = () => {
      // Don't overwhelm the screen with pulses
      if (pulses.length > 15) return;

      const axis = Math.random() > 0.5 ? "x" : "y";
      const direction = Math.random() > 0.5 ? 1 : -1;

      pulses.push({
        x:
          axis === "x"
            ? direction === 1
              ? 0
              : canvas.width
            : Math.floor(Math.random() * cols) * gridSize,
        y:
          axis === "y"
            ? direction === 1
              ? 0
              : canvas.height
            : Math.floor(Math.random() * rows) * gridSize,
        axis,
        direction,
        speed: Math.random() * 2 + 2,
        length: Math.random() * 100 + 50,
        opacity: 1,
      });
    };

    const drawMatrix = () => {
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Draw the static grid
      ctx.beginPath();
      ctx.strokeStyle = colors.gridLine;
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // 2. Draw the pulsing structural nodes
      nodes.forEach((node) => {
        node.phase += node.speed;
        const currentOpacity =
          (Math.sin(node.phase) * 0.5 + 0.5) * node.opacity; // Oscillates between 0 and max opacity

        const x = node.col * gridSize;
        const y = node.row * gridSize;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 161, 155, ${currentOpacity})`; // Uses primary color
        ctx.fill();

        // Add a subtle crosshair/bracket feel around the node
        ctx.strokeStyle = `rgba(0, 161, 155, ${currentOpacity * 0.5})`;
        ctx.strokeRect(x - 6, y - 6, 12, 12);
      });

      // 3. Update and draw the data pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];

        if (p.axis === "x") p.x += p.speed * p.direction;
        else p.y += p.speed * p.direction;

        // Draw the pulse line with a glowing gradient
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineWidth = 2;

        // Creating a fading tail effect
        const gradient = ctx.createLinearGradient(
          p.x,
          p.y,
          p.axis === "x" ? p.x - p.length * p.direction : p.x,
          p.axis === "y" ? p.y - p.length * p.direction : p.y,
        );

        gradient.addColorStop(0, `rgba(95, 199, 194, ${p.opacity})`); // Accent color head
        gradient.addColorStop(1, `rgba(95, 199, 194, 0)`); // Fades out

        ctx.strokeStyle = gradient;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(
          p.axis === "x" ? p.x - p.length * p.direction : p.x,
          p.axis === "y" ? p.y - p.length * p.direction : p.y,
        );
        ctx.stroke();

        // Remove pulses that travel off-screen
        if (
          p.x < -p.length ||
          p.x > canvas.width + p.length ||
          p.y < -p.length ||
          p.y > canvas.height + p.length
        ) {
          pulses.splice(i, 1);
        }
      }

      // Randomly spawn new data pulses
      if (Math.random() < 0.03) spawnPulse();

      animationFrameId = requestAnimationFrame(drawMatrix);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawMatrix();

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
