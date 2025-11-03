import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/GAomjSvthYZG1LLN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignettes that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm tracking-widest text-white/70">IMMERSIVE 3D EXPERIENCE</p>
        <h1 className="text-balance text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
          Voyage into a World of Sound
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          An interactive portfolio that blends music and motion. Move your cursor to stir the particle
          sphere and dive deeper into the artist’s sonic universe.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#explore"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow-xl ring-1 ring-white/10 transition hover:translate-y-[-2px] hover:shadow-2xl"
          >
            Explore the Music
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium text-white backdrop-blur ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <PlayCircle className="h-5 w-5" />
            Listen Highlights
          </a>
        </div>
      </div>
    </section>
  );
}
