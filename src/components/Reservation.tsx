import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '2', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="réservations" className="py-28 px-6 bg-[#050508] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0080]/30 to-transparent" />
      <div className="absolute inset-0 bg-scanlines opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <p className="font-mono text-xs tracking-[0.4em] text-[#ff0080] uppercase mb-3">// Réservations</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-8">
              Réserver<br />
              <span className="text-[#ff0080] neon-glow-pink">une table</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
              Les tables VIP incluent bouteille(s), accès prioritaire et placement préférentiel. Disponible pour groupes de 2 à 12 personnes.
            </p>

            <div className="space-y-6">
              {[
                { label: 'TABLE STANDARD', info: 'Dès 2 personnes — consommation sur place', price: 'Gratuit' },
                { label: 'TABLE VIP', info: '4 personnes min — 1 bouteille incluse', price: 'À partir de 80€' },
                { label: 'LOGE PRIVÉE', info: 'Jusqu\'à 12 personnes — service dédié', price: 'Sur devis' },
              ].map((tier) => (
                <div key={tier.label} className="flex items-start gap-4 p-4 border border-[#1a1a2e] hover:border-[#ff0080]/30 transition-colors">
                  <div className="w-1 h-full min-h-12 bg-[#ff0080]/30 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-white uppercase">{tier.label}</span>
                      <span className="font-display text-sm text-[#ff0080]">{tier.price}</span>
                    </div>
                    <p className="font-mono text-xs text-gray-600 mt-1">{tier.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="border border-[#1a1a2e] p-8 bg-[#080810]"
            style={{ boxShadow: '0 0 40px rgba(255,0,128,0.05)' }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle size={48} className="text-[#00ff88]" style={{ filter: 'drop-shadow(0 0 12px #00ff88)' }} />
                <h3 className="font-display text-xl text-white uppercase tracking-wide">Demande envoyée</h3>
                <p className="font-mono text-xs text-gray-500 tracking-widest">Nous vous confirmerons votre réservation par email dans les 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs tracking-widest text-gray-500 uppercase block mb-2">Nom</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full bg-[#050508] border border-[#1a1a2e] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#ff0080]/60 transition-colors placeholder-gray-700 font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-widest text-gray-500 uppercase block mb-2">Invités</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-[#050508] border border-[#1a1a2e] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#ff0080]/60 transition-colors font-mono appearance-none"
                    >
                      {[2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                        <option key={n} value={n}>{n} personnes</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-gray-500 uppercase block mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full bg-[#050508] border border-[#1a1a2e] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#ff0080]/60 transition-colors placeholder-gray-700 font-mono"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-gray-500 uppercase block mb-2">Date de l'événement</label>
                  <input
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-[#050508] border border-[#1a1a2e] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#ff0080]/60 transition-colors font-mono [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-gray-500 uppercase block mb-2">Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Événement spécial, demandes particulières..."
                    className="w-full bg-[#050508] border border-[#1a1a2e] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#ff0080]/60 transition-colors placeholder-gray-700 font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-[#ff0080] text-white font-mono text-xs tracking-widest uppercase py-4 font-bold hover:bg-[#ff3399] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: '0 0 30px rgba(255,0,128,0.3)' }}
                >
                  {loading ? (
                    <span className="animate-pulse">Envoi en cours...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      Envoyer la demande
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
