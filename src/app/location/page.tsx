export const metadata = {
  title: "Kopi Kala Baru Surabaya | Coffee.Games.Music",
};

export default function LocationPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex justify-center py-20 px-6"
      style={{
        backgroundImage: "url('/home-bg.jpg')",
      }}
    >
      {/* OVERLAY TIPIS */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT BOX */}
      <div className="relative bg-white/55 backdrop-blur-lg rounded-3xl max-w-5xl w-full p-10">


        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-[#3A2A1F]">
          Our Location
        </h1>

        {/* DESCRIPTION */}
        <p className="text-[#5C4A3A] text-lg mb-10 max-w-3xl">
          Find us in the heart of the neighborhood and enjoy
          a calm space for good coffee and good moments.
        </p>

        {/* GOOGLE MAP */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-8 shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.638888181639!2d112.71289327505873!3d-7.281864392725379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb6a631e8b1b%3A0xc78a41b45a62fdf3!2sKopi%20Kala%20Baru!5e0!3m2!1sen!2sde!4v1767099529615!5m2!1sen!2sde"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* ADDRESS */}
        <div className="text-[#3A2A1F] text-lg">
          <p className="font-semibold">Kopi Kala Baru</p>
          <p>Jl. Dukuh Kupang XX no 10a</p>
          <p>Surabaya, Indonesia</p>
        </div>

      </div>
    </main>
  );
}
