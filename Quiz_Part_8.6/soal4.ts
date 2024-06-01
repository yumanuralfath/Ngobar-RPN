function tentukanDeretGeometri(arr: number[]): boolean {
  // you can only write your code here!
  const r = arr[1] / arr[0];
  const a = arr[0];
  const n = arr.length;

  const JumlahSukuN = (a * (1 - Math.pow(r, n))) / (1 - r);
  const JumlahArray = arr.reduce((total, num) => total + num, 0);
  if (JumlahArray === JumlahSukuN) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
