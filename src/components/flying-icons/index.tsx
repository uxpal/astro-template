"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Apple, Carrot, Fish, Soup, Coffee } from "lucide-react";
const icons = [Apple, Carrot, Fish, Soup, Coffee];

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
