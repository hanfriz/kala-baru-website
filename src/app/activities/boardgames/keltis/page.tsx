export default function KeltisPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Keltis
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Keltis adalah permainan strategi kartu di mana pemain berlomba
          mengumpulkan poin dengan memainkan kartu dalam urutan tertentu dan
          menggerakkan pion di sepanjang lima jalur batu. Pemain yang mampu
          mengambil bonus dan mencapai posisi terbaik akan memperoleh poin
          kemenangan terbanyak.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Letakkan papan permainan di tengah meja.</li>

          <li>
            Tempatkan seluruh token bonus pada posisi yang telah ditentukan
            di setiap jalur batu.
          </li>

          <li>
            Setiap pemain mengambil lima pion dengan warna yang sama.
          </li>

          <li>
            Kocok seluruh kartu, kemudian bagikan
            <b> 8 kartu</b> kepada setiap pemain.
          </li>

          <li>
            Letakkan sisa kartu sebagai tumpukan pengambilan
            (Draw Pile).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Permainan berlangsung searah jarum jam. Pada setiap giliran,
          pemain melakukan tiga langkah berikut:
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Mainkan satu kartu dari tangan Anda.</li>

          <li>
            Ambil satu kartu baru dari tumpukan atau dari lima kartu terbuka
            yang tersedia.
          </li>

          <li>
            Akhiri giliran dan lanjutkan ke pemain berikutnya.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Aturan Memainkan Kartu
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Setiap warna memiliki jalurnya sendiri pada papan permainan.
          </li>

          <li>
            Saat pertama kali memainkan suatu warna, Anda bebas menentukan
            apakah urutannya akan
            <b> naik (ascending)</b> atau
            <b> turun (descending)</b>.
          </li>

          <li>
            Setelah memilih arah, semua kartu berikutnya untuk warna tersebut
            harus mengikuti urutan yang sama hingga akhir permainan.
          </li>

          <li>
            Setiap kartu yang dimainkan akan menggerakkan pion Anda satu
            langkah maju pada jalur dengan warna yang sesuai.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Bonus dan Poin
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Saat pion berhenti pada petak yang memiliki token bonus,
            pemain langsung mengambil bonus tersebut.
          </li>

          <li>
            Bonus dapat berupa poin kemenangan tambahan, langkah ekstra,
            atau keuntungan lain sesuai token yang diperoleh.
          </li>

          <li>
            Semakin jauh pion bergerak di jalurnya, semakin besar poin
            yang akan diperoleh pada akhir permainan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Akhir Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Permainan berakhir ketika tumpukan kartu habis atau kondisi akhir
            permainan sesuai aturan telah terpenuhi.
          </li>

          <li>
            Seluruh pemain kemudian menghitung poin dari posisi pion,
            token bonus, dan poin tambahan lainnya.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Pemain yang berhasil mengumpulkan total poin kemenangan terbanyak
          dinyatakan sebagai pemenang permainan.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://boardgamegeek.com/boardgame/34585/keltis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Keltis
          </a>
        </p>

      </div>

    </main>
  );
}