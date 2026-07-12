export default function CatanPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Catan – Panduan Lengkap Cara Bermain
        </h1>

        <p className="text-[#5C4A3A] dark:text-gray-300 mb-8 leading-relaxed">
          Catan adalah permainan papan strategi di mana pemain mengumpulkan
          sumber daya untuk membangun jalan, pemukiman, dan kota demi mencapai
          <b> 10 Poin Kemenangan (Victory Points)</b>. Panduan lengkap ini akan
          membahas semua aspek permainan, mulai dari pengenalan komponen hingga
          cara memenangkan permainan.
        </p>


        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          📦 Komponen & Jenis Sumber Daya
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Sebelum bermain, kenali terlebih dahulu 5 jenis sumber daya yang
          dihasilkan oleh petak heksagon (Hexes) di pulau Catan.
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse dark:text-gray-300">
            <thead>
              <tr className="border-b border-[#3A2A1F]/30 dark:border-gray-600">
                <th className="text-left py-3 pr-4">Jenis Petak</th>
                <th className="text-left py-3 pr-4">Sumber Daya</th>
                <th className="text-left py-3">Kegunaan Utama</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[#3A2A1F]/20 dark:border-gray-700">
                <td className="py-3 pr-4">Hutan (Forest)</td>
                <td className="py-3 pr-4">🪵 Kayu (Lumber)</td>
                <td className="py-3">Membangun Jalan & Pemukiman</td>
              </tr>

              <tr className="border-b border-[#3A2A1F]/20 dark:border-gray-700">
                <td className="py-3 pr-4">Bukit (Hills)</td>
                <td className="py-3 pr-4">🧱 Bata (Brick)</td>
                <td className="py-3">Membangun Jalan & Pemukiman</td>
              </tr>

              <tr className="border-b border-[#3A2A1F]/20 dark:border-gray-700">
                <td className="py-3 pr-4">Padang Rumput (Pasture)</td>
                <td className="py-3 pr-4">🐑 Domba (Wool)</td>
                <td className="py-3">Pemukiman & Kartu Pengembangan</td>
              </tr>

              <tr className="border-b border-[#3A2A1F]/20 dark:border-gray-700">
                <td className="py-3 pr-4">Ladang (Fields)</td>
                <td className="py-3 pr-4">🌾 Gandum (Grain)</td>
                <td className="py-3">
                  Pemukiman, Kota, & Kartu Pengembangan
                </td>
              </tr>

              <tr className="border-b border-[#3A2A1F]/20 dark:border-gray-700">
                <td className="py-3 pr-4">Pegunungan (Mountains)</td>
                <td className="py-3 pr-4">🪨 Bijih Besi (Ore)</td>
                <td className="py-3">Membangun Kota & Kartu Pengembangan</td>
              </tr>

              <tr>
                <td className="py-3 pr-4">Gurun (Desert)</td>
                <td className="py-3 pr-4">❌ Tidak ada</td>
                <td className="py-3">
                  Tempat awal bidak Perampok (Robber)
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          🛠️ Persiapan Permainan (Setup)
        </h2>

        <ol className="list-decimal ml-6 dark:text-gray-300 mb-10 space-y-3">
          <li>
            <b>Menyusun Pulau:</b> Satukan 6 potongan bingkai laut. Acak 19
            petak heksagon sumber daya di dalam bingkai tersebut.
          </li>

          <li>
            <b>Memasang Angka:</b> Letakkan token angka dari huruf A sampai R
            di atas setiap petak secara melingkar berlawanan arah jarum jam.
            Petak gurun tidak diberi angka.
          </li>

          <li>
            <b>Membagikan Komponen:</b> Setiap pemain memilih satu warna dan
            mengambil 5 Pemukiman, 4 Kota, dan 15 Jalan.
          </li>
        </ol>


        <h3 className="text-xl font-semibold mb-3 dark:text-white">
          Fase Penempatan Awal
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-10 space-y-2">
          <li>
            Pemain A menaruh 1 Pemukiman dan 1 Jalan di persimpangan petak,
            diikuti pemain B, C, dan D secara berurutan.
          </li>

          <li>
            Setelah semua pemain menaruh bangunan pertama, urutan dibalik.
            Pemain D menaruh Pemukiman dan Jalan kedua, diikuti C, B, lalu A.
          </li>

          <li>
            <b>Sumber Daya Awal:</b> Setiap pemain langsung mengambil 1 kartu
            sumber daya dari setiap petak yang mengelilingi Pemukiman kedua
            mereka.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          🎲 Struktur Putaran Bermain
        </h2>

        <p className="dark:text-gray-300 mb-6">
          Setiap pemain melakukan giliran secara bergantian searah jarum jam.
          Pada giliran Anda, lakukan langkah-langkah berikut sesuai urutan.
        </p>


        <h3 className="text-xl font-semibold mb-3 dark:text-white">
          1. Melempar Dadu (Fase Produksi)
        </h3>

        <p className="dark:text-gray-300 mb-8 leading-relaxed">
          Lempar dua dadu standar bersisi 6. Jumlah angka dadu menentukan petak
          mana yang memproduksi sumber daya. Semua pemain, bukan hanya pemain
          yang melempar dadu, yang memiliki Pemukiman di sudut petak tersebut
          berhak mengambil <b>1 kartu sumber daya</b>. Jika memiliki Kota,
          pemain mendapat <b>2 kartu sumber daya</b>.
        </p>


        <h3 className="text-xl font-semibold mb-3 dark:text-white">
          2. Berdagang (Fase Perdagangan)
        </h3>

        <p className="dark:text-gray-300 mb-4">
          Anda dapat menukarkan kartu sumber daya untuk mendapatkan kartu yang
          dibutuhkan melalui dua cara:
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-8 space-y-3">
          <li>
            <b>Perdagangan Domestik:</b> Bernegosiasi dan barter kartu dengan
            pemain lain. Anda bebas menentukan kesepakatan, misalnya 2 Kayu
            ditukar dengan 1 Bata.
          </li>

          <li>
            <b>Perdagangan Maritim:</b> Menukar kartu langsung dengan Bank.
            Tarif standar adalah 4:1. Jika memiliki pemukiman di Pelabuhan
            Generic, tarif menjadi 3:1. Jika berada di Pelabuhan Khusus, tarif
            menjadi 2:1 untuk sumber daya tertentu.
          </li>
        </ul>


        <h3 className="text-xl font-semibold mb-3 dark:text-white">
          3. Membangun (Fase Pembangunan)
        </h3>

        <p className="dark:text-gray-300 mb-4">
          Gunakan kombinasi sumber daya yang Anda miliki untuk memperluas
          wilayah atau membeli kartu bantuan.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-10 space-y-4">
          <li>
            <b>🛣️ Jalan — 1 Kayu + 1 Bata:</b> Harus ditempatkan menyambung
            dengan Jalan, Pemukiman, atau Kota milik Anda sendiri.
          </li>

          <li>
            <b>🏡 Pemukiman — 1 Kayu + 1 Bata + 1 Gandum + 1 Domba:</b>{" "}
            Ditempatkan di persimpangan dan harus berjarak minimal dua jalur
            dari pemukiman lain. Menghasilkan <b>1 Poin Kemenangan</b>.
          </li>

          <li>
            <b>🏰 Kota — 3 Bijih + 2 Gandum:</b> Merupakan upgrade dari
            Pemukiman yang sudah ada. Menghasilkan sumber daya dua kali lipat
            dan bernilai <b>2 Poin Kemenangan</b>.
          </li>

          <li>
            <b>🃏 Kartu Pengembangan — 1 Bijih + 1 Gandum + 1 Domba:</b>{" "}
            Ambil kartu teratas dari tumpukan rahasia.
          </li>
        </ul>


        <h3 className="text-xl font-semibold mb-3 dark:text-white">
          Jenis Kartu Pengembangan
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-10 space-y-3">
          <li>
            <b>Knight (Ksatria):</b> Digunakan untuk memindahkan Perampok.
          </li>

          <li>
            <b>Progress (Kemajuan):</b> Memberikan efek khusus seperti
            mengambil 2 sumber daya gratis atau membangun 2 jalan gratis.
          </li>

          <li>
            <b>Victory Point:</b> Memberikan 1 Poin Kemenangan rahasia yang
            biasanya baru ditunjukkan saat diperlukan untuk memenangkan
            permainan.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          🥷 Aturan Khusus & Bonus Angka 7
        </h2>

        <h3 className="text-xl font-semibold mb-3 dark:text-white">
          Apa yang Terjadi Jika Dadu Berjumlah 7?
        </h3>

        <p className="dark:text-gray-300 mb-4">
          Tidak ada petak yang bernomor 7. Jika jumlah kedua dadu adalah 7,
          maka hal-hal berikut terjadi:
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-10 space-y-4">
          <li>
            <b>Buang Setengah Kartu:</b> Setiap pemain yang memegang lebih dari
            7 kartu sumber daya harus membuang setengah dari jumlah kartunya,
            dengan pembulatan ke bawah, ke Bank.
          </li>

          <li>
            <b>Pindahkan Perampok:</b> Pemain yang melempar dadu memindahkan
            Perampok ke petak sumber daya lain. Petak tersebut tidak akan
            menghasilkan sumber daya selama Perampok masih berada di sana.
          </li>

          <li>
            <b>Mencuri Kartu:</b> Pemain yang memindahkan Perampok boleh
            mencuri 1 kartu sumber daya secara acak dari salah satu pemain yang
            memiliki bangunan di sekitar petak tersebut.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          🏅 Kartu Bonus Poin
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Ada dua kartu bonus yang masing-masing bernilai
          <b> 2 Poin Kemenangan</b>:
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-10 space-y-4">
          <li>
            <b>Rute Jalan Terpanjang (Longest Road):</b> Diberikan kepada
            pemain pertama yang berhasil membangun minimal 5 jalan yang
            tersambung tanpa putus. Jika pemain lain berhasil membangun jalan
            yang lebih panjang, kartu ini berpindah tangan.
          </li>

          <li>
            <b>Pasukan Terbesar (Largest Army):</b> Diberikan kepada pemain
            pertama yang berhasil memainkan 3 Kartu Ksatria. Kartu ini dapat
            berpindah tangan jika pemain lain memainkan lebih banyak Kartu
            Ksatria.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          🏆 Menentukan Pemenang
        </h2>

        <p className="dark:text-gray-300 mb-5 leading-relaxed">
          Permainan langsung berakhir ketika seorang pemain berhasil
          mengumpulkan <b>10 Poin Kemenangan atau lebih pada gilirannya sendiri</b>.
        </p>

        <h3 className="text-xl font-semibold mb-3 dark:text-white">
          Cara Menghitung Poin
        </h3>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-8 space-y-2">
          <li>1 Pemukiman = 1 Poin</li>
          <li>1 Kota = 2 Poin</li>
          <li>Longest Road = 2 Poin</li>
          <li>Largest Army = 2 Poin</li>
          <li>Kartu Pengembangan Victory Point = 1 Poin</li>
        </ul>


        <p className="mt-2 text-sm dark:text-gray-400">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://www.dicebreaker.com/games/catan-1/how-to/how-to-play-catan-board-game"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Catan – Dicebreaker
          </a>
        </p>

      </div>

    </main>
  );
}