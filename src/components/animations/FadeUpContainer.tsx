import React, { type FC, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap, useGSAP, ensureGsap } from "@/lib/gsap";

ensureGsap();

interface FadeUpContainerProps {
  children: React.ReactNode;
}

export const FadeUpContainer: FC<FadeUpContainerProps> = ({ children }) => {
  const el = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useGSAP(
    () => {
      if (!el.current) return;
      if (inView) {
        gsap.set(el.current, { opacity: 0, y: 24 });

        gsap.to(el.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [inView], scope: el }
  );

  return (
    <section
      ref={(node) => {
        el.current = node as HTMLDivElement;
        ref(node);
      }}
      style={{ opacity: 0, transform: "translateY(24px)" }}
    >
      {children}
    </section>
  );
};
