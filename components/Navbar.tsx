"use client";

import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "PROYECTOS", href: "#work" },
  { label: "HABILIDADES", href: "#expertise" },
  { label: "SOBRE MÍ", href: "#about" },
  { label: "CONTACTO", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("PROYECTOS");
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "navbar-scrolled"
          : "navbar-transparent"
      }`}
    >
      <div className="layout-container">
        <div className="navbar-inner">
          {/* Logo "JRTS" — lado izquierdo */}
          <a
            href="#"
            className="navbar-logo flex items-center gap-3 text-decoration-none group"
            aria-label="JRTS - Inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/blanco.svg" alt="JRTS Logo" className="h-7 w-auto shrink-0 transition-opacity group-hover:opacity-80" />
            <div className="flex flex-col items-start leading-[1.2] font-sans">
              <span className="text-[11px] font-extrabold tracking-[0.02em] text-text-primary uppercase">
                Jose Ricardo
              </span>
              <span className="text-[7.5px] font-semibold tracking-[0.06em] text-text-secondary/50 uppercase mt-3.5">
                desarrollador frontend
              </span>
            </div>
          </a>

          {/* Links de navegación — centro */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`navbar-link ${
                  activeLink === link.label ? "navbar-link-active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.label);
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Selector de idioma + globo — lado derecho */}
          <div className="navbar-right">
            <div className="navbar-lang">
              <button
                className={`navbar-lang-btn ${
                  lang === "ES" ? "navbar-lang-active" : ""
                }`}
                onClick={() => setLang("ES")}
              >
                ES
              </button>
              <span className="navbar-lang-divider">|</span>
              <button
                className={`navbar-lang-btn ${
                  lang === "EN" ? "navbar-lang-active" : ""
                }`}
                onClick={() => setLang("EN")}
              >
                EN
              </button>
            </div>

            {/* Ícono de globo */}
            <button
              className="navbar-globe"
              aria-label="Cambiar idioma"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px]"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="4"
                  ry="9.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M3.5 9h17M3.5 15h17"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </button>

            {/* Ícono de tema (Modo Claro/Oscuro) */}
            <button
              className="navbar-globe"
              aria-label="Cambiar tema"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px]"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Un diseño elegante de eclipse lunar que muestra el cambio de fase solar/lunar */}
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Línea inferior decorativa */}
      <div className="navbar-border" />
    </nav>
  );
}
