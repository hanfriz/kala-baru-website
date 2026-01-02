export default function PromotionsPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex justify-center py-20 px-6"
      style={{ backgroundImage: "url('/home-bg.jpg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* CONTENT CARD */}
      <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl max-w-4xl w-full p-10">

        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-[#3A2A1F]">
          Promotions
        </h1>

        <p className="text-[#5C4A3A] mb-10 max-w-2xl">
          Special offers and little treats we prepare from time to time —
          just our way of saying thank you.
        </p>

        {/* PROMO ITEM */}
        <div className="border border-[#3A2A1F]/20 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2 text-[#3A2A1F]">
            Second Purchase – Same Day
            
          </h2>
      <img
  src="/stamp.png"
  alt="Second Purchase Same Day Only"
  className="snap-center min-w-[160px] h-[160px] object-contain"
/>
       

          <p className="text-[#5C4A3A]">
            Enjoy a special treat on your second purchase on the same day.
            Just show your stamp at the counter.
          </p>
        </div>

        {/* PLACEHOLDER PROMO */}
        <div className="border border-dashed border-[#3A2A1F]/30 rounded-2xl p-6 text-[#5C4A3A]">
          More promotions coming soon.
        </div>

      </div>
    </main>
  );
}
