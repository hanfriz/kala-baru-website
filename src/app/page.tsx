import Image from "next/image";

export const metadata = {
  title: "Kopi Kala Baru Surabaya | Coffee.Games.Music",
};

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/home-bg.jpg')",
      }}
    >
      <div className="text-center px-6 bg-white/70 backdrop-blur-sm rounded-2xl py-10">

        <div className="mb-6 flex justify-center">
          <Image
            src="/logo-kala-baru.png"
            alt="Kala Baru Coffee Shop"
            width={260}
            height={260}
            priority
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-[#3A2A1F] mb-3">
          Coffee, Community, Comfort
        </h1>

        <p className="text-[#5C4A3A] max-w-md mx-auto mb-8">
          A warm space to slow down, enjoy good coffee, listen to live music
          and share simple moments together.
        </p>

        <a
          href="https://wa.me/6287843233260"
          target="_blank"
          className="inline-block bg-[#3A2A1F] text-white px-10 py-3 rounded-full hover:opacity-90 transition"
        >
          Reserve via WhatsApp
        </a>
      </div>
    </main>
  );
}