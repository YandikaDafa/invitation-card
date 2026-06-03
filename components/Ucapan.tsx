"use client";

export default function RsvpForm() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-amber-600 mb-2">❦</div>
          <h2 className="text-xl font-semibold tracking-widest text-stone-800">KONFIRMASI TAMU</h2>
        </div>

        {/* Form Container */}
        <div className="bg-stone-800 rounded-t-[100px] p-8 md:p-12">
          <p className="text-stone-300 text-center mb-8">
            Dimohon kesediaannya untuk mengisi form kehadiran undangan kami
          </p>

          <form className="space-y-4">
            <input type="text" placeholder="Nama" className="w-full p-3 rounded bg-white text-stone-800 focus:outline-none" />
            <input type="number" placeholder="Jumlah" className="w-full p-3 rounded bg-white text-stone-800 focus:outline-none" />
            
            <select className="w-full p-3 rounded bg-white text-stone-500 focus:outline-none">
              <option>Silahkan pilih</option>
              <option>Hadir</option>
              <option>Tidak Hadir</option>
            </select>

            <textarea placeholder="Ketik Ucapan / Doa" rows={4} className="w-full p-3 rounded bg-white text-stone-800 focus:outline-none"></textarea>

            <button type="submit" className="w-full p-4 bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold uppercase transition">
              Kirim Data
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}