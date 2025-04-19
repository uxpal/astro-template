"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Apple, Carrot, Fish, Soup, Coffee } from "lucide-react";

import primitives from "./prmitives.json";

const icons = [Apple, Carrot, Fish, Soup, Coffee];

// Function to convert RGB to HSL
function rgbToHsl(r, g, b) {
  r = r / 1; // Normalize RGB values to [0, 1]
  g = g / 1;
  b = b / 1;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h = h / 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function FlyingIcon({
  Icon,
  delay,
}: {
  Icon: React.ElementType;
  delay: number;
}) {
  const controls = useAnimation();
  const startX = Math.random() * 150 - 50;
  const startY = Math.random() * 150 - 50;
  const endX = Math.random() * 150 - 50;
  const endY = Math.random() * 150 - 50;

  const functur = (prmitives) => {
    if (!primitives) return;
    return prmitives.map((prmitive) => {
      if (prmitive?.name?.includes("Colors")) {
        const colorData = json.resolvedValuesByMode["2:0"].resolvedValue;
        const r = colorData.r;
        const g = colorData.g;
        const b = colorData.b;

        return rgbToHsl(r, g, b);
      }
      return null;
    });
  };
  const b = 0.250980406999588;
  const g = 0.42352941632270813;
  const r = 1;

  console.log("values", rgbToHsl(r, g, b));

  useEffect(() => {
    controls.start({
      x: [`${endX}vw`, `${startX}vw`],
      y: [`${endY}vh`, `${startY}vh`],
      opacity: [0, 0.5, 0],
      transition: {
        duration: 8,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: Math.random() * 0.5,
      },
    });
  }, [controls, startX, startY, endX, endY, delay]);

  return (
    <motion.div className="absolute z-0" animate={controls}>
      <Icon className="lg:w-11 lg:h-11 text-primary" />
    </motion.div>
  );
}

export default function Component({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative md:min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {children}
      {isVisible && (
        <>
          {[...Array(20)].map((_, i) => (
            <FlyingIcon
              key={i}
              Icon={icons[i % icons.length]}
              delay={i * 0.1}
            />
          ))}
        </>
      )}
    </section>
  );
}
