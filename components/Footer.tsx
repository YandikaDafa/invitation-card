"use client";

// Menggunakan impor default agar lebih kompatibel dengan berbagai versi
import * as LucideIcons from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-stone-900 text-white text-center">
      <div className="max-w-xl mx-auto space-y-8">
        
        <p className="text-sm text-stone-300 leading-relaxed italic">
          Merupakan suatu kehormatan dan kebahagiaan kami, apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.
        </p>

        <p className="text-4xl text-stone-100">ॐ</p>

        <div className="space-y-2">
          <h2 className="text-2xl font-serif">Kami Yang Berbahagia</h2>
          <p className="text-amber-500 font-medium">Yandika & Jihyo</p>
        </div>

        <div className="pt-8 space-y-6">
          <div className="flex justify-center gap-4">
            {/* Ikon Instagram */}
            <a href="#" className="p-3 border border-stone-700 rounded-full hover:bg-stone-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            </a>

            {/* Ikon WhatsApp */}
            <a href="#" className="p-3 border border-stone-700 rounded-full hover:bg-stone-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            </a>

            {/* Ikon TikTok */}
            <a href="#" className="p-3 border border-stone-700 rounded-full hover:bg-stone-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
            </a>
            </div>

          <p className="text-xs text-stone-500">
            © 2026 Undangan Online by <span className="text-stone-300">yandikadafa</span>
          </p>
        </div>
      </div>
    </footer>
  );
}