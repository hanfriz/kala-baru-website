export default function DieGoldinselPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Die Goldinsel
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Die Goldinsel adalah permainan petualangan bertema perburuan harta
          karun. Para pemain menjelajahi pulau misterius untuk menemukan emas,
          mengumpulkan harta sebanyak mungkin, lalu kembali ke pelabuhan dengan
          selamat sebelum pemain lain. Strategi, keberanian, dan sedikit
          keberuntungan akan menentukan siapa yang menjadi pemburu harta
          terbaik.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Letakkan papan permainan di tengah meja.</li>

          <li>
            Tempatkan seluruh token emas dan harta karun pada lokasi yang
            telah ditentukan sesuai aturan permainan.
          </li>

          <li>
            Setiap pemain memilih satu pion dan meletakkannya di titik awal.
          </li>

          <li>
            Siapkan kartu atau dadu (jika digunakan pada edisi permainan)
            sesuai petunjuk permainan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Pemain bergiliran menggerakkan pion sesuai hasil dadu atau aturan
            pergerakan pada permainan.
          </li>

          <li>
            Jelajahi berbagai area di pulau untuk menemukan emas dan
            harta karun.
          </li>

          <li>
            Beberapa lokasi dapat memberikan hadiah, sementara lokasi lain
            mungkin berisi tantangan atau rintangan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Mengumpulkan Harta
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Saat mencapai lokasi harta, pemain dapat mengambil token emas
            atau harta sesuai aturan permainan.
          </li>

          <li>
            Semakin banyak harta yang dikumpulkan, semakin besar peluang
            memenangkan permainan.
          </li>

          <li>
            Namun, membawa terlalu banyak harta dapat membuat perjalanan
            kembali menjadi lebih berisiko.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Strategi Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Tentukan kapan harus terus mencari harta dan kapan saatnya
            kembali ke pelabuhan.
          </li>

          <li>
            Perhatikan posisi pemain lain agar tidak kehilangan kesempatan
            memperoleh harta terbaik.
          </li>

          <li>
            Kelola risiko dengan baik agar tidak kehilangan harta yang telah
            dikumpulkan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Akhir Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Permainan berakhir ketika kondisi akhir permainan telah terpenuhi
            sesuai aturan edisi yang dimainkan.
          </li>

          <li>
            Seluruh pemain menghitung jumlah emas dan harta yang berhasil
            mereka kumpulkan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Pemain dengan total nilai emas dan harta karun terbanyak menjadi
          pemenang permainan.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://boardgamegeek.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Die Goldinsel
          </a>
        </p>

      </div>

    </main>
  );
}