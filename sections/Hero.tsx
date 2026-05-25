"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between bg-background-primary py-8 md:py-12 animate-fade-in-up overflow-hidden">
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
        A. Header superior integrado (dentro del Hero)
        Alineado al contenedor y al sistema de grid
      */}
      <header className="layout-container w-full">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
          {/* Logo "JR" - SVG minimalista y técnico estático */}
          <div className="flex items-center gap-3">
            <svg
              className="h-8 w-8 text-accent opacity-90 hover:opacity-100 transition-opacity duration-300"
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
            <span className="font-sans text-[11px] tracking-[0.15em] text-text-secondary/50 select-none font-medium uppercase">
              Portfolio
            </span>
          </div>

          {/* Selector de idioma minimalista (ES / EN) */}
          <div className="flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase">
            <button className="text-text-primary/90 hover:text-accent transition-colors duration-200 cursor-pointer px-1.5 py-0.5 font-semibold">
              ES
            </button>
            <span className="text-white/10 select-none">|</span>
            <button className="text-text-secondary/50 hover:text-accent transition-colors duration-200 cursor-pointer px-1.5 py-0.5 font-semibold">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* 
        B. Bloque Central - Contenido Principal
        Alineado perfectamente con el Grid de 12 columnas existente
      */}
      <div className="layout-container relative z-10 flex flex-1 items-center py-16 md:py-24">
        <div className="layout-grid w-full items-center">
          {/* 
            Alineación precisa en el Grid de 12 columnas:
            - Móvil: col-span-1 (ocupa todo el ancho)
            - Tablet/Desktop: Comienza en columna 2 y se extiende por 9 columnas (col-span-9)
            - Desktop grande: Comienza en columna 2 y se extiende por 8 columnas (col-span-8)
            Esto deja 4 columnas de aire controlado a la derecha, logrando un layout asimétrico y premium.
          */}
          <div className="col-span-1 md:col-start-2 md:col-span-9 lg:col-start-2 lg:col-span-8 flex flex-col items-start z-10">
            
            {/* Etiqueta de Rol — deliberadamente delgada para ceder protagonismo al título */}
            <span className="text-[11px] font-semibold tracking-[0.25em] text-accent/80 uppercase select-none mb-5 md:mb-7">
              Frontend Developer
            </span>

            {/* Título Principal — el único elemento visualmente absoluto de la pantalla */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tighter text-text-primary leading-[1.05] md:leading-[0.92] mb-7 md:mb-9">
              Engineering high-performance user interfaces with{" "}
              <span
                className="text-accent"
                style={{ WebkitTextStroke: "0px" }}
              >
                structural integrity
              </span>
              .
            </h1>

            {/* Subtítulo — reducido al mínimo de presencia para dejar al título como rey */}
            <p className="max-w-lg text-sm md:text-base text-text-secondary/55 leading-[1.8] font-sans mb-10 md:mb-12">
              I build production-grade web applications focused on modular architecture, clean rendering pathways, and strict attention to visual engineering.
            </p>

            {/* CTA Principal — presencia clara sin competir con el título */}
            <div className="w-full sm:w-auto">
              <button className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-[3px] border border-accent/50 bg-accent/8 px-9 py-4 font-sans text-[11px] font-bold tracking-[0.2em] text-accent uppercase transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-accent hover:border-accent hover:text-black hover:shadow-[0_8px_32px_rgba(0,138,225,0.25)] cursor-pointer">
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
      <footer className="layout-container relative z-10 w-full mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.06] pt-6 font-sans text-[10px] tracking-[0.15em] text-text-secondary/40 uppercase gap-4 sm:gap-0">
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
