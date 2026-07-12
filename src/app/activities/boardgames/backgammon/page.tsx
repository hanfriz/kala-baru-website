export default function BackgammonPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Backgammon
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Backgammon adalah permainan strategi klasik untuk dua pemain yang
          menggabungkan keberuntungan dari lemparan dadu dengan strategi
          pergerakan bidak. Tujuan permainan adalah memindahkan seluruh bidak
          Anda ke Home Board, kemudian mengeluarkannya dari papan sebelum lawan.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Permainan dimainkan oleh 2 pemain.</li>

          <li>
            Setiap pemain memiliki <b>15 bidak</b> dengan warna yang berbeda.
          </li>

          <li>
            Susun seluruh bidak pada posisi awal sesuai aturan Backgammon.
          </li>

          <li>
            Masing-masing pemain memiliki satu Home Board yang menjadi tujuan
            akhir semua bidaknya.
          </li>

          <li>
            Kedua pemain melempar satu dadu. Pemain dengan angka tertinggi
            mendapat giliran pertama.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Pada setiap giliran, lempar dua buah dadu.
          </li>

          <li>
            Gerakkan bidak sesuai jumlah angka pada kedua dadu.
          </li>

          <li>
            Angka pada setiap dadu dapat digunakan untuk dua bidak yang berbeda
            atau digabungkan pada satu bidak jika memungkinkan.
          </li>

          <li>
            Jika mendapatkan angka kembar (Double), Anda boleh memainkan angka
            tersebut sebanyak empat kali.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Aturan Pergerakan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Bidak bergerak mengikuti arah permainan menuju Home Board.
          </li>

          <li>
            Anda tidak boleh mendarat pada titik yang dijaga oleh
            dua atau lebih bidak lawan.
          </li>

          <li>
            Jika sebuah titik hanya dijaga satu bidak lawan (Blot),
            Anda dapat menangkapnya.
          </li>

          <li>
            Bidak lawan yang tertangkap dipindahkan ke Bar dan harus masuk
            kembali ke papan sebelum dapat bergerak lagi.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Bearing Off
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Setelah seluruh 15 bidak Anda berada di Home Board,
          Anda dapat mulai mengeluarkannya dari papan.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Lempar dadu seperti biasa.
          </li>

          <li>
            Keluarkan bidak sesuai angka yang muncul pada dadu.
          </li>

          <li>
            Jika tidak ada bidak pada titik yang sesuai,
            gunakan aturan Backgammon untuk memindahkan bidak lainnya.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Strategi Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Hindari meninggalkan bidak sendirian karena mudah ditangkap lawan.
          </li>

          <li>
            Bangun titik pertahanan menggunakan dua atau lebih bidak.
          </li>

          <li>
            Cobalah menangkap bidak lawan untuk memperlambat pergerakannya.
          </li>

          <li>
            Rencanakan jalur menuju Home Board seefisien mungkin.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Pemain pertama yang berhasil mengeluarkan seluruh 15 bidaknya dari
          papan menjadi pemenang permainan.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://www.bkgm.com/rules.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Official Backgammon Rules
          </a>
        </p>

      </div>

    </main>
  );
}