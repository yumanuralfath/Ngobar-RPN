//tentukan apakah ini deret aritmatika atau bukan
const tentukanDeretAritmatika = (arr: number[]): boolean => {
  const PenjumlahanDeret =
    (arr.length * (2 * arr[0] + (arr.length - 1) * (arr[1] - arr[0]))) / 2;
  const PenjumlahanArray = arr.reduce((total, num) => total + num, 0);
  if (PenjumlahanArray === PenjumlahanDeret) {
    return true;
  } else {
    return false;
  }
};

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
