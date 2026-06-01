"use client";
import { useState, useEffect } from "react";

export default function EventDetails() {
  // Tanggal target: 24 September 2026
  const targetDate = new Date("2026-09-24T07:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="event-details" className="relative py-20 px-6 text-white overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.3]" 
        style={{ backgroundImage: "url('/acara-bg.jpg')" }} 
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        <div>
          <div className="text-amber-500 text-3xl mb-4">❦</div>
          <h2 className="text-xl uppercase tracking-[0.3em] font-semibold">Info Acara</h2>
        </div>

        <div className="space-y-4">
          <p className="flex justify-center items-center gap-2">📍 Banjar Kukuh Kawan, Desa Kerambitan, Tabanan</p>
          <p className="flex justify-center items-center gap-2">📅 Senin, 24 September 2026</p>
          <p className="flex justify-center items-center gap-2">⏰ 07.00 WITA - Selesai</p>
        </div>

        <div className="pt-4">
          <a 
            href="https://maps.google.com" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-200 transition"
          >
            📍 Google Maps
          </a>
        </div>

        {/* Countdown Timer Dinamis */}
        <div className="pt-8 space-y-4">
          <p className="text-sm uppercase tracking-widest italic">Waktu Menuju Acara</p>
          <div className="flex justify-center gap-6 text-3xl font-light">
            <div className="flex flex-col"><span className="text-2xl font-bold">{timeLeft.days}</span><span className="text-[10px] uppercase">Days</span></div>
            <div className="flex flex-col"><span className="text-2xl font-bold">{timeLeft.hours}</span><span className="text-[10px] uppercase">Hours</span></div>
            <div className="flex flex-col"><span className="text-2xl font-bold">{timeLeft.minutes}</span><span className="text-[10px] uppercase">Mins</span></div>
            <div className="flex flex-col"><span className="text-2xl font-bold">{timeLeft.seconds}</span><span className="text-[10px] uppercase">Secs</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}