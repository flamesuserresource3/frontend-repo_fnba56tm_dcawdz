import React from 'react';
import { Music, Headphones, Waves, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const worlds = [
  {
    title: 'Ambient Orbits',
    icon: Waves,
    color: 'from-cyan-500/20 to-fuchsia-500/10',
    desc: 'Floating pads, granular textures, and weightless tempo.',
  },
  {
    title: 'Club Nebula',
    icon: Headphones,
    color: 'from-fuchsia-500/20 to-violet-500/10',
    desc: 'Bass-driven beats for late nights and early lights.',
  },
  {
    title: 'Global Signals',
    icon: Globe,
    color: 'from-emerald-500/20 to-cyan-500/10',
    desc: 'Field recordings and organic pulses from around the world.',
  },
  {
    title: 'Cinematic Pulse',
    icon: Music,
    color: 'from-amber-500/20 to-rose-500/10',
    desc: 'Hybrid orchestration for trailers and immersive media.',
  },
];

export default function Explorer() {
  return (
    <section id="explore" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Explore the Musical Worlds</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Each world is a theme across releases. Hover to feel the motion — tap to learn more.
            </p>
          </div>
          <a
            href="#highlights"
            className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15 md:inline-flex"
          >
            Highlights
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {worlds.map(({ title, icon: Icon, color, desc }) => (
            <motion.a
              key={title}
              href="#highlights"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-5`}
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
                Enter world <ArrowRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
