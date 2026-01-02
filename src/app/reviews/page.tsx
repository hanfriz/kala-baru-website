import Script from "next/script";

export default function ReviewsPage() {
  return (
    <>
      {/* SCRIPT ELF SIGHT */}
      <Script
        src="https://apps.elfsight.com/p/platform.js"
        strategy="lazyOnload"
      />

      <main
        className="min-h-screen bg-cover bg-center flex justify-center py-20 px-6"
        style={{ backgroundImage: "url('/home-bg.jpg')" }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* CONTENT CARD */}
        <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl max-w-5xl w-full p-10">

          <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-[#3A2A1F]">
            What People Say About Kala Baru
          </h1>

          <p className="text-[#5C4A3A] mb-8">
            Real reviews from our customers on Google.
          </p>

          {/* WIDGET GOOGLE REVIEWS */}
         <div className="elfsight-app-1922602a-deca-4ec8-97a5-4f07d4bec3c8" data-elfsight-app-lazy></div>

        </div>
      </main>
    </>
  );
}
