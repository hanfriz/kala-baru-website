export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex justify-center py-20 px-6"
      style={{
        backgroundImage: "url('/home-bg.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT CARD */}
      <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl max-w-xl w-full p-10 text-center shadow-xl">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#3A2A1F]">
          Contact Kala Baru
        </h1>

        <p className="text-[#5C4A3A] mb-10">
          Stay connected with us or reach out directly.
        </p>

        {/* LINKS */}
        <div className="flex flex-col gap-4">

          {/* WHATSAPP DIRECT */}
          <a
            href="https://wa.me/6287843233260"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#3A2A1F] text-white py-3 rounded-full hover:opacity-90 transition font-medium shadow-md"
          >
            Chat & Reservation via WhatsApp
          </a>

          {/* WHATSAPP COMMUNITY */}
          <a
            href="https://chat.whatsapp.com/BlrrqX4Fbc51ql1RrAnP1W"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25D366] text-white py-3 rounded-full hover:scale-105 transition-transform duration-300 font-medium shadow-md"
          >
            Join Kala Baru WhatsApp Community
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/KOPIKALABARU"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#3A2A1F] text-[#3A2A1F] py-3 rounded-full hover:bg-[#3A2A1F]/10 transition"
          >
            Instagram
          </a>

          {/* TIKTOK */}
          <a
            href="https://tiktok.com/@KOPIKALABARU"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#3A2A1F] text-[#3A2A1F] py-3 rounded-full hover:bg-[#3A2A1F]/10 transition"
          >
            TikTok
          </a>

          {/* GRABFOOD */}
          <a
            href="https://r.grab.com/g/6-20251230_143916_DF7C244F92BE4DDEBE0AE092AB6D9CFA_MEXMPS-6-C7N3A4EEMEJ3JJ"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#3A2A1F] text-[#3A2A1F] py-3 rounded-full hover:bg-[#3A2A1F]/10 transition"
          >
            Order via GrabFood
          </a>

        </div>
      </div>
    </main>
  );
}