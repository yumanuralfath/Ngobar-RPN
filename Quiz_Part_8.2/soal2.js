let input = [
  '0001',
  'Roman Alamsyah ',
  'Bandar Lampung',
  '21/05/1989',
  'Membaca',
];

let input1 = [
  '001',
  'Roman Alamsyah',
  'Bandar Lampung',
  '21/05/1989',
  'membaca',
];
function dataHandling2(input1) {
  input1.splice(
    1,
    4,
    'Roman Alamsyah Elsharawy',
    'Provinsi Bandar Lampung',
    '21/05/1989',
    'Pria',
    'SMA Internasional Metro'
  );
  console.log(input1);
  let splitInput = input1[3].split('/');

  if (splitInput[1] == 5) {
    console.log('mei');
  }

  let date = [splitInput[2], splitInput[0], splitInput[1]];
  console.log(date);

  console.log(splitInput.join(`-`));

  let slicedInput1 = input1[1].slice(0, 15);
  console.log(slicedInput1);
}

dataHandling2(input1);

console.log(dataHandling2(input));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
