import React from 'react';
import { Users, Trophy, Calendar, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const coaches = [
  {
    name: 'Alex Rivera',
    role: 'Head Tennis Coach',
    bio: 'Former ATP player focused on technique, footwork, and match strategy.',
    img: 'https://images.unsplash.com/photo-1531123414780-f7429f48e0f3?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Marta Silva',
    role: 'Padel Specialist',
    bio: 'Pan-American medalist bringing energy, tactics, and precision drills.',
    img: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Luis Gomez',
    role: 'Football Academy Director',
    bio: 'UEFA licensed coach mentoring kids to semi-pro pathways.',
    img: 'https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=1887&auto=format&fit=crop',
  },
];

const events = [
  {
    name: 'Summer Open — Tennis Singles',
    date: 'July 12–14',
    cta: '#contact',
  },
  {
    name: 'Padel Night League — Mixed Doubles',
    date: 'Every Friday',
    cta: '#contact',
  },
  {
    name: 'Youth Football Cup U14',
    date: 'August 3',
    cta: '#contact',
  },
];

const AcademyEventsContact = () => {
  return (
    <section id="academy" className="mx-auto max-w-6xl px-6 py-20">
      {/* Academy & Training */}
      <div className="mb-10 text-center">
        <p className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
          <Users className="h-4 w-4 text-sky-400" /> Academy & Training
        </p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Grow with the Pros</h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/70">
          Courses for kids, amateurs, and professionals. Build skills, confidence, and teamwork.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {coaches.map((c) => (
          <div key={c.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl">
            <div className="h-52 w-full overflow-hidden">
              <img src={c.img} alt={c.name} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-lg font-bold text-white">{c.name}</h3>
              <p className="text-sm font-semibold text-sky-400">{c.role}</p>
              <p className="text-sm text-white/70">{c.bio}</p>
              <a href="#contact" className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                Enroll in training <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Events & Tournaments */}
      <div id="events" className="mt-16">
        <div className="mb-6 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-amber-400" />
          <h3 className="text-2xl font-extrabold text-white">Events & Tournaments</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {events.map((e) => (
            <div key={e.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div>
                <p className="text-sm font-semibold text-white">{e.name}</p>
                <p className="text-xs text-white/60">{e.date}</p>
              </div>
              <a href={e.cta} className="inline-flex items-center rounded-full bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-400">
                Register
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="mt-16 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509507!2d144.95373531531834!3d-37.81627937975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjIiRQ!5e0!3m2!1sen!2s!4v1614310000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '320px' }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="mb-3 text-xl font-bold text-white">Get in Touch</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-sky-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-sky-500"
                required
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-sky-500"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
                onClick={(e) => e.preventDefault()}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/80">
            <p className="mb-2 inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Sport Avenue, Your City</p>
            <p className="mb-2 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</p>
            <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@multisportcenter.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyEventsContact;
