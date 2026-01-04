"use client";

import * as React from "react";

type AnimationDirection = "fade-in" | "fade-up" | "fade-down" | "fade-left" | "fade-right";

function useFadeIn() {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
}

export function FadeInSection({
  children,
  className = "",
  delay = 0,
  direction = "fade-in",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
}) {
  const { ref, isVisible } = useFadeIn();

  const getTransformClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case "fade-up":
          return "translate-y-10";
        case "fade-down":
          return "-translate-y-10";
        case "fade-left":
          return "translate-x-10";
        case "fade-right":
          return "-translate-x-10";
        default:
          return "";
      }
    }
    return "";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getTransformClasses()}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

