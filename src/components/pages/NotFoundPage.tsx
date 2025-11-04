import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const NotFoundPage = () => {
  const numberRef = useRef<HTMLHeadingElement>(null!);
  const textRef = useRef<HTMLDivElement>(null!);
  const buttonRef = useRef<HTMLAnchorElement>(null!);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(numberRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        textRef.current.children,
        {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <div className="min-h-[60vh] bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1
          ref={numberRef}
          className="text-6xl md:text-[10rem] font-bold text-primary mb-6"
        >
          404
        </h1>

        <div ref={textRef} className="space-y-3 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Página no encontrada
          </h2>
          <p className="text-base md:text-lg text-gray-500">
            Lo sentimos, la página que buscas no existe.
          </p>
        </div>

        <a
          ref={buttonRef}
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};
