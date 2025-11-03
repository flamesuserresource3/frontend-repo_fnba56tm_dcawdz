import React from 'react';
import { PlayCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Stellar Drift',
    tag: 'Single',
    cover:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Echoes of Neon',
    tag: 'EP',
    cover:
      'https://images.unsplash.com/photo-1465929639680-64ee080eb3ed?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Granular Garden',
    tag: 'Live',
    cover:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Midnight Signals',
    tag: 'Album',
    cover:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function MusicHighlights() {
  return (
    <section id="highlights" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">Highlights</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Selected works across releases and performances.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="mt-3 flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-medium text-black ring-1 ring-white/10 transition hover:translate-y-[-1px]">
                    <PlayCircle className="h-4 w-4" /> Play
                  </button>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    <ExternalLink className="h-4 w-4" /> Details
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
