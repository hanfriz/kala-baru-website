export default function ScotlandYardPage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a] py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold mb-6 text-[#3A2A1F] dark:text-white">
          Scotland Yard
        </h1>

        <p className="dark:text-gray-300 mb-6">
          Scotland Yard adalah permainan deduksi di mana satu pemain menjadi
          <b> Mr. X</b>, seorang buronan misterius, sementara pemain lainnya
          berperan sebagai detektif yang bekerja sama untuk menangkapnya.
        </p>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 1 – Persiapan Permainan
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>Tentukan satu pemain sebagai <b>Mr. X</b> dan pemain lainnya sebagai <b>Detektif</b>.</li>

          <li>
            Mr. X mengambil pion putih, visor (pelindung wajah), travel log,
            5 Black Ticket, dan 2 Double Move.
          </li>

          <li>
            Setiap detektif memilih warna pion dan menerima tiket Taxi,
            Bus, serta Underground sesuai aturan permainan.
          </li>

          <li>
            Semua pemain mengambil kartu lokasi awal secara acak.
            Detektif meletakkan pion di papan, sedangkan lokasi Mr. X
            tetap dirahasiakan.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 2 – Cara Bergerak
        </h2>

        <p className="dark:text-gray-300 mb-4">
          Setiap putaran selalu dimulai oleh <b>Mr. X</b>, kemudian
          dilanjutkan oleh seluruh detektif.
        </p>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Setiap perpindahan harus menggunakan satu tiket transportasi.
          </li>

          <li>
            🚕 Taxi digunakan untuk perjalanan jarak dekat.
          </li>

          <li>
            🚌 Bus digunakan untuk perjalanan jarak menengah.
          </li>

          <li>
            🚇 Underground digunakan untuk perjalanan jarak jauh.
          </li>

          <li>
            Pemain hanya boleh berpindah ke stasiun yang terhubung oleh jalur
            transportasi tersebut.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 3 – Mr. X Bergerak Secara Rahasia
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Mr. X memilih tujuan berikutnya secara diam-diam dan mencatatnya
            di travel log.
          </li>

          <li>
            Ia menutup catatan tersebut menggunakan tiket transportasi yang
            dipakai.
          </li>

          <li>
            Para detektif hanya mengetahui jenis transportasi yang digunakan,
            tetapi tidak mengetahui lokasi tujuan Mr. X.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 4 – Giliran Detektif
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            Semua detektif boleh berdiskusi dan menyusun strategi bersama.
          </li>

          <li>
            Setiap detektif bergerak menggunakan tiket yang dimilikinya.
          </li>

          <li>
            Tiket yang digunakan diletakkan pada tumpukan terbuka sehingga
            dapat dilihat oleh Mr. X.
          </li>

          <li>
            Karena jumlah tiket terbatas, detektif harus menggunakannya
            dengan bijaksana.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Step 5 – Aturan Khusus
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-3">
          <li>
            <b>Black Ticket:</b> Hanya dimiliki Mr. X dan dapat digunakan
            sebagai transportasi apa pun tanpa diketahui para detektif.
            Tiket ini juga dapat digunakan untuk menyeberangi Sungai Thames
            menggunakan kapal feri.
          </li>

          <li>
            <b>Double Move:</b> Mr. X dapat bergerak dua kali dalam satu
            putaran sebelum detektif sempat bergerak.
          </li>

          <li>
            <b>Surfacing:</b> Mr. X wajib menunjukkan lokasinya pada putaran
            ke-3, 8, 13, 18, dan 22, kemudian kembali bergerak secara rahasia.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mb-3 dark:text-white">
          Winning
        </h2>

        <ul className="list-disc ml-6 dark:text-gray-300 mb-6 space-y-2">
          <li>
            <b>Detektif menang</b> jika salah satu detektif berhasil mendarat
            di lokasi yang sama dengan Mr. X.
          </li>

          <li>
            <b>Mr. X menang</b> jika berhasil bertahan hingga akhir putaran
            ke-22 atau seluruh detektif kehabisan tiket sehingga tidak dapat
            bergerak lagi.
          </li>
        </ul>

        <p className="mt-2 text-sm">
          Sumber petunjuk lainnya:{" "}
          <a
            href="https://www.ultraboardgames.com/scotland-yard/game-rules.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:text-amber-800"
          >
            Cara Bermain Scotland Yard
          </a>
        </p>

      </div>

    </main>
  );
}