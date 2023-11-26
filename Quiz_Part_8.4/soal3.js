function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  // let result = [];
  // for (let i = 0; i < kalimat.length; i++) {
  //   if (kalimat[i] !== ' ') {
  //     continue;
  //   } else {
  //     result.push(kalimat[i]);
  //   }
  // }
  // let jumlahKata = (result.length + 1);
  // return jumlahKata;  //ini akan bug jika ada spasi setelah kata
  let jumlahKata = kalimat.split(' ');
  return jumlahKata.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
