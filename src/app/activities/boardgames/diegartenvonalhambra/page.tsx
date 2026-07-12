export default function DieGartenOfAlhambraPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Die Gärten von Alhambra
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Die Gärten von Alhambra adalah permainan strategi abstrak di mana
          pemain berlomba menyusun taman di sekitar Istana Alhambra untuk
          memperoleh poin kemenangan sebanyak mungkin. Kemenangan ditentukan
          oleh kemampuan pemain menempatkan ubin taman secara tepat dan
          menguasai mayoritas pohon di sekitar bangunan.
        </p>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Letakkan papan permainan di tengah meja.</li>

          <li>
            Tempatkan seluruh ubin bangunan secara acak pada posisi yang telah
            ditentukan di papan permainan.
          </li>

          <li>
            Setiap pemain memilih satu warna pohon sebagai identitasnya.
          </li>

          <li>
            Kocok seluruh ubin taman berbentuk oktagon, kemudian bagikan
            kepada setiap pemain sebagai kartu di tangan
            (sesuai aturan permainan, biasanya 1–2 ubin).
          </li>

          <li>
            Letakkan sisa ubin taman sebagai tumpukan pengambilan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bermain
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Permainan berlangsung searah jarum jam. Pada setiap giliran,
          pemain wajib melakukan dua langkah berikut:
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Pilih satu ubin taman dari tangan Anda.
          </li>

          <li>
            Letakkan ubin tersebut pada salah satu kotak kosong di papan.
          </li>

          <li>
            Setelah itu, ambil satu ubin baru dari tumpukan agar jumlah
            ubin di tangan kembali seperti semula.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Aturan Penempatan Ubin
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Ubin pertama tidak boleh ditempatkan di bagian tepi papan.
          </li>

          <li>
            Seluruh ubin berikutnya harus ditempatkan berdampingan
            (berbagi sisi) dengan ubin taman yang sudah ada.
          </li>

          <li>
            Setiap ubin memiliki gambar pohon dengan empat warna berbeda.
          </li>

          <li>
            Posisi ubin yang Anda letakkan akan menentukan jumlah pohon
            milik setiap pemain yang mengelilingi sebuah bangunan.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Menghitung Poin
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Poin langsung dihitung ketika sebuah ubin bangunan telah
          dikelilingi oleh empat ubin taman.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Hitung jumlah simbol pohon milik setiap pemain yang
            menghadap bangunan tersebut.
          </li>

          <li>
            Pemain dengan jumlah pohon terbanyak memperoleh poin bangunan.
          </li>

          <li>
            Jika terjadi seri pada jumlah pohon terbanyak,
            semua pemain yang seri dianggap gugur dan poin diberikan
            kepada pemain berikutnya yang memiliki jumlah pohon terbanyak.
          </li>

          <li>
            Rumus poin adalah:
            <br />
            <b>Nilai Bangunan × Jumlah Warna Berbeda yang Mengelilingi Bangunan</b>
          </li>

          <li>
            Contoh:
            Jika bangunan bernilai <b>3 poin</b> dan dikelilingi oleh
            <b> 3 warna berbeda</b>, maka pemain yang menang mayoritas
            memperoleh <b>9 poin</b>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Akhir Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Permainan berakhir ketika seluruh
            <b> 36 kotak</b> pada papan telah terisi oleh ubin taman.
          </li>

          <li>
            Tidak ada lagi ubin yang dapat dimainkan setelah papan penuh.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <p className="dark:text-gray-300">
          Setelah seluruh papan terisi, jumlahkan semua poin yang telah
          diperoleh setiap pemain selama permainan. Pemain dengan total
          poin kemenangan terbanyak dinyatakan sebagai pemenang.
        </p>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://boardgamegeek.com/boardgame/6249/the-gardens-of-the-alhambra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Die Gärten von Alhambra
          </a>
        </p>

      </div>

    </main>
  );
}