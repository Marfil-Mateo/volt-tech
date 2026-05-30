import { MapPin, Clock, Mail, Phone, Instagram, Music } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#080810] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.4em] text-[#00f5ff] uppercase mb-3">// Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Nous trouver
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Map placeholder */}
          <div className="lg:col-span-2 relative overflow-hidden h-80 lg:h-auto bg-[#050508] border border-[#1a1a2e]"
            style={{ minHeight: '320px' }}>
            <img
              src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Lille cityscape"
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-grid" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-[#00f5ff] mb-4"
                  style={{ boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}>
                  <MapPin size={20} className="text-[#00f5ff]" />
                </div>
                <p className="font-display text-lg font-bold text-white tracking-wide">12 Rue de Fives</p>
                <p className="font-mono text-xs text-gray-500 mt-1 tracking-widest">59800 Lille, France</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-mono text-xs tracking-widest text-[#00f5ff] border border-[#00f5ff]/30 px-4 py-2 hover:bg-[#00f5ff]/10 transition-colors uppercase"
                >
                  Ouvrir dans Maps
                </a>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <InfoBlock
              icon={Clock}
              label="Horaires"
              color="#00f5ff"
              lines={[
                'Vendredi : 23h — 06h',
                'Samedi : 22h — 07h',
                'Événements spéciaux : voir programme',
              ]}
            />
            <InfoBlock
              icon={Mail}
              label="Email"
              color="#ff0080"
              lines={['contact@volt-lille.fr', 'booking@volt-lille.fr']}
            />
            <InfoBlock
              icon={Phone}
              label="Téléphone"
              color="#00ff88"
              lines={['+33 3 20 XX XX XX', 'Du lun. au ven., 14h–19h']}
            />

            <div>
              <p className="font-mono text-xs tracking-widest text-gray-500 uppercase mb-4">Réseaux sociaux</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram', color: '#ff0080' },
                  { icon: Music, label: 'SoundCloud', color: '#00f5ff' },
                ].map(({ icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex items-center gap-2 border border-[#1a1a2e] p-3 hover:border-current transition-all duration-300 group"
                    style={{ color }}
                  >
                    <Icon size={16} />
                    <span className="font-mono text-xs tracking-widest hidden sm:block">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  lines,
  color,
}: {
  icon: React.FC<{ size: number; style?: React.CSSProperties }>;
  label: string;
  lines: string[];
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={14} style={{ color }} />
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color }}>{label}</span>
      </div>
      <div className="space-y-1 pl-5 border-l border-[#1a1a2e]">
        {lines.map((line, i) => (
          <p key={i} className="font-mono text-xs text-gray-500">{line}</p>
        ))}
      </div>
    </div>
  );
}
