import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

const events = [
  {
    date: 'VEN 06 JUIN',
    title: 'RESOM b2b DYEN',
    genre: 'Hard Techno / Industrial',
    time: '23:00 — 06:00',
    location: 'Main Floor',
    price: '12€',
    highlight: true,
    img: 'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'SAM 07 JUIN',
    title: 'OBSCURA COLLECTIVE',
    genre: 'Dark Ambient / EBM',
    time: '22:00 — 05:00',
    location: 'Main Floor',
    price: '10€',
    highlight: false,
    img: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'VEN 13 JUIN',
    title: 'KLONK & STRÏKE',
    genre: 'Acid / Rave',
    time: '23:00 — 07:00',
    location: 'Main Floor + Terrace',
    price: '15€',
    highlight: false,
    img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'SAM 14 JUIN',
    title: 'SUBMERGE NIGHT',
    genre: 'Detroit Techno',
    time: '22:00 — 06:00',
    location: 'Main Floor',
    price: '18€',
    highlight: false,
    img: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'VEN 20 JUIN',
    title: 'VOID FREQUENCY',
    genre: 'Noise / Experimental',
    time: '23:00 — 06:00',
    location: 'Cave Room',
    price: '8€',
    highlight: false,
    img: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'SAM 21 JUIN',
    title: 'FÊTE DE LA MUSIQUE EDITION',
    genre: 'All Genres / Free Entry',
    time: '20:00 — 06:00',
    location: 'All Floors',
    price: 'Gratuit',
    highlight: true,
    img: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Programme() {
  return (
    <section id="programme" className="py-28 px-6 bg-[#050508] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.4em] text-[#00f5ff] uppercase mb-3">// Programme</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Événements à venir
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#00f5ff]/10">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <article
      className={`group relative bg-[#050508] overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#0a0a15]`}
    >
      {event.highlight && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#00f5ff]"
          style={{ boxShadow: '0 0 10px #00f5ff' }} />
      )}

      <div className="relative h-48 overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="font-mono text-xs tracking-widest text-[#00f5ff] bg-[#050508]/80 px-3 py-1 border border-[#00f5ff]/30">
            {event.date}
          </span>
        </div>
        {event.highlight && (
          <div className="absolute top-4 right-4">
            <span className="font-mono text-xs tracking-widest text-black bg-[#00f5ff] px-3 py-1 font-bold">
              FEATURED
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white group-hover:text-[#00f5ff] transition-colors duration-300 mb-1 tracking-wide">
          {event.title}
        </h3>
        <p className="font-mono text-xs text-[#ff0080] tracking-widest mb-4 uppercase">{event.genre}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-500">
            <Clock size={12} />
            <span className="font-mono text-xs">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={12} />
            <span className="font-mono text-xs">{event.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-[#00ff88]">{event.price}</span>
          <a
            href="#réservations"
            className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-gray-500 hover:text-[#00f5ff] transition-colors group/btn"
          >
            <span className="uppercase">Tickets</span>
            <ExternalLink size={11} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-px bg-[#00f5ff] group-hover:w-full transition-all duration-500"
        style={{ boxShadow: '0 0 6px #00f5ff' }} />
    </article>
  );
}
