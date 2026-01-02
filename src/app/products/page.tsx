import Image from "next/image";

export default function ProductsPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center py-20 px-6"
      style={{ backgroundImage: "url('/home-bg.jpg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto bg-white/60 backdrop-blur-lg rounded-3xl p-10">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#3A2A1F]">
          Featured at Kala Baru
        </h1>

        <p className="text-[#5C4A3A] mb-16 max-w-2xl">
          A selection of drinks and bites we love —
          crafted with care and meant to be enjoyed slowly.
        </p>

        {/* PRODUCT 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <Image
            src="/product-1.jpg"
            alt="Kala Baru signature coffee"
            width={600}
            height={400}
            className="rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#3A2A1F]">
              Kala Baru Signature Coffee
            </h2>
            <p className="text-[#5C4A3A] leading-relaxed">
              Balanced, smooth, and comforting —
              our signature blend made for any moment of the day.
            </p>
          </div>
        </div>

        {/* PRODUCT 2 (ZIG-ZAG) */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="md:order-2">
            <Image
              src="/product-2.jpg"
              alt="Kala Baru non coffee drink"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl font-semibold mb-3 text-[#3A2A1F]">
              Refreshing Non-Coffee Drinks
            </h2>
            <p className="text-[#5C4A3A] leading-relaxed">
              Light, refreshing, and thoughtfully made —
              perfect for slow afternoons or warm days.
            </p>
          </div>
        </div>

        {/* PRODUCT 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/product-3.jpg"
            alt="Kala Baru comfort food"
            width={600}
            height={400}
            className="rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#3A2A1F]">
              Comfort Food
            </h2>
            <p className="text-[#5C4A3A] leading-relaxed">
              Simple bites that pair well with coffee —
              made to share or enjoy on your own.
            </p>
          </div>
        </div>


      {/* PRODUCT 4 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="md:order-2">
            <Image
              src="/product-4.jpg"
              alt="Kala Baru Main Course"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl font-semibold mb-3 text-[#3A2A1F]">
              Yummy Food to satisfy your cravings!
            </h2>
            <p className="text-[#5C4A3A] leading-relaxed">
              Hearty, flavorful main courses you’ll crave from the first bite.
            </p>
          </div>
        </div>
{/* VISUAL PRODUCT GALLERY */}
{/* MORE FROM OUR MENU - CAROUSEL */}
<div className="mt-24">
  <h2 className="text-2xl font-semibold mb-6 text-[#3A2A1F]">
    More from Our Menu
  </h2>

  <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
    
    <img
      src="/product-5.jpg"
      alt="Kala Baru product"
      className="snap-center min-w-[260px] h-[340px] rounded-2xl object-cover"
    />

    <img
      src="/product-6.jpg"
      alt="Kala Baru product"
      className="snap-center min-w-[260px] h-[340px] rounded-2xl object-cover"
    />

    <img
      src="/product-7.jpg"
      alt="Kala Baru product"
      className="snap-center min-w-[260px] h-[340px] rounded-2xl object-cover"
    />

    <img
      src="/product-1.jpg"
      alt="Kala Baru product"
      className="snap-center min-w-[260px] h-[340px] rounded-2xl object-cover"
    />

    <img
      src="/product-2.jpg"
      alt="Kala Baru product"
      className="snap-center min-w-[260px] h-[340px] rounded-2xl object-cover"
    />

    <img
      src="/product-3.jpg"
      alt="Kala Baru product"
      className="snap-center min-w-[260px] h-[340px] rounded-2xl object-cover"
    />

  </div>
</div>




      </div>
    </main>
  );
}
