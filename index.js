function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

function caesarCipher(input, k) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let index = input.charCodeAt(i);
    if (index >= 97 && index <= 122) {
      index = ((index - 97 + k) % 26) + 97;
      result += String.fromCharCode(index);
    } else if (index >= 65 && index <= 90) {
      index = ((index - 65 + k) % 26) + 65;
      result += String.fromCharCode(index);
    } else {
      result += input[i];
    }
  }
  return result;
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    if (b === 0) {
      throw new Error("Can't divide with zero");
    }
    return a / b;
  },
};

export { capitalize, reverseString, caesarCipher, calculator };
