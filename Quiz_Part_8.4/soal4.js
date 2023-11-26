function pasanganTerbesar(num) {
  // you can only write your code here!
  let NumString = num.toString();
  let hasil = [];

  for (let i = 0; i < NumString.length - 1; i++) {
    let pasangan1 = NumString[i].concat(NumString[i + 1]);
    let numPasangan1 = Number(pasangan1);
    if (!isNaN(numPasangan1)) {
      hasil.push(numPasangan1);
    }

    let pasangan2 = NumString[i + 1].concat(NumString[i + 2]);
    let numPasangan2 = Number(pasangan2);
    if (!isNaN(numPasangan2)) {
      hasil.push(numPasangan2);
    }
  }
  let MaXCouple = Math.max(...hasil);
  return MaXCouple;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
