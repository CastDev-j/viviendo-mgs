/**
 * Image Optimization Utilities
 * Helper functions for lazy loading and performance
 */

/**
 * Generates srcset for responsive images
 * @param src - Image source path
 * @param widths - Array of widths to generate
 * @returns srcset string
 */
export function generateSrcSet(src: string, widths: number[]): string {
  return widths
    .map((width) => {
      const params = new URLSearchParams({
        w: width.toString(),
        q: "80",
        fm: "webp",
      });
      return `${src}?${params.toString()} ${width}w`;
    })
    .join(", ");
}

/**
 * Calculates aspect ratio for images
 * @param width - Image width
 * @param height - Image height
 * @returns aspect ratio as percentage
 */
export function calculateAspectRatio(width: number, height: number): string {
  return `${(height / width) * 100}%`;
}

/**
 * Intersection Observer for lazy loading
 * @param callback - Function to call when element is visible
 * @param options - Intersection Observer options
 */
export function createLazyLoader(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "50px",
    threshold: 0.01,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
}

/**
 * Preload critical images
 * @param src - Image source
 * @param type - Image type (avif, webp, jpeg)
 */
export function preloadImage(src: string, type: string = "image/webp"): void {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  link.type = type;
  document.head.appendChild(link);
}

/**
 * Get optimal image format based on browser support
 */
export function getSupportedImageFormat(): "avif" | "webp" | "jpeg" {
  if (typeof window === "undefined") return "jpeg";

  const canvas = document.createElement("canvas");
  if (canvas.toDataURL("image/avif").indexOf("data:image/avif") === 0) {
    return "avif";
  }
  if (canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0) {
    return "webp";
  }
  return "jpeg";
}

/**
 * Batch process images for lazy loading
 * @param selector - CSS selector for images
 */
export function initLazyImages(selector: string = '[loading="lazy"]'): void {
  if ("loading" in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    return;
  }

  // Fallback for browsers that don't support native lazy loading
  const images = document.querySelectorAll<HTMLImageElement>(selector);

  const imageObserver = createLazyLoader((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

/**
 * Optimize background images
 * @param element - Element with background image
 * @param imageSrc - Image source
 */
export function setOptimizedBackground(
  element: HTMLElement,
  imageSrc: string
): void {
  const img = new Image();
  img.onload = () => {
    element.style.backgroundImage = `url(${imageSrc})`;
    element.classList.add("loaded");
  };
  img.src = imageSrc;
}

/**
 * Generate image placeholder (blur effect)
 * @param width - Image width
 * @param height - Image height
 * @returns base64 placeholder
 */
export function generatePlaceholder(width: number, height: number): string {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Create gradient as placeholder
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#f0f0f0");
    gradient.addColorStop(1, "#e0e0e0");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  return canvas.toDataURL();
}
