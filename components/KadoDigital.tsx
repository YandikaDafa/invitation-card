"use client";
import { useState } from "react";

export default function KadoDigital() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset notifikasi setelah 2 detik
  };

  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-stone-300 text-2xl">❦</div>
        <h2 className="text-sm uppercase tracking-[0.3em] text-stone-900 font-semibold">
          Kado Digital
        </h2>
        
        <p className="text-stone-600">
          Bagi keluarga dan sahabat yang ingin mengirimkan hadiah / kado secara cashless, 
          silahkan mengirimkan melalui:
        </p>

        <button 
          onClick={() => setIsOpen(true)}
          className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition inline-flex items-center gap-2"
        >
          <span>Klik Disini</span>
        </button>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full relative shadow-xl">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-stone-400 hover:text-stone-900">
              ✕
            </button>
            <h3 className="font-serif text-xl mb-6">Detail Rekening</h3>
            
            <div className="space-y-4 text-left">
              <div className="p-4 border rounded-lg">
                <p className="text-xs text-stone-500 uppercase">Bank BRI</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg">1234567890</p>
                  <button 
                    onClick={() => copyToClipboard("1234567890")}
                    className="text-xs bg-stone-100 px-3 py-1 rounded hover:bg-stone-200 transition"
                  >
                    {copied ? "Tersalin!" : "Salin"}
                  </button>
                </div>
                <p className="text-sm text-stone-700 mt-1">a.n I Putu Yandika Dafa Pratama</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}