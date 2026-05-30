import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a2e] bg-[#050508] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-[#00f5ff]" fill="currentColor" />
            <span className="font-display text-base font-bold tracking-widest text-white">VOLT</span>
            <span className="font-mono text-xs text-gray-700 ml-2 tracking-widest">TECHNO BAR</span>
          </div>

          <div className="flex items-center gap-6">
            {['Programme', 'Artistes', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs tracking-widest text-gray-700 hover:text-[#00f5ff] transition-colors uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-gray-800 tracking-widest">
            © 2026 VOLT Lille. Tous droits réservés.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#0d0d1a]">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <span className="font-mono text-xs text-gray-800 tracking-widest">L'abus d'alcool est dangereux pour la santé. À consommer avec modération.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
