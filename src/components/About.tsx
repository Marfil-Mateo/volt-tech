import { Volume2, Zap, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Volume2,
    title: 'Son Funktion-One',
    desc: 'Un système Funktion-One calibré pour une clarté et une puissance inégalées — chaque beat ressenti dans les os.',
    color: '#00f5ff',
  },
  {
    icon: Zap,
    title: 'Éclairage Immersif',
    desc: 'Rig de lumières programmables, lasers et hazes synchronisés avec la musique pour un spectacle total.',
    color: '#ff0080',
  },
  {
    icon: Users,
    title: 'Communauté',
    desc: 'Depuis 2016, VOLT est le centre de la scène underground lilloise — un espace bienveillant pour tous.',
    color: '#00ff88',
  },
  {
    icon: Shield,
    title: 'Un Endroit Plus Sûr',
    desc: 'Equipe de sécurité formée, politique de tolérance zéro contre le harcèlement et espace de pause accessible.',
    color: '#ffff00',
  },
];

export default function About() {
  return (
    <section className="py-28 px-6 bg-[#080810] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative vertical lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00f5ff]/20 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ff0080]/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="font-mono text-xs tracking-[0.4em] text-[#00f5ff] uppercase mb-3">// À propos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-8 leading-tight">
              Le Son de<br />
              <span className="text-[#00f5ff] neon-glow-cyan">Lille</span>
            </h2>
            <div className="space-y-5 text-gray-400 text-sm leading-relaxed">
              <p>
                VOLT est né en 2016 d'une conviction simple : Lille méritait un club dédié à la culture techno dans toute sa diversité. De l'acid au hard techno, de l'ambient industriel à l'EBM — toutes les sous-cultures de la musique électronique ont leur place ici.
              </p>
              <p>
                Installé dans les caves d'un bâtiment industriel du XIXe siècle au coeur de Fives, VOLT allie une architecture brute et authentique à une technologie sonore et lumineuse de pointe.
              </p>
              <p>
                Chaque week-end, notre programmation mêle artistes locaux émergents et têtes d'affiche internationales — une fenêtre ouverte sur la scène mondiale depuis le nord de la France.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#contact"
                className="font-mono text-xs tracking-widest border border-[#00f5ff]/40 text-[#00f5ff] px-6 py-3 uppercase hover:bg-[#00f5ff]/10 transition-all duration-300"
              >
                Nous trouver
              </a>
            </div>
          </div>

          {/* Right features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-5 border border-[#1a1a2e] bg-[#050508]/80 hover:border-opacity-50 transition-all duration-300 group"
                style={{ '--hover-color': f.color } as React.CSSProperties}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border border-current mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: f.color, borderColor: `${f.color}40`, boxShadow: `0 0 12px ${f.color}20` }}
                >
                  <f.icon size={18} />
                </div>
                <h3 className="font-mono text-xs font-bold tracking-widest text-white uppercase mb-2">{f.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
