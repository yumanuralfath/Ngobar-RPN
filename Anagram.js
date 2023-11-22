let generateAnagram = (name) => {
  let length = name.length;
  let anagram = '';

  for (let i = length - 1; i >= 0; i--) {
    anagram += name[i];
  }

  return anagram;
};

console.log(generateAnagram('Yuma'));
