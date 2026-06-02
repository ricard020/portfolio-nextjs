"use client";

import React from "react";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#000000] via-[#010203] to-[#020406] overflow-hidden">

      {/* ================================================================
          ZONA SUPERIOR: BRANDING — Logo + Titular + Descripción
          Jerarquía visual clara: Logo → Título → Subtítulo
          ================================================================ */}
      <div className="layout-container relative z-10 flex flex-col gap-10">
        {/* Badge de Marca Personal — Limpio, vertical y sin fondo ni borde */}
        <div className="flex flex-col items-start gap-4 mb-4 w-fit">
          <img src="/blanco.svg" alt="JRTS Logo" className="h-12 md:h-14 w-auto shrink-0" />
          <div className="flex flex-col items-start leading-[1.3] font-sans">
            <span className="text-sm font-extrabold tracking-[0.02em] text-white lowercase">
              jose ricardo torres
            </span>
            <span className="text-[9.5px] font-semibold tracking-[0.06em] text-text-secondary/50 uppercase mt-3">
              desarrollador frontend
            </span>
          </div>
        </div>

        {/* Bloque de Textos con espaciado elegante */}
        <div className="flex flex-col gap-6">
          {/* Titular — Masa tipográfica principal con escala controlada */}
          <h2 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.25rem] font-bold tracking-tight text-text-primary leading-[1.1]">
            Estudio de<br />
            <span className="text-accent">Ingeniería Visual</span>
          </h2>

          {/* Descripción — Subordinada al título, con opacidad mejorada */}
          <p className="text-xs md:text-sm text-text-secondary/60 font-sans leading-[1.8] max-w-sm">
            Enfoques arquitectónicos para el diseño de experiencias digitales, creados con precisión y dedicación.
          </p>
        </div>
      </div>

      {/* Separador intermedio */}
      <div className="layout-container relative z-10 my-20 md:my-24">
        <div className="w-full h-[1px] bg-white/[0.06]" />
      </div>

      {/* ================================================================
          ZONA CTA: SUBTLE CONTACT CTA (DENTRO DEL FOOTER)
          ================================================================ */}
      <div className="layout-container relative z-10 flex flex-col items-center text-center mb-20 md:mb-24">
        {/* Título de la CTA muy sutil e interactivo */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-[1.2] max-w-2xl mb-8">
          Interested in working together? <span className="text-accent">Get in touch</span>
        </h2>

        {/* Botón CTA premium sutil */}
        <a
          href="mailto:ricarditojos268@gmail.com"
          className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-sans text-[11px] font-bold tracking-[0.2em] text-white uppercase transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white hover:text-black hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] cursor-pointer text-decoration-none"
        >
          Email Me
          <svg
            className="h-3 w-3 transform transition-transform duration-500 ease-out group-hover:translate-x-1"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6H11M11 6L6 1M11 6L6 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Separador entre CTA y Grid */}
      <div className="layout-container relative z-10 mb-20 md:mb-24">
        <div className="w-full h-[1px] bg-white/[0.06]" />
      </div>

      {/* ================================================================
          ZONA CENTRAL: GRID DE 2 COLUMNAS — Explorar / Redes y Contacto
          Alineación superior uniforme con un espaciado generoso (desplazado más abajo)
          ================================================================ */}
      <div id="contact" className="layout-container relative z-10 mt-24 md:mt-32 mb-24 md:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-8">

          {/* Columna 1: Explorar */}
          <div className="flex flex-col gap-6">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-text-secondary/40 uppercase">
              Explorar
            </span>
            <nav className="flex flex-col gap-5">
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, "#work")}
                className="font-sans text-[13px] text-text-primary/80 hover:text-accent transition-all duration-300 transform hover:translate-x-2 w-fit"
              >
                Proyectos
              </a>
              <a
                href="#expertise"
                onClick={(e) => handleScrollTo(e, "#expertise")}
                className="font-sans text-[13px] text-text-primary/80 hover:text-accent transition-all duration-300 transform hover:translate-x-2 w-fit"
              >
                Habilidades
              </a>
              <a
                href="#about"
                onClick={(e) => handleScrollTo(e, "#about")}
                className="font-sans text-[13px] text-text-primary/80 hover:text-accent transition-all duration-300 transform hover:translate-x-2 w-fit"
              >
                Sobre Mí
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="font-sans text-[13px] text-text-primary/80 hover:text-accent transition-all duration-300 transform hover:translate-x-2 w-fit"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Columna 2: Redes y Contacto */}
          <div className="flex flex-col gap-6">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-text-secondary/40 uppercase">
              Redes y Contacto
            </span>
            {/* Los íconos en móvil aparecen uno abajo de otro y en fila en desktop */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://www.instagram.com/rts181104/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="Instagram"
              >
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <span className="pill-text">rts181104</span>
              </a>

              <a
                href="mailto:ricarditojos268@gmail.com"
                className="social-pill-btn email-btn"
                aria-label="Email"
              >
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="pill-text">ricarditojos268@gmail.com</span>
              </a>

              <a
                href="https://github.com/ricard020"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="GitHub"
              >
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <span className="pill-text">ricard020</span>
              </a>

              <a
                href="https://ve.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
                aria-label="LinkedIn"
              >
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className="pill-text">Ricardito</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================
          ZONA INFERIOR: SUB-FOOTER — Separador + Copyright
          Centrado, tipografía mínima, contraste optimizado
          ================================================================ */}
      <div className="layout-container relative z-10 pb-12 md:pb-16 flex flex-col gap-10">
        <div className="w-full h-[1px] bg-white/[0.06]" />
        <div className="flex flex-col items-center font-sans text-[11px] tracking-[0.12em] text-text-primary/70 text-center">
          <span>
            © {new Date().getFullYear()} JR. All rights reserved.
          </span>
        </div>
      </div>

      {/* Estilos CSS personalizados para animaciones del Footer */}
      <style jsx>{`
        .social-pill-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 42px;
          width: 42px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          cursor: pointer;
          white-space: nowrap;
          padding: 0 11px;
        }

        .social-pill-btn:hover {
          width: 142px;
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: #000000;
          padding: 0 16px;
        }

        .social-pill-btn.email-btn:hover {
          width: 280px; /* dynamic wider expansion pastilla to fit ricarditojos268@gmail.com */
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .pill-text {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0;
          margin-left: 0px;
          transition: opacity 0.3s ease, margin-left 0.3s ease;
          pointer-events: none;
        }

        .social-pill-btn:hover .pill-text {
          opacity: 1;
          margin-left: 10px;
        }

        .social-pill-btn :global(svg) {
          position: relative;
          z-index: 3;
          width: 17px;
          height: 17px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .social-pill-btn:hover :global(svg) {
          transform: scale(1.08);
        }
      `}</style>
    </footer>
  );
}
