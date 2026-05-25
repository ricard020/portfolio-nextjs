"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between bg-background-primary animate-fade-in-up overflow-hidden">
      {/* Capa de profundidad: radial gradient sutil que eleva el contenido central del fondo plano */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(0,138,225,0.04) 0%, transparent 70%)",
        }}
      />

      {/* 
        ZONA ESTRUCTURAL — SUPERIOR
        Soporte de marca y navegación. Jerárquicamente periférico, alineado al grid.
      */}
      <header className="layout-container relative z-10 w-full pt-8 pb-0">
        <div className="flex md:grid items-center justify-between md:grid-cols-12 md:gap-8 pb-5 md:pb-6 border-b border-white/[0.03]">
          {/* Logo "JR" — col-span 3 en desktop, discreto */}
          <div className="md:col-span-3 flex items-center gap-2.5">
            <svg
              className="h-5 w-5 text-accent opacity-60 hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="JR Logo"
            >
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <path
                d="M12 10H16V20H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 10H22V15H18V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-sans text-[9px] tracking-[0.2em] text-text-secondary/30 select-none font-medium uppercase">
              Portfolio
            </span>
          </div>

          {/* Rol Profesional — metadata secundaria centralizada en el grid de la cabecera */}
          <div className="hidden md:flex md:col-span-6 justify-center">
            <span className="text-[9px] font-semibold tracking-[0.25em] text-text-secondary/40 uppercase select-none">
              Frontend Developer
            </span>
          </div>

          {/* Selector de idioma — col-span 3 en desktop */}
          <div className="md:col-span-3 flex items-center justify-end gap-2 font-sans text-[9px] tracking-[0.2em] uppercase">
            <button className="text-text-secondary/60 hover:text-accent transition-colors duration-200 cursor-pointer px-1 py-0.5 font-semibold">
              ES
            </button>
            <span className="text-white/8 select-none">|</span>
            <button className="text-text-secondary/30 hover:text-accent transition-colors duration-200 cursor-pointer px-1 py-0.5 font-semibold">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* 
        ZONA DE IMPACTO — BLOQUE DE COMUNICACIÓN PRINCIPAL
        Este es el único foco visual de la pantalla. Todos los demás elementos son periféricos.
        Internamente cohesionado como una sola masa tipográfica sin elementos distractores.
      */}
      <div className="layout-container relative z-10 flex flex-1 items-center py-20 md:py-24">
        <div className="layout-grid w-full items-center">
          {/* 
            Bloque de impacto alineado en columnas 2-8 (o 2-7 en pantallas xl) para maximizar espacio negativo.
            Internamente apretado para que h1 → subtitle → CTA se lean como UNA SOLA UNIDAD de comunicación.
          */}
          <div className="col-span-1 md:col-start-2 md:col-span-9 lg:col-start-2 lg:col-span-7 xl:col-start-2 xl:col-span-6 flex flex-col items-start">
            {/* Título Principal — masa visual dominante y única */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tighter text-text-primary leading-[1.05] md:leading-[0.92] mb-6 md:mb-7">
              Engineering high-performance user interfaces with{" "}
              <span className="text-accent">structural integrity</span>.
            </h1>

            {/* Subtítulo — cohesionado dentro del bloque, sin separación excesiva del h1 */}
            <p className="max-w-lg text-sm md:text-base text-text-secondary/50 leading-[1.8] font-sans mb-9 md:mb-11">
              I build production-grade web applications focused on modular architecture, clean rendering pathways, and strict attention to visual engineering.
            </p>

            {/* CTA — conectado al bloque, no flotando como elemento independiente */}
            <button className="group relative flex items-center justify-center gap-3 rounded-[3px] border border-accent/50 bg-accent/8 px-9 py-4 font-sans text-[11px] font-bold tracking-[0.2em] text-accent uppercase transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-accent hover:border-accent hover:text-black hover:shadow-[0_8px_32px_rgba(0,138,225,0.25)] cursor-pointer">
              View Work
              <svg
                className="h-3.5 w-3.5 transform transition-transform duration-500 ease-out group-hover:translate-x-1.5"
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
            </button>
          </div>

          {/* 
            ZONA DE SOPORTE SECUNDARIO — FIRMA VISUAL "JR"
            Decoración estructural desplazada a las columnas extremas (11-12) para maximizar espacio negativo.
            Totalmente pasiva con opacidad ultrabaja (1.5%) para evitar competir con el foco visual.
          */}
          <div className="hidden lg:block lg:col-start-11 lg:col-span-2 h-full relative pointer-events-none select-none">
            <div className="absolute inset-y-0 right-0 left-0 flex items-center justify-center">
              <svg
                className="w-full h-auto text-accent opacity-[0.015] max-w-[150px] transition-opacity duration-300"
                viewBox="0 0 200 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <line x1="0" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="0" y1="150" x2="200" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="0" y1="250" x2="200" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="50" y1="0" x2="50" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="150" y1="0" x2="150" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <path
                  d="M 60 50 L 60 200 A 40 40 0 0 1 20 240"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 100 240 L 100 50 L 160 50 A 45 45 0 0 1 160 140 L 100 140 M 130 140 L 180 240"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ZONA ESTRUCTURAL — INFERIOR
        Soporte de metadatos. Jerárquicamente periférico, alineado al grid.
      */}
      <footer className="layout-container relative z-10 w-full pb-8">
        <div className="flex md:grid items-center justify-between md:grid-cols-12 md:gap-8 border-t border-white/[0.03] pt-6 font-sans text-[9px] tracking-[0.2em] text-text-secondary/30 uppercase">
          <span className="md:col-span-6 text-left">Ricardo Portfolio</span>
          <span className="md:col-span-6 text-right">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </section>
  );
}
