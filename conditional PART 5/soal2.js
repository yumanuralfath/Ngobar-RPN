// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

// let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// let bulan = 'februari'; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
function ubahTanggal(tanggal, bulan, tahun) {
  const namaBulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  switch (true) {
    case bulan >= 1 && bulan <= 12:
      console.log(`${tanggal} ${namaBulan[bulan - 1]} ${tahun}`);
      break;

    default:
      console.log('Bulan tidak valid');
      break;
  }
}

ubahTanggal(20, 1, 2000);
