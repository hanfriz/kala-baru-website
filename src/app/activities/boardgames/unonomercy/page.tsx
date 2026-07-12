export default function UnoNoMercyPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          UNO No Mercy
        </h1>

        <p className="dark:text-gray-300 mb-6">
          UNO No Mercy adalah versi yang lebih menantang dari permainan UNO
          klasik. Selain mencocokkan warna, angka, atau simbol, pemain dapat
          menggunakan kartu aksi baru, menumpuk kartu hukuman, dan membuat
          lawan mengambil kartu dalam jumlah yang sangat banyak. Permainan
          berlangsung lebih cepat, lebih kompetitif, dan penuh kejutan.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>UNO No Mercy dapat dimainkan oleh 2–6 pemain.</li>

          <li>
            Kocok seluruh kartu lalu bagikan <b>7 kartu</b> kepada setiap pemain.
          </li>

          <li>
            Letakkan sisa kartu sebagai <b>Draw Pile</b>.
          </li>

          <li>
            Balik satu kartu untuk memulai <b>Discard Pile</b>.
          </li>

          <li>
            Pemain di sebelah kiri pembagi kartu memulai permainan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pada giliran Anda, mainkan satu kartu yang memiliki warna,
            angka, atau simbol yang sama dengan kartu paling atas.
          </li>

          <li>
            Jika tidak memiliki kartu yang cocok, ambil satu kartu dari
            Draw Pile.
          </li>

          <li>
            Jika kartu yang diambil dapat dimainkan, Anda boleh langsung
            memainkannya.
          </li>

          <li>
            Permainan berlanjut searah jarum jam hingga ada kartu aksi
            yang mengubah arah permainan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Kartu Aksi Khusus
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-3">

          <li>
            <b>Skip</b> — Pemain berikutnya kehilangan satu giliran.
          </li>

          <li>
            <b>Reverse</b> — Membalik arah permainan.
          </li>

          <li>
            <b>Wild</b> — Pemain bebas memilih warna berikutnya.
          </li>

          <li>
            <b>Discard All</b> — Buang seluruh kartu dengan warna yang sama
            dari tangan Anda sekaligus.
          </li>

          <li>
            <b>Wild Draw 4</b> — Pilih warna baru, pemain berikutnya
            mengambil 4 kartu.
          </li>

          <li>
            <b>Wild Draw 6</b> — Pilih warna baru, pemain berikutnya
            mengambil 6 kartu.
          </li>

          <li>
            <b>Wild Draw 10</b> — Pilih warna baru, pemain berikutnya
            mengambil 10 kartu.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Stacking & Mercy Rule
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-3">

          <li>
            Semua kartu Draw (+2, +4, +6, +10) dapat
            <b> ditumpuk (Stacking)</b>.
          </li>

          <li>
            Contoh:
            Jika pemain pertama memainkan +4 dan pemain berikutnya memiliki
            +6, maka pemain ketiga harus mengambil <b>10 kartu</b>,
            kecuali ia juga dapat menambahkan kartu Draw lainnya.
          </li>

          <li>
            Jumlah kartu hukuman akan terus bertambah hingga tidak ada pemain
            yang dapat melanjutkan Stacking.
          </li>

          <li>
            <b>Mercy Rule:</b> Jika seorang pemain memiliki
            <b> 25 kartu atau lebih</b> di tangan, pemain tersebut langsung
            tersingkir dari permainan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Jangan Lupa Mengucapkan "UNO!"
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Saat kartu Anda tinggal satu, Anda wajib mengatakan
            <b> "UNO!"</b>.
          </li>

          <li>
            Jika lupa dan diketahui pemain lain sebelum giliran berikutnya,
            Anda harus mengambil kartu sesuai aturan permainan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Permainan berakhir ketika hanya tersisa satu pemain yang belum
          menghabiskan kartunya atau belum terkena Mercy Rule.
          Pemain terakhir yang masih bertahan menjadi pemenang.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://shop.mattel.com/products/uno-show-em-no-mercy-card-game-hwv18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            UNO Show 'Em No Mercy Official Rules
          </a>
        </p>

      </div>

    </main>
  );
}