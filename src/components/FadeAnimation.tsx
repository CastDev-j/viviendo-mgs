interface FadeAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

import React, { type FC, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap, useGSAP, ensureGsap } from "@/lib/gsap";

ensureGsap();

export const FadeAnimation: FC<FadeAnimationProps> = ({
  children,
  delay = 0,
}) => {
  const el = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
    delay,
  });

  useGSAP(
    () => {
      if (!el.current) return;
      if (inView) {
        gsap.fromTo(
          el.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: delay / 1000,
          },
        );
      }
    },
    { dependencies: [inView, delay], scope: el },
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
