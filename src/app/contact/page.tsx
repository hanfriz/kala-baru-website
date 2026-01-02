import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex justify-center py-20 px-6"
      style={{
        backgroundImage: "url('/home-bg.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT CARD */}
      <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl max-w-xl w-full p-10 text-center">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#3A2A1F]">
          Contact Kala Baru
        </h1>

        <p className="text-[#5C4A3A] mb-10">
          Stay connected with us or reach out directly.
        </p>

        {/* LINKS */}
        <div className="flex flex-col gap-4">

          {/* WHATSAPP */}
          <Link
            href="https://wa.me/6287843233260"
            target="_blank"
            className="block bg-[#3A2A1F] text-white py-3 rounded-full hover:opacity-90 transition"
          >
            Chat & Reservation via WhatsApp
          </Link>

          {/* INSTAGRAM */}
          <Link
            href="https://instagram.com/KOPIKALABARU"
            target="_blank"
            className="block border border-[#3A2A1F] text-[#3A2A1F] py-3 rounded-full hover:bg-[#3A2A1F]/10 transition"
          >
            Instagram
          </Link>

          {/* TIKTOK */}
          <Link
            href="https://tiktok.com/@KOPIKALABARU"
            target="_blank"
            className="block border border-[#3A2A1F] text-[#3A2A1F] py-3 rounded-full hover:bg-[#3A2A1F]/10 transition"
          >
            TikTok
          </Link>

          {/* GRABFOOD */}
          <Link
            href="https://r.grab.com/g/6-20251230_143916_DF7C244F92BE4DDEBE0AE092AB6D9CFA_MEXMPS-6-C7N3A4EEMEJ3JJ"
            target="_blank"
            className="block border border-[#3A2A1F] text-[#3A2A1F] py-3 rounded-full hover:bg-[#3A2A1F]/10 transition"
          >
            Order via GrabFood
          </Link>

        </div>
      </div>
    </main>
  );
}
