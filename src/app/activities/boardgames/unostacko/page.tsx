export default function UnoStackoPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          UNO Stacko
        </h1>

        <p className="dark:text-gray-300 mb-6">
          UNO Stacko adalah permainan keterampilan dan strategi yang
          menggabungkan keseruan UNO dengan permainan menyusun balok.
          Pemain bergantian menarik balok dari menara sesuai warna,
          angka, atau simbol yang ditentukan. Tujuan permainan adalah
          menghindari robohnya menara saat giliran Anda.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>Susun seluruh balok menjadi sebuah menara menggunakan cetakan (loading tray) yang tersedia.</li>

          <li>Pastikan semua balok tersusun rapi sebelum permainan dimulai.</li>

          <li>Pemain pertama dapat dipilih secara bebas atau berdasarkan kesepakatan.</li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Pada giliran Anda, lihat balok terakhir yang diletakkan di atas menara.
          </li>

          <li>
            Tarik satu balok yang memiliki <b>warna</b>, <b>angka</b>,
            atau <b>simbol</b> yang sama.
          </li>

          <li>
            Setelah berhasil mengambil balok, letakkan balok tersebut
            di bagian paling atas menara.
          </li>

          <li>
            Permainan kemudian dilanjutkan ke pemain berikutnya.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Aturan Mengambil Balok
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Gunakan hanya <b>satu tangan</b> untuk mengambil balok.
          </li>

          <li>
            Anda boleh menyentuh beberapa balok untuk mencari yang longgar,
            tetapi hanya satu balok yang boleh diambil.
          </li>

          <li>
            Jangan mengambil balok dari lapisan paling atas yang belum lengkap.
          </li>

          <li>
            Setelah balok dilepas, balok tersebut wajib diletakkan di
            bagian paling atas menara.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Balok Aksi Khusus
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Beberapa balok memiliki simbol khusus yang memberikan efek
          tambahan pada permainan.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            <b>Reverse</b> – Arah giliran permainan dibalik.
          </li>

          <li>
            <b>Skip</b> – Pemain berikutnya kehilangan satu giliran.
          </li>

          <li>
            <b>Draw Two</b> – Pemain berikutnya harus mengambil dua balok
            secara berurutan.
          </li>

          <li>
            <b>Wild</b> – Pemain bebas menentukan warna yang harus diikuti
            oleh pemain berikutnya.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Menara Roboh
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">

          <li>
            Jika menara roboh saat giliran Anda, Anda langsung kalah.
          </li>

          <li>
            Pemain lain yang masih bertahan menjadi pemenang permainan.
          </li>

        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Pemenang adalah pemain terakhir yang berhasil mengambil dan
          meletakkan balok tanpa menyebabkan menara roboh.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://service.mattel.com/instruction_sheets/T7039-0920.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            UNO Stacko Official Rules
          </a>
        </p>

      </div>

    </main>
  );
}