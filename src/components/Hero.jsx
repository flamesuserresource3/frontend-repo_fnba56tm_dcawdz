import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Scene (updated to animation theme) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking cinematic overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-[36rem] w-[36rem] rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Minimal HUD crosshair for VR vibe */}
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 opacity-40">
          <div className="absolute left-1/2 top-0 h-3 w-[1px] -translate-x-1/2 bg-white/50" />
          <div className="absolute left-1/2 bottom-0 h-3 w-[1px] -translate-x-1/2 bg-white/50" />
          <div className="absolute top-1/2 left-0 h-[1px] w-3 -translate-y-1/2 bg-white/50" />
          <div className="absolute top-1/2 right-0 h-[1px] w-3 -translate-y-1/2 bg-white/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm tracking-widest text-white/70">CYBERNETIC SOUND EXPLORATION</p>
        <h1 className="text-balance text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
          Step into the Musical Metaverse
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          A VR-inspired journey where an astronaut guides you through twisting ribbons of sound. Move
          your cursor and watch the world respond.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#explore"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow-xl ring-1 ring-white/10 transition hover:translate-y-[-2px] hover:shadow-2xl"
          >
            Explore Worlds
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
