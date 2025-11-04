import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$19/mo',
    highlight: 'Great for casual players',
    perks: ['Off-peak bookings', 'Community matches', 'Member newsletter'],
    color: 'from-sky-600 to-sky-500',
  },
  {
    name: 'Performance',
    price: '$49/mo',
    highlight: 'Best value for regulars',
    perks: ['Anytime bookings', 'Discounted coaching', 'Tournament priority'],
    color: 'from-emerald-600 to-emerald-500',
    featured: true,
  },
  {
    name: 'Elite',
    price: '$89/mo',
    highlight: 'For competitors & teams',
    perks: ['Unlimited off-peak', 'Event access', 'Team locker & analytics'],
    color: 'from-indigo-600 to-indigo-500',
  },
];

const MembershipBooking = () => {
  return (
    <section id="booking" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
          <Sparkles className="h-4 w-4 text-emerald-400" /> Membership & Booking
        </p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Join the Club</h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/70">
          Simple, transparent pricing. Flexible court bookings for every level.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 shadow-xl ${
              p.featured ? 'ring-2 ring-emerald-400' : ''
            }`}
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.color}`} />
            <h3 className="text-xl font-bold text-white">{p.name}</h3>
            <p className="mt-1 text-sm text-white/60">{p.highlight}</p>
            <p className="mt-4 text-3xl font-extrabold text-white">{p.price}</p>
            <ul className="mt-4 space-y-2">
              {p.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {perk}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Join Now
              </a>
              <a
                href="#contact"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Book a Court
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipBooking;
