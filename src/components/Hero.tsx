import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid">
      {/* Ambient gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff0080 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)' }} />

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-scanlines opacity-30 pointer-events-none" />

      {/* Horizontal line accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0080]/40 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Location tag */}
        <div className="inline-flex items-center gap-2 border border-[#00f5ff]/30 px-4 py-1.5 mb-10"
          style={{ boxShadow: '0 0 20px rgba(0,245,255,0.1)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] text-[#00f5ff] uppercase">Lille, France</span>
        </div>

        <h1 className="font-display font-black uppercase leading-none mb-6">
          <span className="block text-[clamp(4rem,12vw,9rem)] text-white tracking-tight"
            style={{ textShadow: '0 0 80px rgba(0,245,255,0.2)' }}>
            VOLT
          </span>
          <span className="block text-[clamp(1rem,3vw,2rem)] tracking-[0.5em] text-[#00f5ff] neon-glow-cyan font-mono font-normal mt-2">
            TECHNO BAR
          </span>
        </h1>

        <p className="font-body text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 mt-8">
          Un espace souterrain dédié à la musique techno. Son brutal, lumières
          immersives et une programmation d'artistes d'avant-garde — chaque nuit, une expérience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#programme"
            className="font-mono text-sm tracking-widest bg-[#00f5ff] text-black px-8 py-4 font-bold uppercase hover:bg-white transition-colors duration-300"
            style={{ boxShadow: '0 0 30px rgba(0,245,255,0.4)' }}
          >
            Programme
          </a>
          <a
            href="#réservations"
            className="font-mono text-sm tracking-widest border border-[#ff0080]/60 text-[#ff0080] px-8 py-4 uppercase hover:border-[#ff0080] hover:bg-[#ff0080]/10 transition-all duration-300"
            style={{ boxShadow: '0 0 20px rgba(255,0,128,0.15)' }}
          >
            Réserver une table
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto border-t border-[#00f5ff]/10 pt-8">
          {[
            { val: '600', label: 'Capacité' },
            { val: '2016', label: 'Fondé' },
            { val: '4★', label: 'Avis' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl text-[#00f5ff] neon-glow-cyan">{val}</div>
              <div className="font-mono text-xs text-gray-500 tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#programme"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-[#00f5ff] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
