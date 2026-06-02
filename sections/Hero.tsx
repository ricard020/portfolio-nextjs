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

      {/* Spacer para compensar la navbar fija */}
      <div className="w-full pt-16 md:pt-20" />

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
      {/* Línea inferior decorativa — cierre limpio del primer pliegue */}
      <div className="layout-container relative z-10 w-full pb-8 select-none pointer-events-none">
        <div className="border-t border-white/[0.03]" />
      </div>
    </section>
  );
}
