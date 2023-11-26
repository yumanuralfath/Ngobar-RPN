/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

palindrome = (kata) => {
  let result = '';
  let result1 = '';

  for (let i = kata.length; i > 0; i--) {
    result += ` ${kata[i - 1]}`;
  }

  for (let i = 0; i < kata.length; i++) {
    result1 += ` ${kata[i]}`;
  }

  if (result1 === result) {
    return true;
  } else {
    return false;
  }
};

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
