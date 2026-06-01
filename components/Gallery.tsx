"use client";
import { useEffect, useRef } from "react";

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = galleryRef.current?.querySelectorAll(".gallery-item");
    images?.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-center text-stone-900 mb-12">
          Wedding Gallery
        </h2>
        
        {/* Container dengan ref agar observer bekerja */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Foto Besar Kiri */}
          <div className="gallery-item md:col-span-1 opacity-0 translate-y-10 transition-all duration-700 delay-100 group overflow-hidden rounded-lg">
            <img 
              src="/prewed1.jpg" 
              alt="Momen 1" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          {/* Kolom Tengah (2 Foto Vertikal) */}
          <div className="flex flex-col gap-4">
            <div className="gallery-item opacity-0 translate-y-10 transition-all duration-700 delay-200 group overflow-hidden rounded-lg">
              <img 
                src="/prewed2.jpg" 
                alt="Momen 2" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="gallery-item opacity-0 translate-y-10 transition-all duration-700 delay-300 group overflow-hidden rounded-lg">
              <img 
                src="/prewed3.jpg" 
                alt="Momen 3" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Foto Besar Kanan */}
          <div className="gallery-item md:col-span-1 opacity-0 translate-y-10 transition-all duration-700 delay-400 group overflow-hidden rounded-lg">
            <img 
              src="/prewed4.jpg" 
              alt="Momen 4" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}