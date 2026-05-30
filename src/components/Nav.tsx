import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const links = ['Programme', 'Artistes', 'Réservations', 'Gallery', 'Contact'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050508]/95 backdrop-blur-md border-b border-[#00f5ff]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Zap
              size={22}
              className="text-[#00f5ff] group-hover:animate-pulse-neon transition-all"
              fill="currentColor"
            />
            <div className="absolute inset-0 blur-sm text-[#00f5ff]">
              <Zap size={22} fill="currentColor" />
            </div>
          </div>
          <span className="font-display text-lg font-700 tracking-widest text-white neon-glow-cyan">
            VOLT
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs tracking-widest text-gray-400 hover:text-[#00f5ff] transition-colors duration-300 uppercase relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00f5ff] group-hover:w-full transition-all duration-300 shadow-[0_0_6px_#00f5ff]" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#réservations"
          className="hidden md:block font-mono text-xs tracking-widest border border-[#00f5ff] text-[#00f5ff] px-5 py-2 hover:bg-[#00f5ff] hover:text-black transition-all duration-300 uppercase"
          style={{ boxShadow: '0 0 12px rgba(0,245,255,0.3)' }}
        >
          Réserver
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00f5ff] p-1"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#050508]/98 backdrop-blur-xl border-t border-[#00f5ff]/20 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm tracking-widest text-gray-400 hover:text-[#00f5ff] transition-colors uppercase"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
