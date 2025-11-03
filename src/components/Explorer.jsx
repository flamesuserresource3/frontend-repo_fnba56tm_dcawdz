import React, { useRef } from 'react';
import { Music, Headphones, Waves, Globe, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 20 });
  const tz = useSpring(10, { stiffness: 80, damping: 20 });

  function onMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
    tz.set(20);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
    tz.set(10);
  }

  return (
    <section id="explore" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">VR Walkthrough: Musical Worlds</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Tilt, hover, and step into themed spaces. It’s a desktop-friendly, VR-inspired stroll.
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

        {/* 3D Parallax Stage */}
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6"
          style={{ perspective: 1200, WebkitPerspective: 1200 }}
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {worlds.map(({ title, icon: Icon, color, desc }, idx) => (
              <motion.a
                key={title}
                href="#highlights"
                whileHover={{ y: -8, z: 30 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className={`group relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-5`}
                style={{ transform: 'translateZ(0px)' }}
              >
                {/* glow */}
                <div className="pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 100%)' }} />
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                </div>
                <p className="relative mt-3 text-sm text-white/75">{desc}</p>
                <div className="relative mt-4 inline-flex items-center gap-2 text-sm text-white/80">
                  Enter world <ArrowRight className="h-4 w-4" />
                </div>

                {/* floating artifact per card */}
                <motion.span
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-tr from-white/10 to-white/0 ring-1 ring-white/10 backdrop-blur"
                  style={{ translateZ: 40 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: idx * 0.2 }}
                />
              </motion.a>
            ))}

            {/* Deep-layer artifacts */}
            <motion.div
              className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-2xl"
              style={{ translateZ: -80 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 10 }}
            />
            <motion.div
              className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-2xl"
              style={{ translateZ: -120 }}
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 12 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
