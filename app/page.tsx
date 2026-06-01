"use client";
import { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import MusicPlayer from "@/components/MusicPlayer";
import Gallery from "@/components/Gallery";
import Mempelai from "@/components/Mempelai";
import KadoDigital from "@/components/KadoDigital";
import Footer from "@/components/Footer";


function InvitationContent({ setIsOpened, musicRef }: any) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white text-center p-6">
      {/* Background Image - Pastikan kamu memiliki file foto di folder /public */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.4]" 
        style={{ backgroundImage: "url('/background-cover.jpg')" }} 
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-stone-300">
          The Wedding of
        </p>
        
        <h1 className="text-5xl md:text-6xl font-serif tracking-wide border-b border-white/20 pb-4 mb-2">
          Yandika & Jihyo
        </h1>
        
        <div className="space-y-1">
          <p className="text-sm font-light uppercase tracking-widest">Kepada Yth.</p>
          <p className="text-2xl font-serif italic font-medium">{guestName}</p>
        </div>

        <div className="pt-8">
          <button 
            onClick={() => {
                setIsOpened(true);
                musicRef.current?.playMusic();
            }}
            className="group flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white hover:text-stone-900 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
    );
  }

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const musicRef = useRef<any>(null);

  return (
    <main className="relative">
      {!isOpened && (
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Memuat...</div>}>
          <InvitationContent setIsOpened={setIsOpened} musicRef={musicRef} />
        </Suspense>
      )}

      <div className={isOpened ? "block" : "hidden"}>
        <Hero onOpen={() => {}} />
        <Mempelai />
        <EventDetails />
        <Gallery />
        <KadoDigital />
        <Footer />
        <MusicPlayer ref={musicRef} />
      </div>
    </main>
  );
}