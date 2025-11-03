import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">The Artist</h2>
            <p className="mt-4 text-white/80">
              I compose cinematic electronica with organic textures and pulsing rhythms. My work explores
              the tension between analog warmth and digital precision — soundscapes designed for deep
              focus, live performance, and immersive media.
            </p>
            <p className="mt-4 text-white/70">
              This portfolio is a playground. Move through sonic themes, discover concepts behind each
              release, and experience music as a spatial journey.
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/10 to-cyan-500/0 blur-2xl" />
              <dl className="relative grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-white/60">Years Active</dt>
                  <dd className="text-3xl font-bold">8+</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Live Shows</dt>
                  <dd className="text-3xl font-bold">120+</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Releases</dt>
                  <dd className="text-3xl font-bold">24</dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Collabs</dt>
                  <dd className="text-3xl font-bold">16</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
