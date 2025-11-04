import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden rounded-b-3xl bg-neutral-900/90" id="home">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        src="https://videos.pexels.com/video-files/3199617/3199617-uhd_2560_1440_25fps.mp4"
        playsInline
        autoPlay
        loop
        muted
      />

      {/* Overlay Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <p className="mb-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
          <PlayCircle className="mr-2 h-4 w-4" />
          Matches • Training • Community
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Welcome to <span className="text-sky-400">[Center Name]</span> — The Home of
          <span className="text-emerald-400"> Sport</span>, Passion & Performance.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">
          A modern multi-sport hub for tennis, padel, and football. Train with top coaches,
          compete in tournaments, and be part of an energizing community.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#booking"
            className="group inline-flex items-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:translate-y-[-2px] hover:bg-sky-400"
          >
            Book Your Court
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
