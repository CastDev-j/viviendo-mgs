import React, { type FC, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface TestContainerProps {
  children: React.ReactNode;
  type: "primary" | "secondary";
}

export const TestContainer: FC<TestContainerProps> = ({ children, type }) => {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!root.current) return;

      gsap.set(root.current, { opacity: 0 });

      gsap.to(root.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    },
    { dependencies: [type], scope: root }
  );

  return (
    <section
      ref={root}
      className="rounded-[50%_50%_50%_50%/0%_0%_9%_10%] bg-[url('/images/hero-bg.avif')] bg-cover bg-center flex items-center justify-center w-full h-full overflow-hidden"
      style={{
        opacity: 0,
        backgroundImage: "url('/images/hero-bg.avif')",
        contentVisibility: "auto",
        willChange: "opacity",
      }}
    >
      <section
        className={`py-12 rounded-[50%_50%_50%_50%/0%_0%_9%_10%] w-full h-full ${
          type === "primary" ? "bg-[#fdf3f4]/90" : "bg-[#f1f9fe]/90"
        }`}
      >
        {children}
      </section>
    </section>
  );
};
