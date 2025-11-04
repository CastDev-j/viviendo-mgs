import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let registered = false;

export const ensureGsap = () => {
  if (!registered) {
    try {
      gsap.registerPlugin(ScrollTrigger, useGSAP as any);
    } catch {
      // no-op in SSR
    }
    registered = true;
  }
  return gsap;
};

export { gsap, ScrollTrigger, useGSAP };
