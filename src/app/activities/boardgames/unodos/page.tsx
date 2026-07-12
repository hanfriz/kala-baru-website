export default function dosPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          DOS
        </h1>

        <p className="dark:text-gray-300 mb-6">
          DOS adalah permainan kartu dari keluarga UNO yang menawarkan cara
          bermain baru. Berbeda dengan UNO, pemain harus mencocokkan
          <b> angka</b> pada kartu, baik menggunakan satu kartu maupun
          kombinasi dua kartu. Tujuan permainan tetap sama, yaitu menjadi
          pemain pertama yang menghabiskan seluruh kartu di tangan.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>DOS dapat dimainkan oleh 2–4 pemain.</li>

          <li>
            Kocok seluruh kartu lalu bagikan
            <b> 7 kartu</b> kepada setiap pemain.
          </li>

          <li>
            Letakkan sisa kartu sebagai <b>Draw Pile</b>.
          </li>

          <li>
            Buka dua kartu dari Draw Pile dan letakkan di tengah meja
            sebagai <b>Center Row</b>.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Pada setiap giliran, pemain mencoba mencocokkan kartu di tangan
          dengan salah satu kartu yang berada di Center Row.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Anda dapat menggunakan <b>satu kartu</b> dengan angka yang sama.
          </li>

          <li>
            Atau menggunakan <b>dua kartu</b> yang jika dijumlahkan
            menghasilkan angka yang sama.
          </li>

          <li>
            Contoh:
            Jika kartu di Center Row bernilai <b>8</b>, Anda dapat
            memainkan kartu <b>8</b> atau kombinasi
            <b> 3 + 5</b>.
          </li>

          <li>
            Setelah berhasil mencocokkan, buang kartu tersebut lalu
            gantikan kartu Center Row dengan kartu baru dari Draw Pile.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Bonus Warna
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Jika angka dan warna kartu sama persis,
            Anda mendapatkan <b>Color Match Bonus</b>.
          </li>

          <li>
            Semua pemain lain harus mengambil satu kartu dari Draw Pile.
          </li>

          <li>
            Jika menggunakan dua kartu dengan warna yang sama,
            Anda memperoleh <b>Double Color Match Bonus</b>.
          </li>

          <li>
            Pada bonus ini, semua pemain lain mengambil satu kartu,
            kemudian Anda boleh memilih satu pemain tambahan untuk
            mengambil satu kartu lagi.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Jika Tidak Bisa Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Jika tidak memiliki kartu yang cocok,
            ambil satu kartu dari Draw Pile.
          </li>

          <li>
            Jika kartu tersebut dapat dimainkan,
            Anda boleh langsung memainkannya.
          </li>

          <li>
            Jika masih tidak bisa dimainkan,
            giliran berpindah ke pemain berikutnya.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Jangan Lupa Mengucapkan "DOS!"
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Ketika kartu Anda tinggal
            <b> dua</b>, Anda wajib mengucapkan
            <b> "DOS!"</b>.
          </li>

          <li>
            Jika lupa dan diketahui pemain lain,
            Anda harus mengambil
            <b> dua kartu</b> sebagai hukuman.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Pemain pertama yang berhasil menghabiskan seluruh kartunya menjadi
          pemenang ronde. Jika bermain menggunakan sistem poin,
          permainan dapat dilanjutkan hingga salah satu pemain mencapai
          jumlah poin yang telah disepakati.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://service.mattel.com/instruction_sheets/FRD36-Eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Official DOS Rules
          </a>
        </p>

      </div>

    </main>
  );
}