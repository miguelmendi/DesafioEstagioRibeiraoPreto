function reverseString(string) {
  let reverter = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverter += string[i];
  }
  return reverter;
}

console.log(reverseString('aeiou'));
