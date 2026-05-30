const photos = [
  {
    src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'col-span-2 row-span-2',
    alt: 'Main floor crowd',
  },
  {
    src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: 'col-span-1 row-span-1',
    alt: 'DJ booth',
  },
  {
    src: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: 'col-span-1 row-span-1',
    alt: 'Light show',
  },
  {
    src: 'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'col-span-1 row-span-2',
    alt: 'Stage performance',
  },
  {
    src: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: 'col-span-1 row-span-1',
    alt: 'Bar area',
  },
  {
    src: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: 'col-span-1 row-span-1',
    alt: 'Club interior',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 bg-[#050508] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.4em] text-[#00ff88] uppercase mb-3">// Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            L'Atmosphere
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-2 h-[500px] md:h-[600px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} overflow-hidden group cursor-pointer relative`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <p className="font-mono text-xs tracking-widest text-gray-700 mt-6 text-center uppercase">
          Chaque soirée est unique — suivez-nous sur Instagram @volt.lille
        </p>
      </div>
    </section>
  );
}
