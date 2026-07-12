export default function HalliGalliPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Halli Galli
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Halli Galli adalah permainan kartu yang menguji kecepatan,
          konsentrasi, dan refleks. Pemain harus memperhatikan jumlah buah
          yang muncul pada kartu. Saat terdapat tepat <b>5 buah</b> dengan
          jenis yang sama di meja, pemain harus segera membunyikan bel untuk
          memenangkan ronde.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Letakkan bel di tengah meja agar mudah dijangkau semua pemain.</li>

          <li>
            Kocok seluruh kartu kemudian bagikan secara merata kepada setiap
            pemain dalam keadaan tertutup.
          </li>

          <li>
            Pemain tidak boleh melihat isi tumpukan kartunya sebelum permainan dimulai.
          </li>

          <li>
            Tentukan pemain pertama, lalu permainan berjalan searah jarum jam.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Membuka Kartu
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pada giliran Anda, buka satu kartu dari tumpukan dan letakkan
            menghadap ke atas di depan Anda.
          </li>

          <li>
            Kartu harus dibalik menjauhi diri sendiri agar semua pemain dapat
            melihatnya secara bersamaan.
          </li>

          <li>
            Permainan berlangsung cepat dan pemain terus membuka kartu secara
            bergantian.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Perhatikan Jumlah Buah
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Setiap kartu menampilkan satu jenis buah dengan jumlah antara
          1 hingga 5 buah.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>🍓 Stroberi</li>
          <li>🍌 Pisang</li>
          <li>🍋 Lemon</li>
          <li>🥭 Plum</li>
        </ul>

        <p className="dark:text-gray-300">
          Hitung jumlah buah dengan jenis yang sama dari seluruh kartu yang
          terbuka di meja.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Bunyikan Bel
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Jika jumlah salah satu jenis buah tepat <b>5 buah</b>,
            semua pemain boleh langsung membunyikan bel.
          </li>

          <li>
            Pemain yang paling cepat membunyikan bel memenangkan ronde.
          </li>

          <li>
            Pemenang mengambil seluruh kartu yang terbuka di meja dan
            meletakkannya di bawah tumpukan kartunya sendiri.
          </li>

          <li>
            Jika pemain membunyikan bel secara salah (jumlah buah belum tepat
            5), pemain tersebut harus memberikan kartu sesuai aturan permainan
            kepada pemain lain.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Lanjutkan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Setelah ronde selesai, permainan dilanjutkan dari pemain berikutnya.
          </li>

          <li>
            Pemain yang kehabisan kartu tidak lagi membuka kartu, tetapi tetap
            boleh membunyikan bel selama masih ada kesempatan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Permainan berakhir ketika hanya tersisa satu pemain yang masih
          memiliki kartu. Pemain tersebut dinyatakan sebagai pemenang.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://boardgamegeek.com/boardgame/2944/halli-galli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Halli Galli
          </a>
        </p>

      </div>

    </main>
  );
}