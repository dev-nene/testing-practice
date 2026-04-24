function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

export { capitalize, reverseString };
