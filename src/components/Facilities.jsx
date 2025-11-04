import React from 'react';
import { Image as ImageIcon, ArrowRight, BadgeCheck } from 'lucide-react';

const facilities = [
  {
    name: 'Tennis Courts',
    description:
      'High-performance acrylic courts with LED lighting and cushioned surfaces for optimal play, day or night.',
    img:
      'https://images.unsplash.com/photo-1547955922-26be3c24d025?q=80&w=1887&auto=format&fit=crop',
    link: '#booking',
    color: 'from-sky-500/10 to-sky-500/0',
    chip: 'Tennis',
  },
  {
    name: 'Padel Courts',
    description:
      'Indoor and outdoor panoramic padel courts with anti-glare glass and pro-grade turf.',
    img:
      'https://images.unsplash.com/photo-1628907716990-7e9dfc43351c?q=80&w=1974&auto=format&fit=crop',
    link: '#booking',
    color: 'from-emerald-500/10 to-emerald-500/0',
    chip: 'Padel',
  },
  {
    name: 'Football Fields',
    description:
      'FIFA-size artificial turf fields, smart drainage, and premium illumination for league and casual play.',
    img:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1964&auto=format&fit=crop',
    link: '#booking',
    color: 'from-lime-500/10 to-lime-500/0',
    chip: 'Football',
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            World-class Facilities
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Train, play, and compete across dedicated zones built for performance and fun.
          </p>
        </div>
        <a
          href="#booking"
          className="hidden items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-400 md:inline-flex"
        >
          View Availability
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((f) => (
          <div
            key={f.name}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] shadow-xl transition hover:translate-y-[-4px] hover:shadow-2xl"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={f.img}
                alt={f.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${f.color}`} />
              <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                {f.chip}
              </span>
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-bold text-white">{f.name}</h3>
              <p className="text-sm text-white/70">{f.description}</p>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span className="inline-flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-emerald-400" />Pro lighting</span>
                <span className="inline-flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-emerald-400" />Quality surface</span>
                <span className="inline-flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-emerald-400" />Locker rooms</span>
              </div>
              <a
                href={f.link}
                className="inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300"
              >
                Book this facility
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/50">
        <ImageIcon className="h-4 w-4" />
        Photos are illustrative of our facility standards.
      </div>
    </section>
  );
};

export default Facilities;
