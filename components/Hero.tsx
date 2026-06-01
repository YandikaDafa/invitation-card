"use client";

export default function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-end pb-24 p-6 text-white overflow-hidden">
      
      {/* Background Image dengan efek zoom halus */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.4] animate-slow-zoom" 
        style={{ backgroundImage: "url('/fotoutama.jpg')" }} 
      />

      {/* Content dengan animasi muncul perlahan */}
      <div className="relative z-10 text-center space-y-6 animate-fade-in-up">
        <p className="text-sm uppercase tracking-[0.4em] text-stone-200 font-medium">
          Pawiwahan
        </p>
        
        <h1 className="text-5xl md:text-7xl font-serif tracking-wide border-b border-white/20 pb-8 mb-4">
          Yandika & Jihyo
        </h1>
        
        <p className="text-lg md:text-xl font-light tracking-[0.3em] italic text-stone-300">
          24 September 2026
        </p>
      </div>

      {/* CSS Tambahan untuk animasi */}
      <style jsx>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-out infinite alternate;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}