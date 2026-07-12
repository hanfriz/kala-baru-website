export default function TikalPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Tikal
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Tikal adalah permainan strategi bertema penjelajahan hutan Maya di
          Guatemala. Pemain berperan sebagai pemimpin ekspedisi yang
          berlomba menemukan kuil kuno, mengumpulkan harta karun, dan
          menguasai wilayah untuk memperoleh poin kemenangan terbanyak.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Membuka Area Baru
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pada awal setiap giliran, ambil satu <b>tile area</b> secara acak
            dari tumpukan.
          </li>

          <li>
            Letakkan tile tersebut pada papan permainan dengan
            menyambungkan jalur batu ke tile yang sudah ada.
          </li>

          <li>
            Tile yang muncul dapat berupa:
          </li>

          <ul className="list-disc ml-8 space-y-1">
            <li>🌳 Hutan (Area kosong)</li>
            <li>🏛️ Kuil (Temple)</li>
            <li>🗿 Reruntuhan (Ruin)</li>
            <li>🌋 Gunung Berapi (Volcano)</li>
          </ul>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Menggunakan 10 Action Point (AP)
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Setelah memasang tile, Anda memiliki <b>10 Action Point (AP)</b>
          yang dapat digunakan sesuai strategi Anda.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            <b>1 AP</b> – Memasukkan satu pion penjelajah baru ke papan.
          </li>

          <li>
            <b>1 AP</b> – Bergerak satu langkah.
          </li>

          <li>
            <b>3 AP</b> – Mengambil satu harta karun dari area reruntuhan.
          </li>

          <li>
            <b>2 AP per lantai</b> – Menggali kuil sehingga nilai kuil
            bertambah tinggi.
          </li>

          <li>
            <b>5 AP</b> – Mengubah satu penjelajah menjadi
            <b> Pemimpin Ekspedisi</b>. Saat penghitungan poin,
            pemimpin dihitung setara dengan tiga penjelajah biasa.
          </li>

          <li>
            <b>5 AP</b> – Mendirikan Basecamp untuk mempermudah
            pergerakan penjelajah.
          </li>

          <li>
            <b>5 AP</b> – Menjaga (Guard) sebuah kuil sehingga pemain lain
            tidak dapat lagi meningkatkan nilai kuil tersebut.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Strategi Menguasai Area
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Tempatkan penjelajah di sekitar kuil yang ingin Anda kuasai.
          </li>

          <li>
            Semakin banyak pion yang Anda miliki di sekitar kuil,
            semakin besar peluang memperoleh poin saat penghitungan.
          </li>

          <li>
            Jangan lupa mengumpulkan harta karun karena dapat
            memberikan poin tambahan di akhir permainan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Fase Penghitungan Poin (Scoring)
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Penghitungan poin dilakukan setiap kali pemain membuka
          <b> tile Gunung Berapi (Volcano)</b>.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Pemain dengan jumlah pion terbanyak di sekitar sebuah kuil
            memperoleh poin sesuai nilai kuil tersebut.
          </li>

          <li>
            Pemimpin Ekspedisi dihitung sebagai tiga pion biasa
            saat menentukan mayoritas.
          </li>

          <li>
            Harta karun yang berhasil dikumpulkan juga memberikan
            poin tambahan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Akhir Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Permainan berakhir setelah seluruh tile area telah
            dipasang di papan.
          </li>

          <li>
            Lakukan penghitungan poin terakhir untuk seluruh kuil
            dan koleksi harta karun.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Pemain dengan total poin kemenangan terbanyak dari penguasaan
          kuil, koleksi harta karun, dan bonus lainnya menjadi pemenang
          permainan.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://boardgamegeek.com/boardgame/54/tikal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Tikal
          </a>
        </p>

      </div>

    </main>
  );
}