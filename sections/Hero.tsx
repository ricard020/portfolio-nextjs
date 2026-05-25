"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between bg-background-primary py-8 md:py-12 animate-fade-in-up">
      {/* 
        A. Header superior integrado (dentro del Hero)
        Alineado al contenedor y al sistema de grid
      */}
      <header className="layout-container w-full">
        <div className="flex items-center justify-between border-b border-white/5 pb-6">
          {/* Logo "JR" - SVG minimalista y técnico estático */}
          <div className="flex items-center gap-3">
            <svg
              className="h-8 w-8 text-accent hover:opacity-85 transition-opacity duration-300"
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
            <span className="font-sans text-xs tracking-wider text-text-secondary select-none font-medium">
              Portfolio
            </span>
          </div>

          {/* Selector de idioma minimalista (ES / EN) */}
          <div className="flex items-center gap-2 font-sans text-xs tracking-wide">
            <button className="text-text-primary hover:text-accent transition-colors duration-200 cursor-pointer px-1 py-0.5 font-medium">
              ES
            </button>
            <span className="text-white/20 select-none">/</span>
            <button className="text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer px-1 py-0.5 font-medium">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* 
        B. Bloque Central - Contenido Principal
        Alineado perfectamente con el Grid de 12 columnas existente
      */}
      <div className="layout-container flex flex-1 items-center py-16 md:py-24">
        <div className="layout-grid w-full items-center">
          {/* 
            Alineación precisa en el Grid de 12 columnas:
            - Móvil: col-span-1 (ocupa todo el ancho)
            - Tablet/Desktop: Comienza en columna 2 y se extiende por 9 columnas (col-span-9)
            - Desktop grande: Comienza en columna 2 y se extiende por 8 columnas (col-span-8)
            Esto deja 4 columnas de aire controlado a la derecha, logrando un layout asimétrico y premium.
          */}
          <div className="col-span-1 md:col-start-2 md:col-span-9 lg:col-start-2 lg:col-span-8 flex flex-col items-start z-10">
            
            {/* Etiqueta de Rol Limpia y Geométrica */}
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase select-none mb-4 md:mb-6">
              Frontend Developer
            </span>

            {/* Título Principal - Elemento dominante con fuerte peso visual y tracking-tighter */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-text-primary leading-[1.05] md:leading-[0.95] mb-6 md:mb-8">
              Engineering high-performance user interfaces with <span className="text-accent">structural integrity</span>.
            </h1>

            {/* Subtítulo - Contraste jerárquico suavizado (texto secundario con opacidad controlada) */}
            <p className="max-w-xl text-base md:text-lg text-text-secondary/70 leading-relaxed font-sans mb-8 md:mb-10">
              I build production-grade web applications focused on modular architecture, clean rendering pathways, and strict attention to visual engineering.
            </p>

            {/* CTA Principal - Segundo elemento de importancia, más ancho, elevación en hover y glow suave */}
            <div className="w-full sm:w-auto">
              <button className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded border border-accent/40 bg-accent/5 px-8 py-3.5 font-sans text-xs font-bold tracking-widest text-accent uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-background-primary hover:shadow-[0_0_20px_rgba(0,138,225,0.3)] cursor-pointer">
                View Work
                <svg
                  className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1"
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

          </div>

          {/* 
            Firma visual sutil: Representación geométrica a gran escala de "JR"
            Alineada en las columnas vacías de la derecha (columnas 10 a 12), con opacidad extremadamente baja
          */}
          <div className="hidden lg:block lg:col-start-10 lg:col-span-3 h-full relative pointer-events-none select-none">
            <div className="absolute inset-y-0 right-0 left-4 flex items-center justify-center">
              <svg
                className="w-full h-auto text-accent opacity-[0.03] max-w-[220px]"
                viewBox="0 0 200 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Retícula técnica de fondo muy tenue (estilo tablero de dibujo/blueprint) */}
                <line x1="0" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="0" y1="150" x2="200" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="0" y1="250" x2="200" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="50" y1="0" x2="50" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="150" y1="0" x2="150" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />

                {/* Inicial "J" geométrica basada en arcos y líneas rectas perfectas */}
                <path
                  d="M 60 50 L 60 200 A 40 40 0 0 1 20 240"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Inicial "R" geométrica basada en formas precisas y diagonales técnicas */}
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

      {/* Footer del Hero - Limpio y estructural */}
      <footer className="layout-container w-full mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-6 font-sans text-[10px] tracking-wider text-text-secondary gap-4 sm:gap-0">
          <div>
            <span>RICARDO PORTFOLIO</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
