import { cn } from "@/lib/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaClock, FaFacebook } from "react-icons/fa";
import { IoIosClose, IoMdMail } from "react-icons/io";

const links: NavigationLink[] = [
  {
    name: "INICIO",
    url: "/",
  },
  {
    name: "¿QUIÉNES SOMOS?",
    url: "/about",
  },
  {
    name: "¿QUIERES CONTACTARNOS?",
    url: "/contact",
  },
];

export interface NavigationLink {
  name: string;
  url: string;
}

const Header: React.FC = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const scheduleRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActiveLink = (url: string) => {
    if (url === "/" && currentPath === "/") return true;
    if (url !== "/" && currentPath.startsWith(url)) return true;
    return false;
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    if (logoRef.current) {
      gsap.set(logoRef.current, { scale: 0, rotation: -180 });
      tl.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }

    if (navItemsRef.current.length > 0) {
      gsap.set(navItemsRef.current, { opacity: 0, y: -20 });
      tl.to(
        navItemsRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }
  }, []);

  useEffect(() => {
    if (scheduleRef.current) {
      if (showSchedule) {
        gsap.fromTo(
          scheduleRef.current,
          {
            height: 0,
            opacity: 0,
          },
          {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        );
      } else {
        gsap.to(scheduleRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [showSchedule]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          {
            height: 0,
            opacity: 0,
          },
          {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCloseSchedule = () => {
    if (scheduleRef.current) {
      gsap.to(scheduleRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setShowSchedule(false);
        },
      });
    }
  };

  return (
    <div className="w-full">
      {showSchedule && (
        <div
          ref={scheduleRef}
          className="flex absolute bg-[#fdf3f4] w-full justify-between items-center px-4 h-11 z-50 overflow-hidden"
        >
          <div className="flex sm:gap-6 gap-2">
            <div className="flex items-center gap-2 text-primary p-2">
              <FaClock className="cursor-pointer" />
              <span>Lun.-Dom. de 9:00 AM - 5:00 PM</span>
            </div>
          </div>
          <button
            onClick={handleCloseSchedule}
            className="text-primary hover:text-neutral-950 cursor-pointer transition-colors p-2"
            aria-label="Cerrar horario"
          >
            <IoIosClose className="size-8" />
          </button>
        </div>
      )}

      <div className="bg-[#fdf3f4]/90">
        <article className="flex justify-between items-center py-1 text-primary text-md lg:max-w-4xl px-4 lg:mx-auto">
          <div className="flex sm:gap-6 gap-2">
            <a
              href="tel:4611169054"
              className="flex items-center gap-2 text-primary hover:text-neutral-950 cursor-pointer transition-colors p-2"
            >
              <FaPhoneAlt />
              <span className="lg:flex hidden">461 116 9054</span>
            </a>

            <a
              href="mailto:viviendo.mgsueno@gmail.com"
              className="flex items-center gap-2 text-primary hover:text-neutral-950 cursor-pointer transition-colors p-2"
            >
              <IoMdMail className="text-lg" />
              <span className="sm:flex hidden">viviendo.mgsueno@gmail.com</span>
            </a>

            <button
              onClick={() => setShowSchedule(true)}
              className="flex items-center gap-2 text-primary hover:text-neutral-950 cursor-pointer transition-colors p-2"
            >
              <FaClock className="cursor-pointer" />
              <span className="sm:flex hidden">
                Lun.-Dom. de 9:00 AM - 5:00 PM
              </span>
            </button>
          </div>

          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-neutral-950 cursor-pointer transition-colors p-2"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </article>
      </div>

      <header className="header flex flex-col justify-between items-center py-4 sm:py-6 px-8">
        <a
          ref={logoRef}
          href="/"
          className="hidden sm:flex items-center text-2xl justify-center py-2 px-4 border-4 rounded-full mb-6 border-e-theme-light border-b-theme-light border-t-accent border-l-accent"
        >
          <img src="/images/logo.png" alt="logo" className="h-24" />
        </a>

        <div className="w-full flex sm:hidden justify-between items-center">
          <a
            href="/"
            className="flex items-center text-2xl gap-2 py-1.5 px-2 border-4 rounded-full border-e-theme-light border-b-theme-light border-t-accent border-l-accent"
          >
            <img src="/images/logo.png" alt="logo" className="h-10" />
          </a>

          <button
            onClick={toggleMobileMenu}
            className="flex cursor-pointer items-center p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {!mobileMenuOpen ? (
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
              </svg>
            ) : (
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                ></polygon>
              </svg>
            )}
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className="w-full sm:hidden overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <nav className="w-full">
            <ul className="navbar-nav flex flex-col w-full space-y-2 py-4">
              {links.map((link) => {
                const isActive = isActiveLink(link.url);
                return (
                  <li
                    key={`mobile-${link.name}`}
                    className="flex w-full justify-center"
                  >
                    <a
                      href={link.url}
                      className={cn(
                        "block w-full text-center py-2 font-semibold hover:text-primary transition-colors",
                        isActive ? "text-primary" : "text-neutral-950"
                      )}
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex space-x-3">
            {links.map((link, index) => {
              const isActive = isActiveLink(link.url);
              return (
                <li
                  key={link.name}
                  ref={(el) => {
                    if (el) navItemsRef.current[index] = el;
                  }}
                >
                  <a
                    href={link.url}
                    className={cn(
                      "block text-center py-2 px-4 font-semibold hover:text-primary transition-colors",
                      isActive ? "text-primary" : "text-neutral-950"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
