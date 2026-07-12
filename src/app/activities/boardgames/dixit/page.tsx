export default function DixitPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Dixit
        </h1>

        <p className="mb-4 text-[#5C4A3A] dark:text-gray-300">
          Jumlah pemain: 3–6 orang
        </p>

        <p className="mb-8 text-[#5C4A3A] dark:text-gray-300">
          Durasi permainan: sekitar 30 menit
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          🎯 Tujuan Permainan
        </h2>

        <p className="dark:text-gray-300 mb-8 leading-relaxed">
          Tujuan utama permainan Dixit adalah menjadi pemain pertama yang
          mencapai <b>30 poin</b> pada papan skor. Anda mendapatkan poin dengan
          menebak kartu Pendongeng secara benar atau berhasil mengecoh pemain
          lain agar memilih kartu milik Anda.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          📦 Persiapan Permainan (Setup)
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-8 space-y-3">
          <li>
            <b>Bagikan Kartu:</b> Kocok semua kartu gambar, kemudian bagikan
            6 kartu secara tertutup kepada setiap pemain. Sisa kartu diletakkan
            di tengah meja sebagai tumpukan undian.
          </li>

          <li>
            <b>Pilih Bidak:</b> Setiap pemain memilih satu bidak kelinci dan
            meletakkannya di angka 0 pada papan skor.
          </li>

          <li>
            <b>Bagikan Token Voting:</b> Setiap pemain mengambil token angka
            sesuai jumlah pemain.
          </li>

          <li>
            <b>Contoh:</b> Jika terdapat 4 pemain, maka setiap pemain menerima
            token angka 1, 2, 3, dan 4.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          🎲 Langkah-Langkah Bermain
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Pada setiap ronde, satu pemain akan menjadi <b>Pendongeng (Storyteller)</b>.
          Peran ini bergantian searah jarum jam setelah setiap ronde selesai.
        </p>

        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Langkah 1 – Pendongeng Memberi Petunjuk
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Pendongeng memilih 1 kartu dari tangannya tanpa memperlihatkannya kepada pemain lain.</li>
          <li>Pendongeng memberikan petunjuk berdasarkan gambar pada kartu tersebut.</li>
          <li>Petunjuk dapat berupa satu kata, kalimat, judul film, potongan lagu, suara, atau bahkan peribahasa.</li>
          <li>
            <b>Tips:</b> Buat petunjuk yang tidak terlalu mudah dan tidak terlalu
            sulit agar tidak semua maupun tidak ada pemain yang berhasil menebaknya.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Langkah 2 – Pemain Lain Memilih Kartu
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Semua pemain melihat kartu di tangan mereka.</li>
          <li>Pilih 1 kartu yang paling cocok dengan petunjuk Pendongeng.</li>
          <li>Serahkan kartu tersebut secara tertutup kepada Pendongeng.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Langkah 3 – Kartu Diacak dan Dibuka
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Pendongeng mengumpulkan semua kartu, termasuk kartunya sendiri.</li>
          <li>Semua kartu dikocok agar tidak diketahui milik siapa.</li>
          <li>Kartu kemudian dibuka dan disusun berjajar di atas meja.</li>
          <li>Urutan kartu otomatis menjadi nomor 1, 2, 3, dan seterusnya.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Langkah 4 – Voting
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-8 space-y-2">
          <li>Semua pemain, kecuali Pendongeng, menebak kartu asli Pendongeng.</li>
          <li>Pilih token angka sesuai posisi kartu yang ditebak.</li>
          <li>Setelah semua memilih, buka token voting secara bersamaan.</li>
          <li>
            <b>Aturan:</b> Pemain tidak boleh memilih kartu miliknya sendiri.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          📊 Sistem Penilaian Poin
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Setelah semua tebakan dibuka, hitung poin berdasarkan kondisi berikut:
        </p>

        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Kondisi 1 – Petunjuk Terlalu Mudah atau Terlalu Sulit
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Jika semua pemain berhasil menebak kartu Pendongeng.</li>
          <li>Atau tidak ada satu pun pemain yang berhasil menebaknya.</li>
          <li>Pendongeng mendapat <b>0 poin</b>.</li>
          <li>Semua pemain lainnya mendapat <b>2 poin</b>.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Kondisi 2 – Tebakan Beragam (Kondisi Ideal)
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Pendongeng mendapat <b>3 poin</b>.</li>
          <li>Setiap pemain yang menebak dengan benar mendapat <b>3 poin</b>.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Bonus Bluffing
        </h3>

        <p className="dark:text-gray-300 mb-8">
          Selain Pendongeng, setiap pemain mendapatkan <b>1 poin tambahan</b>
          untuk setiap pemain lain yang memilih kartu miliknya.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          🔄 Akhir Ronde dan Akhir Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-8 space-y-3">
          <li>
            Semua kartu yang dimainkan dibuang ke tumpukan discard.
          </li>

          <li>
            Setiap pemain mengambil 1 kartu baru hingga kembali memiliki
            6 kartu di tangan.
          </li>

          <li>
            Pemain di sebelah kiri Pendongeng menjadi Pendongeng pada ronde berikutnya.
          </li>

          <li>
            Permainan berakhir ketika ada pemain yang mencapai <b>30 poin</b>,
            atau ketika tumpukan kartu habis.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          🏆 Pemenang
        </h2>

        <p className="dark:text-gray-300">
          Pemain dengan jumlah poin tertinggi pada akhir permainan menjadi
          pemenang.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://officialgamerules.org/game-rules/dixit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Dixit
          </a>
        </p>

      </div>

    </main>
  );
}