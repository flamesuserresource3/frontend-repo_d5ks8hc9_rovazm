import React from 'react';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import MembershipBooking from './components/MembershipBooking';
import AcademyEventsContact from './components/AcademyEventsContact';
import { Calendar, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-lg font-extrabold tracking-tight">
            <span className="text-sky-400">Sport</span>
            <span className="text-white">Center</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#facilities" className="hover:text-white">Facilities</a>
            <a href="#booking" className="hover:text-white">Membership</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#booking" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-400">
            Book Your Court
          </a>
        </div>
      </header>

      <main>
        <Hero />

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">About Our Center</h2>
              <p className="mt-4 text-white/80">
                We are a community-driven multi-sport center dedicated to tennis, padel, and football. Our mission is to
                make high-quality sport accessible, inspiring healthy lifestyles and competitive spirit for all ages.
              </p>
              <p className="mt-3 text-white/70">
                With modern facilities, expert coaching, and vibrant leagues, we help you train smarter, play harder, and
                connect with fellow athletes.
              </p>
              <div className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
                <Calendar className="mr-2 h-4 w-4 text-emerald-400" /> Open 7 days a week
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1547852346-2462d2d0f061?q=80&w=2069&auto=format&fit=crop"
                alt="Players training at the center"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-emerald-500/10" />
            </div>
          </div>
        </section>

        <Facilities />
        <MembershipBooking />
        <AcademyEventsContact />
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} SportCenter. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
