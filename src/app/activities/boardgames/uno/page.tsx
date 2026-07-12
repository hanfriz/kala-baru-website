export default function UnoPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          UNO
        </h1>

        <p className="dark:text-gray-300 mb-6">
          UNO adalah permainan kartu yang seru dan mudah dimainkan oleh semua
          usia. Tujuan utama permainan ini adalah menjadi pemain pertama yang
          berhasil menghabiskan seluruh kartu di tangan dengan mencocokkan
          warna, angka, atau simbol pada kartu yang berada di tumpukan buangan.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>UNO dapat dimainkan oleh <b>2–10 pemain</b>.</li>

          <li>
            Kocok seluruh kartu, kemudian bagikan
            <b> 7 kartu</b> secara tertutup kepada setiap pemain.
          </li>

          <li>
            Letakkan sisa kartu secara tertutup di tengah meja sebagai
            <b> tumpukan kartu ambil (Draw Pile)</b>.
          </li>

          <li>
            Ambil satu kartu paling atas dari Draw Pile, lalu letakkan
            terbuka di sampingnya sebagai
            <b> tumpukan buangan (Discard Pile)</b>.
          </li>

          <li>
            Pemain di sebelah kiri pembagi kartu memulai permainan terlebih dahulu.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Permainan berlangsung searah jarum jam. Pada setiap giliran,
          lakukan langkah berikut:
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Buang satu kartu dari tangan Anda ke atas tumpukan buangan.
          </li>

          <li>
            Kartu yang dibuang harus memiliki
            <b> warna</b>, <b>angka</b>, atau
            <b> simbol</b> yang sama dengan kartu yang sedang terbuka.
          </li>

          <li>
            Jika tidak memiliki kartu yang cocok, Anda wajib mengambil
            satu kartu dari Draw Pile.
          </li>

          <li>
            Jika kartu yang baru diambil dapat dimainkan, Anda boleh langsung
            menggunakannya. Jika tidak, giliran berpindah ke pemain berikutnya.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Mengenal Kartu Aksi dan Kartu Wild
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-3">
          <li>
            <b>Reverse</b> — Membalik arah permainan, misalnya dari searah
            jarum jam menjadi berlawanan arah jarum jam.
          </li>

          <li>
            <b>Skip</b> — Pemain berikutnya kehilangan satu giliran.
          </li>

          <li>
            <b>Draw Two (+2)</b> — Pemain berikutnya mengambil
            <b> 2 kartu</b> dan kehilangan gilirannya.
            Berdasarkan aturan resmi UNO, kartu +2 tidak boleh ditumpuk
            dengan kartu +2 atau +4 lainnya.
          </li>

          <li>
            <b>Wild</b> — Anda bebas menentukan warna baru yang harus
            dimainkan oleh pemain berikutnya.
          </li>

          <li>
            <b>Wild Draw Four (+4)</b> — Anda menentukan warna baru,
            kemudian pemain berikutnya mengambil
            <b> 4 kartu</b> dan kehilangan gilirannya.
            Kartu ini hanya boleh dimainkan jika Anda tidak memiliki
            kartu lain dengan warna yang sama seperti kartu yang sedang
            terbuka di tumpukan buangan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Jangan Lupa Mengucapkan "UNO!"
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Saat kartu Anda tinggal
            <b> satu</b>, Anda wajib mengucapkan
            <b> "UNO!"</b>.
          </li>

          <li>
            Jika lupa mengucapkannya dan pemain lain menyadarinya sebelum
            giliran berikutnya dimulai, Anda harus mengambil
            <b> 2 kartu</b> sebagai hukuman.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Menentukan Pemenang
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pemain pertama yang berhasil menghabiskan seluruh kartunya
            memenangkan ronde.
          </li>

          <li>
            Jika bermain menggunakan sistem poin, pemenang ronde akan
            memperoleh poin berdasarkan total nilai kartu yang masih
            dipegang oleh semua pemain lainnya.
          </li>

          <li>
            Permainan dapat dilanjutkan beberapa ronde hingga salah satu
            pemain mencapai jumlah poin yang telah disepakati.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Pemain pertama yang berhasil menghabiskan seluruh kartunya menjadi
          pemenang ronde. Jika menggunakan sistem poin, pemenang keseluruhan
          adalah pemain yang pertama mencapai jumlah poin yang telah
          disepakati bersama.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://www.dicebreaker.com/games/uno/how-to/how-to-play-uno"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain UNO
          </a>
        </p>

      </div>

    </main>
  );
}