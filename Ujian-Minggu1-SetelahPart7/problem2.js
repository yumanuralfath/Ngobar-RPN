// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  if (menit >= 60) {
    let mennitX = menit / 60;
    let resultMenit = Math.trunc(mennitX);  //mengambil nilai x dari pecahan
    let detik = Math.round((mennitX - resultMenit) * 60);  
    if (detik < 10) {
      return `${resultMenit}:0${detik}`;
    }
    return `${resultMenit}:${detik}`;
  } else {
    return menit;
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  let ArrayX = [];
  let Arrayo = [];
//masukkan karakter x dan o dalam array
  for (let i = 0, l = str.length; i < l; i++) {
    if (str.charAt(i) == 'x') {
      ArrayX.push(str.charAt(i));
    }
  }
  for (let i = 0, l = str.length; i < l; i++) {
    if (str.charAt(i) == 'o') {
      Arrayo.push(str.charAt(i));
    }
  }
  if (Arrayo.length === ArrayX.length) {  // memeriksa apakah jumlah nya sama
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
