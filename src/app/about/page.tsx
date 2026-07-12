import Image from "next/image";

export const metadata = {
  title: "Kopi Kala Baru Surabaya | Coffee.Games.Music",
};

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex justify-center py-20 px-6"
      style={{
        backgroundImage: "url('/home-bg.jpg')",
      }}
    >
      {/* OVERLAY GELAP TIPIS */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT BOX */}
      <div className="relative bg-white/85 backdrop-blur-md rounded-3xl max-w-5xl w-full p-10">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-[#3A2A1F]">
          About Kala Baru
        </h1>

        {/* STORY */}
        <p className="text-[#5C4A3A] text-lg leading-relaxed mb-10 max-w-3xl">
         Kala Baru was created as a warm neighborhood coffee shop — a place where people can relax, hang out with friends and family, study, work online, and enjoy games together.
          <br /><br />
          We believe good coffee tastes better when shared, 
          when mornings are unhurried, and when space feels welcoming.
        </p>

        {/* GALLERY */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          
          <div className="min-w-[280px] h-[360px] relative rounded-2xl overflow-hidden">
            <Image
              src="/about-1.jpg"
              alt="Kala Baru ambience"
              fill
              className="object-cover"
            />
          </div>

          <div className="min-w-[280px] h-[360px] relative rounded-2xl overflow-hidden">
            <Image
              src="/about-2.jpg"
              alt="Kala Baru coffee space"
              fill
              className="object-cover"
            />
          </div>

          <div className="min-w-[280px] h-[360px] relative rounded-2xl overflow-hidden">
            <Image
              src="/about-3.jpg"
              alt="Kala Baru interior"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </main>
  );
}
