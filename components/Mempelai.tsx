export default function Mempelai() {
  return (
    <section id="mempelai" className="py-24 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* Bagian Pembuka */}
        <div className="space-y-8 mb-24">
          <p className="text-5xl text-stone-800 font-serif">ॐ</p>
          <p className="text-stone-700 leading-relaxed max-w-xl mx-auto italic text-lg font-light">
            Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Resepsi Upacara Manusa Yadnya (Pawiwahan/Pernikahan) Putra dan Putri kami
          </p>
        </div>

        {/* Header Sang Mempelai */}
        <div className="mb-20">
          <div className="text-amber-700 text-3xl mb-4">❦</div> 
          <h2 className="text-stone-900 uppercase tracking-[0.4em] text-sm font-bold">Sang Mempelai</h2>
        </div>

        {/* Grid Mempelai */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-8">
          
          {[
            {
              name: "I Putu Yandika Dafa Pratama",
              parents: "Putra dari Bapak Nyoman dengan Ibu Komang",
              address: "Banjar Kukuh, Desa Kukuh, Tabanan",
              img: "/yandika.jpg",
              ig: "yandika_dafa"
            },
            {
              name: "Park Jihyo",
              parents: "Putri dari Bapak Kim Jong Un dengan Ibu Kim",
              address: "Banjar Dauh, Desa Songnam, Korea",
              img: "/jihyo.jpg",
              ig: "_zyozyo"
            }
          ].map((mempelai, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Frame Foto Artistik */}
              <div className="relative p-2 border border-stone-200 rounded-full mb-8 transition-transform duration-500 group-hover:scale-105">
                <div className="p-1 border border-stone-300 rounded-full">
                  <img 
                    src={mempelai.img} 
                    alt={mempelai.name} 
                    className="w-56 h-56 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-serif text-stone-900 mb-4">{mempelai.name}</h3>
              <div className="space-y-1 text-stone-500 text-sm italic mb-6">
                <p>{mempelai.parents}</p>
                <p>{mempelai.address}</p>
              </div>
              
              <a 
                href={`https://instagram.com/${mempelai.ig}`} 
                target="_blank"
                className="text-amber-800 font-semibold border-b border-amber-800 hover:text-stone-900 hover:border-stone-900 transition-all"
              >
                @{mempelai.ig}
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}