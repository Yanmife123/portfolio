"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatingSquaresProps {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  className?: string;
  zIndex?: number;
}

// Define the shape of our randomized data for each square
interface SquareData {
  color: string;
  offsetX: number;
  offsetY: number;
  duration: number;
  direction: number; // 1 for normal, -1 for reverse
  size: number;
  borderRadius: number;
  innerBorderRadius: number;
}

export const FloatingSquares: React.FC<FloatingSquaresProps> = ({
  top,
  right,
  bottom,
  left,
  className = "",
  zIndex = 10,
}) => {
  const [mounted, setMounted] = useState(false);
  const [squares, setSquares] = useState<SquareData[]>([]);

  // Shared styles for the dark inner square
  const innerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    background: "#161A1D",
  };

  useEffect(() => {
    // Colors based on your UI in image_96bdaa.png
    const palette = ["#00A19B", "#3A413F"];

    // Base sizes for the 3 squares: [Large, Medium, Small]
    // FIXED: Changed 'radius' to 'borderRadius' and 'innerRadius' to 'innerBorderRadius'
    const baseConfigs = [
      { size: 34, borderRadius: 6, innerBorderRadius: 5 },
      { size: 26, borderRadius: 5, innerBorderRadius: 4 },
      { size: 20, borderRadius: 4, innerBorderRadius: 3 },
    ];

    // Generate random properties for each square
    const generatedSquares: SquareData[] = baseConfigs.map((config) => ({
      ...config,
      // Randomly pick a color from the palette
      color: palette[Math.floor(Math.random() * palette.length)],
      // Random X and Y offsets between -30px and 30px to scatter them
      offsetX: Math.floor(Math.random() * 60) - 30,
      offsetY: Math.floor(Math.random() * 40) - 20,
      // Randomize animation duration between 6s and 11s
      duration: Math.floor(Math.random() * 6) + 6,
      // Randomly rotate clockwise or counter-clockwise
      direction: Math.random() > 0.5 ? 1 : -1,
    }));

    setSquares(generatedSquares);
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering the random elements until mounted
  if (!mounted) {
    return null; // Or return an empty wrapper with the same dimensions
  }

  return (
    <div
      style={{
        position: "absolute",
        top,
        right,
        bottom,
        left,
        zIndex,
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        // Center items so the random offsets push outward evenly
        alignItems: "center",
        justifyContent: "center",
      }}
      className={`${className} h-fit`}
    >
      {squares.map((sq, index) => {
        // Calculate the rotation range based on the randomized direction
        const startDeg = sq.direction === 1 ? 12 : -8;
        const endDeg = sq.direction === 1 ? 372 : -368;

        return (
          <motion.div
            key={index}
            style={{
              width: sq.size,
              height: sq.size,
              borderRadius: sq.borderRadius,
              padding: 1,
              // Apply the randomized X and Y offsets
              marginLeft: sq.offsetX,
              marginTop: sq.offsetY,
              background: `conic-gradient(from 0deg, ${sq.color}, transparent 45%, transparent 55%, ${sq.color})`,
            }}
            animate={{ rotate: [startDeg, endDeg] }}
            transition={{
              duration: sq.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              style={{ ...innerStyle, borderRadius: sq.innerBorderRadius }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
