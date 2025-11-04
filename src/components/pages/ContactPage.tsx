import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/config";

export const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const headerRef = useRef(null);
  const detailsRef = useRef(null);
  const socialRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        [detailsRef.current, formRef.current],
        {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        socialRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Enviando...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (response.status === 200) {
        setFormStatus("¡Gracias por tu mensaje!");
        form.reset();
      } else {
        setFormStatus("Algo salió mal. Intenta de nuevo.");
      }
    } catch (error) {
      setFormStatus("Error al enviar el mensaje.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormStatus("");
      }, 5000);
    }
  };

  return (
    <section className="section min-h-screen mt-24 mb-12">
      <h2
        ref={headerRef}
        className="flex justify-center text-center items-center mb-12 text-3xl font-semibold"
      >
        <span className="text-primary">Contacto </span>
        <span className="text-secondary ml-2">Directo</span>
      </h2>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={detailsRef} className="flex flex-col gap-8 lg:px-12 px-6">
            <h3 className="text-2xl font-semibold text-center text-secondary">
              Detalles
            </h3>

            <div className="flex flex-col gap-4 items-center w-full">
              <p className="text-gray-700 text-center">
                Si tienes alguna pregunta o necesitas ayuda, no dudes en
                contactarnos. Estamos aquí para ayudarte.
              </p>

              <p className="text-gray-600 text-center">
                {siteConfig.address.fullAddress}
              </p>

              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>

              <p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </p>
            </div>

            <div ref={socialRef} className="flex flex-col gap-6 mt-8">
              <h3 className="text-2xl font-semibold text-center">
                <p className="text-primary">Síguenos en</p>
                <p className="text-secondary">Nuestras Redes</p>
              </h3>

              <div className="flex justify-center items-center gap-4 mt-4">
                <a
                  href={siteConfig.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-primary hover:text-secondary transition-all duration-300 p-4 rounded-lg flex flex-col items-center hover:bg-primary/5"
                >
                  <FaFacebook className="text-4xl mb-2" />
                  <span className="text-sm font-medium">
                    {siteConfig.social.facebook.name}
                  </span>
                </a>

                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-primary hover:text-secondary transition-all duration-300 p-4 rounded-lg flex flex-col items-center hover:bg-primary/5"
                >
                  <FaInstagram className="text-4xl mb-2" />
                  <span className="text-sm font-medium">
                    {siteConfig.social.instagram.name}
                  </span>
                </a>

                <a
                  href={siteConfig.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-primary hover:text-secondary transition-all duration-300 p-4 rounded-lg flex flex-col items-center hover:bg-primary/5"
                >
                  <FaYoutube className="text-4xl mb-2" />
                  <span className="text-sm font-medium">
                    {siteConfig.social.youtube.name}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div ref={formRef}>
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
              Formulario
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Hidden fields for Web3Forms */}
              <input
                type="hidden"
                name="access_key"
                value={siteConfig.api.web3forms}
              />
              <input
                type="checkbox"
                className="hidden"
                style={{ display: "none" }}
                name="botcheck"
                tabIndex={-1}
                aria-hidden="true"
              />

              {/* Grid layout: 2 columns on sm+, stacked on xs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 border-2 rounded-md outline-none border-gray-300 focus:border-primary transition-colors"
                    name="name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border-2 rounded-md outline-none border-gray-300 focus:border-primary transition-colors"
                    name="email"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Introduce tu número"
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-3 border-2 rounded-md outline-none border-gray-300 focus:border-primary transition-colors"
                    name="phone"
                  />
                </div>

                {/* Dirección */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Dirección
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Ingresa tu dirección"
                    required
                    autoComplete="street-address"
                    className="w-full px-4 py-3 border-2 rounded-md outline-none border-gray-300 focus:border-primary transition-colors"
                    name="address"
                  />
                </div>

                {/* Asunto - spans 2 columns */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Escribe el asunto"
                    required
                    className="w-full px-4 py-3 border-2 rounded-md outline-none border-gray-300 focus:border-primary transition-colors"
                    name="subject"
                  />
                </div>

                {/* Mensaje - spans 2 columns */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 border-2 rounded-md outline-none border-gray-300 focus:border-primary transition-colors resize-none h-36"
                  />
                </div>

                {/* Submit - spans 2 columns, full width */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 px-12 rounded-md transition-all duration-300 text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </div>

              {formStatus && (
                <div
                  className={`text-center font-medium ${
                    formStatus.includes("Gracias")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
