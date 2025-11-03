import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Explorer from './components/Explorer';
import MusicHighlights from './components/MusicHighlights';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Hero />
      <About />
      <Explorer />
      <MusicHighlights />
      <footer className="border-t border-white/10 bg-black py-10 text-white/70">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          <p>
            © {new Date().getFullYear()} The Sound Voyager — Crafted with motion, code, and curiosity.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
