interface FadeUpContainerProps {
  children: React.ReactNode;
}

import React, { type FC, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap, useGSAP, ensureGsap } from "@/lib/gsap";

ensureGsap();

export const FadeUpContainer: FC<FadeUpContainerProps> = ({ children }) => {
  const el = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useGSAP(
    () => {
      if (!el.current) return;
      if (inView) {
        gsap.fromTo(
          el.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        );
      }
    },
    { dependencies: [inView], scope: el },
  );

  return (
    <section
      ref={(node) => {
        el.current = node as HTMLDivElement;
        ref(node);
      }}
    >
      {children}
    </section>
  );
};
