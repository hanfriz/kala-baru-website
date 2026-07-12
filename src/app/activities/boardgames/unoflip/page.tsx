export default function UnoFlipPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          UNO Flip!
        </h1>

        <p className="dark:text-gray-300 mb-6">
          UNO Flip! adalah versi unik dari permainan UNO yang memiliki
          <b> dua sisi permainan</b>: sisi Terang (Light Side) dan sisi Gelap
          (Dark Side). Saat kartu <b>Flip</b> dimainkan, seluruh kartu pemain,
          kartu buangan, dan tumpukan kartu dibalik ke sisi lainnya sehingga
          aturan permainan langsung berubah. Strategi dan waktu memainkan kartu
          Flip menjadi kunci kemenangan.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>UNO Flip! dapat dimainkan oleh 2–10 pemain.</li>

          <li>
            Kocok kartu dengan posisi <b>Light Side</b> menghadap ke atas.
          </li>

          <li>
            Bagikan <b>7 kartu</b> kepada setiap pemain.
          </li>

          <li>
            Letakkan sisa kartu sebagai <b>Draw Pile</b>.
          </li>

          <li>
            Balik satu kartu untuk memulai <b>Discard Pile</b>.
          </li>

          <li>
            Permainan dimulai menggunakan sisi <b>Light Side</b>.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Mainkan kartu yang memiliki warna atau angka yang sama dengan kartu
            paling atas di Discard Pile.
          </li>

          <li>
            Jika tidak memiliki kartu yang cocok, ambil satu kartu dari Draw Pile.
          </li>

          <li>
            Jika kartu yang diambil dapat dimainkan, Anda boleh langsung
            memainkannya.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Kartu Flip
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Jika seseorang memainkan kartu <b>Flip</b>, seluruh permainan
            langsung berpindah ke sisi sebaliknya.
          </li>

          <li>
            Semua pemain membalik kartu di tangan mereka.
          </li>

          <li>
            Draw Pile dan Discard Pile juga ikut dibalik.
          </li>

          <li>
            Setelah dibalik, permainan mengikuti aturan pada sisi yang baru.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Perbedaan Light Side & Dark Side
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Masing-masing sisi memiliki kartu aksi yang berbeda.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            <b>Light Side</b> memiliki kartu Skip, Reverse, Draw One, dan Flip.
          </li>

          <li>
            <b>Dark Side</b> memiliki kartu Draw Five, Skip Everyone,
            Wild Draw Color, serta kartu Flip.
          </li>

          <li>
            Dark Side jauh lebih sulit karena hukuman kartu lebih besar.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Jangan Lupa Mengucapkan "UNO!"
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Saat kartu Anda tinggal satu, Anda wajib mengucapkan
            <b> "UNO!"</b>.
          </li>

          <li>
            Jika lupa dan diketahui pemain lain sebelum giliran berikutnya,
            Anda harus mengambil 2 kartu.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Pemain pertama yang berhasil menghabiskan seluruh kartunya menjadi
          pemenang permainan.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://service.mattel.com/instruction_sheets/GDR44-Eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            UNO Flip! Official Rules
          </a>
        </p>

      </div>

    </main>
  );
}