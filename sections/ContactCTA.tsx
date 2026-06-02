"use client";

import React from "react";

export default function ContactCTA() {
  return (
    <section className="relative w-full bg-background-primary py-20 md:py-28 overflow-hidden border-t border-white/[0.02]">
      <div className="layout-container relative z-10 flex flex-col items-center text-center">
        {/* Título de la CTA muy sutil e interactivo */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-[1.2] max-w-2xl mb-8">
          Interested in working together? <span className="text-accent">Get in touch</span>
        </h2>

        {/* Botón CTA premium sutil */}
        <a
          href="mailto:hello@ricardo.dev"
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
    </section>
  );
}
