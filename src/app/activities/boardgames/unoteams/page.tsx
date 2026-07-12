export default function UnoTeamsPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          UNO Teams
        </h1>

        <p className="dark:text-gray-300 mb-6">
          UNO Teams adalah versi kerja sama dari permainan UNO klasik.
          Berbeda dengan UNO biasa yang dimainkan secara individu, pada
          UNO Teams pemain dibagi menjadi dua tim dan bekerja sama untuk
          mengalahkan tim lawan. Komunikasi, strategi, dan saling membantu
          pasangan menjadi kunci kemenangan.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>UNO Teams dimainkan oleh 4 pemain yang dibagi menjadi 2 tim.</li>

          <li>
            Anggota tim duduk saling berhadapan.
          </li>

          <li>
            Kocok seluruh kartu lalu bagikan <b>7 kartu</b> kepada setiap pemain.
          </li>

          <li>
            Letakkan sisa kartu sebagai <b>Draw Pile</b>.
          </li>

          <li>
            Balik satu kartu untuk memulai <b>Discard Pile</b>.
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
            Permainan berjalan seperti UNO klasik dengan kartu aksi
            seperti Skip, Reverse, Draw Two, Wild, dan Wild Draw Four.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Bermain Sebagai Tim
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Tujuan utama adalah membantu pasangan Anda memenangkan permainan.
          </li>

          <li>
            Saat salah satu anggota tim berhasil menghabiskan semua kartunya,
            ia tidak langsung keluar dari permainan.
          </li>

          <li>
            Pemain tersebut tetap berada di meja untuk membantu tim melalui
            efek kartu tertentu sesuai aturan UNO Teams.
          </li>

          <li>
            Komunikasi secara terbuka mengenai isi kartu tetap tidak diperbolehkan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Jangan Lupa Mengucapkan "UNO!"
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Saat kartu Anda tinggal satu, Anda wajib mengatakan
            <b> "UNO!"</b>.
          </li>

          <li>
            Jika lupa dan diketahui pemain lain sebelum giliran berikutnya,
            Anda harus mengambil 2 kartu sebagai hukuman.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Tim dinyatakan sebagai pemenang ketika kedua anggota tim berhasil
          menghabiskan seluruh kartu mereka terlebih dahulu. Kerja sama dan
          strategi antar pasangan sangat menentukan kemenangan.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://shop.mattel.com/products/uno-teams-card-game"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            UNO Teams Official Rules
          </a>
        </p>

      </div>

    </main>
  );
}