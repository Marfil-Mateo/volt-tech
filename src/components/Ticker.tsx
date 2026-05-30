const items = [
  'TECHNO', 'AMBIENT', 'INDUSTRIAL', 'EBM', 'ACID', 'DARK WAVE',
  'HARD TECHNO', 'TECHNO', 'AMBIENT', 'INDUSTRIAL', 'EBM', 'ACID', 'DARK WAVE', 'HARD TECHNO',
];

export default function Ticker() {
  return (
    <div className="py-4 border-y border-[#00f5ff]/20 overflow-hidden bg-[#050508]"
      style={{ boxShadow: '0 0 30px rgba(0,245,255,0.05)' }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="font-mono text-xs tracking-[0.4em] uppercase text-gray-600">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
