import { Instagram, Globe } from 'lucide-react';

const artists = [
  {
    name: 'RESOM',
    origin: 'Bruxelles, BE',
    genre: 'Hard Techno',
    bio: 'Pioneer of the Belgian hard techno scene, known for relentless high-BPM sets that push the boundary of the dancefloor.',
    img: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#00f5ff',
  },
  {
    name: 'DYEN',
    origin: 'Paris, FR',
    genre: 'Industrial / EBM',
    bio: 'Dark, industrial textures woven with hypnotic rhythms. DYEN creates immersive sonic landscapes from the underground.',
    img: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#ff0080',
  },
  {
    name: 'KLONK',
    origin: 'Berlin, DE',
    genre: 'Acid Techno',
    bio: 'Berlin\'s acid architect. Klonk builds tension through layered 303 patterns and thunderous kick drums.',
    img: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#00ff88',
  },
  {
    name: 'STRÏKE',
    origin: 'Lille, FR',
    genre: 'Rave / Hardcore',
    bio: 'Local hero of the Lille underground. STRÏKE has been shaping the northern French scene since 2018.',
    img: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#ffff00',
  },
];

export default function Artists() {
  return (
    <section id="artistes" className="py-28 px-6 bg-[#080810] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0080]/30 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.4em] text-[#ff0080] uppercase mb-3">// Artistes</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Residents &<br />Invités
            </h2>
          </div>
          <a
            href="#programme"
            className="self-start md:self-end font-mono text-xs tracking-widest text-gray-500 hover:text-[#ff0080] transition-colors uppercase border-b border-gray-700 hover:border-[#ff0080] pb-0.5"
          >
            Voir tous les artistes →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtistCard({ artist }: { artist: typeof artists[0] }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      <div className="relative h-80 overflow-hidden">
        <img
          src={artist.img}
          alt={artist.name}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-70 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/40 to-transparent" />

        {/* Color accent on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at center, ${artist.color}, transparent)` }}
        />

        {/* Social icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
          <button className="p-2 bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors">
            <Instagram size={14} style={{ color: artist.color }} />
          </button>
          <button className="p-2 bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors">
            <Globe size={14} style={{ color: artist.color }} />
          </button>
        </div>
      </div>

      <div className="p-4 bg-[#0a0a15] border border-[#1a1a2e] group-hover:border-opacity-100 transition-all duration-300"
        style={{ borderColor: `${artist.color}20` }}>
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-display text-lg font-bold text-white tracking-wider">{artist.name}</h3>
          <span
            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
            style={{ backgroundColor: artist.color, boxShadow: `0 0 6px ${artist.color}` }}
          />
        </div>
        <p className="font-mono text-xs tracking-widest mb-2" style={{ color: artist.color }}>{artist.genre}</p>
        <p className="text-gray-600 text-xs leading-relaxed mb-3">{artist.bio}</p>
        <p className="font-mono text-xs text-gray-700 tracking-widest">{artist.origin}</p>
      </div>

      <div
        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: artist.color, boxShadow: `0 0 8px ${artist.color}` }}
      />
    </div>
  );
}
