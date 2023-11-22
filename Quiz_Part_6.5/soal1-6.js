// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 0;

console.log('LOOPING PERTAMA')
while (i <= 10){
    console.log(i);
    i ++;
}

console.log('LOOPING KEDUA')
i = 10;
while (i >= 0){
    console.log(i);
    i --;
}


// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Looping Pertama")
for (var k = 0; k <=10 ; k++) {
    console.log (i);
}

console.log("Looping Kedua")
for (var j = 10; j >=0 ; i--) {
    console.log (j);
}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (let counter = 1; counter <= 100; counter++) {
    if (counter % 2 === 0) {
        console.log("Genap");
    } else {
        console.log("Ganjil");
    }
};

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Perulangan dengan pertambahan 2
for (let counter1 = 1; counter1 <= 100; counter1 += 2) {
    if (counter1 % 3 === 0) {
      console.log(counter1 + " kelipatan 3");
    }
  }

  // Perulangan dengan pertambahan 5
  for (let counter2 = 1; counter2 <= 100; counter2 += 5) {
    if (counter2 % 6 === 0) {
      console.log(counter2 + " kelipatan 6");
    }
  }

  // Perulangan dengan pertambahan 9
  for (let counter3 = 1; counter3 <= 100; counter3 += 9) {
    if (counter3 % 10 === 0) {
      console.log(counter3 + " kelipatan 10");
    }
  }


// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut

let input = 5;

for (let i = 1; i <= input; i++) {
  let bintang = '';
  for (let j = 1; j <= i; j++) {
    bintang += '*';
  }
  console.log(bintang);
}


//hasilnya
//*
//**
//***
//****
//*****