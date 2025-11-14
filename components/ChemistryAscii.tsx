'use client'

import React, { useEffect, useState } from "react";

const molecules = [
  // Small molecules
  `H ─ O ─ H`,
  `O ═ C ═ O`,
  `H ─ C ≡ C ─ H`,
  
  // Methane
  `    H
    │
H ─ C ─ H
    │
    H`,
  
  // Ammonia
  `    H
    │
H ─ N ─ H`,
  
  // Formaldehyde
  `    O
    ║
H ─ C ─ H`,
  
  // Methanol
  `    H
    │
H ─ C ─ O ─ H
    │
    H`,
  
  // Ethane
  `    H   H
    │   │
H ─ C ─ C ─ H
    │   │
    H   H`,
  
  // Ethanol
  `    H   H
    │   │
H ─ C ─ C ─ O ─ H
    │   │
    H   H`,
  
  // Ethene
  `H       H
 ╲     ╱
  C ═ C
 ╱     ╲
H       H`,
  
  // Acetic acid
  `    H       O
    │       ║
H ─ C ─ C ─ O ─ H
    │
    H`,
  
  // Acetone
  `    H       H
    │       │
H ─ C ─ C ─ C ─ H
    │   ║   │
    H   O   H`,
  
  // Propane
  `    H   H   H
    │   │   │
H ─ C ─ C ─ C ─ H
    │   │   │
    H   H   H`,
  
  // Propanol
  `    H   H   H
    │   │   │
H ─ C ─ C ─ C ─ O ─ H
    │   │   │
    H   H   H`,
  
  // Butane
  `    H   H   H   H
    │   │   │   │
H ─ C ─ C ─ C ─ C ─ H
    │   │   │   │
    H   H   H   H`,
  
  // Pentane
  `    H   H   H   H   H
    │   │   │   │   │
H ─ C ─ C ─ C ─ C ─ C ─ H
    │   │   │   │   │
    H   H   H   H   H`,
  
  // Hexane
  `    H   H   H   H   H   H
    │   │   │   │   │   │
H ─ C ─ C ─ C ─ C ─ C ─ C ─ H
    │   │   │   │   │   │
    H   H   H   H   H   H`,
  
  // Dimethyl ether
  `    H       H
    │       │
H ─ C ─ O ─ C ─ H
    │       │
    H       H`,
  
  // Glycerol
  `    H   H   H
    │   │   │
H ─ C ─ C ─ C ─ H
    │   │   │
    O   O   O
    │   │   │
    H   H   H`,
  
  // Ethylene glycol
  `    H   H
    │   │
H ─ C ─ C ─ H
    │   │
    O   O
    │   │
    H   H`,
  
  // Propionic acid
  `    H   H       O
    │   │       ║
H ─ C ─ C ─ C ─ O ─ H
    │   │
    H   H`,
  
  // Butanoic acid
  `    H   H   H       O
    │   │   │       ║
H ─ C ─ C ─ C ─ C ─ O ─ H
    │   │   │
    H   H   H`,
];

const OrganicAsciiMoleculeGrid = () => {
  const [positions, setPositions] = useState(
    molecules.map((_, i) => ({
      x: Math.random() * 800,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))
  );

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setPositions((prev) =>
        prev.map((pos, i) => {
          let { x, y, vx, vy } = pos;
          
          // Update position (slower)
          x += vx;
          y += vy;
          
          // Bounce off walls
          if (x < 0 || x > 850) vx *= -1;
          if (y < 0 || y > 100) vy *= -1;
          
          // Keep in bounds
          x = Math.max(0, Math.min(850, x));
          y = Math.max(0, Math.min(100, y));
          
          return { x, y, vx, vy };
        })
      );
      
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      style={{
        height: "140px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        background: "transparent",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginBottom: "40px",
      }}
    >
      {molecules.map((mol, i) => (
        <pre
          key={i}
          style={{
            position: "absolute",
            left: `${positions[i].x}px`,
            top: `${positions[i].y}px`,
            margin: 0,
            padding: 0,
            whiteSpace: "pre",
            fontFamily: "monospace",
            color: "#777",
            fontSize: "10px",
            lineHeight: 1.2,
            transition: "none",
            pointerEvents: "none",
            background: "none",
            border: "none",
          }}
        >
          {mol}
        </pre>
      ))}
    </div>
  );
};

export default OrganicAsciiMoleculeGrid;
