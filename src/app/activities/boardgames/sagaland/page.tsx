export default function SagalandPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Sagaland
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Sagaland (juga dikenal dengan nama <i>Enchanted Forest</i>) adalah
          permainan papan bertema dongeng fantasi. Pemain menjelajahi Hutan
          Ajaib untuk menemukan berbagai harta karun tersembunyi dan
          membawanya kepada Raja. Permainan ini menggabungkan unsur
          keberuntungan, strategi, dan daya ingat.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Letakkan papan permainan di tengah meja.
          </li>

          <li>
            Tempatkan <b>13 pohon</b> secara acak pada titik-titik biru
            di sepanjang jalur hutan.
          </li>

          <li>
            Setiap pohon menyembunyikan satu gambar harta karun di bagian bawahnya.
          </li>

          <li>
            Kocok seluruh kartu harta karun lalu letakkan di area Kastil.
          </li>

          <li>
            Balik satu kartu paling atas sebagai target benda yang sedang dicari Raja.
          </li>

          <li>
            Semua pemain meletakkan pion di area <b>Desa (Start)</b>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Menjelajahi Hutan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pada setiap giliran, lempar <b>2 dadu</b>.
          </li>

          <li>
            Kedua angka dadu digunakan secara terpisah.
            Misalnya jika mendapatkan angka 3 dan 4, Anda boleh bergerak
            3 langkah lalu 4 langkah, atau sebaliknya.
          </li>

          <li>
            Anda juga boleh berbelok di persimpangan jalan di antara kedua
            pergerakan tersebut.
          </li>

          <li>
            Jika berhenti tepat di titik biru dekat pohon,
            Anda boleh mengangkat pohon tersebut secara diam-diam
            untuk melihat gambar harta yang tersembunyi.
          </li>

          <li>
            Setelah melihatnya, letakkan kembali pohon tersebut dan
            ingat baik-baik lokasinya.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Interaksi Antar Pemain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Jika pion Anda berhenti tepat di kotak yang ditempati
            pemain lain, pemain tersebut harus kembali ke Desa.
          </li>

          <li>
            Aturan ini membuat permainan menjadi lebih kompetitif karena
            dapat menghambat lawan mencapai Kastil.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Melapor kepada Raja
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Jika Anda yakin mengetahui lokasi harta yang sedang dicari,
            bergeraklah menuju Kastil Raja.
          </li>

          <li>
            Anda harus mendarat tepat di ruang Kastil untuk memberikan jawaban.
          </li>

          <li>
            Sebutkan atau tunjuk pohon yang menurut Anda menyimpan
            harta tersebut.
          </li>

          <li>
            Jika jawaban benar, Anda memperoleh kartu harta sebagai poin,
            kemudian kartu target berikutnya dibuka.
          </li>

          <li>
            Jika jawaban salah, Anda tidak memperoleh poin dan pion Anda
            harus kembali ke Desa.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Aturan Dadu Kembar
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Jika mendapatkan angka kembar (misalnya 2–2 atau 5–5),
            Anda dapat memilih untuk menggunakan kemampuan khusus.
          </li>

          <li>
            Kemampuan tersebut meliputi:
          </li>

          <ul className="list-disc ml-8 space-y-1">
            <li>Berpindah langsung ke salah satu pohon di hutan.</li>
            <li>Melompat lebih dekat ke Kastil Raja.</li>
            <li>Mengocok ulang kartu harta sehingga target Raja berubah.</li>
          </ul>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Permainan berakhir ketika salah satu pemain berhasil mengumpulkan
          <b> 3 kartu harta karun</b>. Pemain tersebut dinyatakan sebagai
          pemenang dan menjadi penerus Kerajaan Sagaland.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://boardgamegeek.com/boardgame/589/sagaland"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Sagaland
          </a>
        </p>

      </div>

    </main>
  );
}