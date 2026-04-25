import {
  capitalize,
  reverseString,
  caesarCipher,
  calculator,
  analyzeArray,
} from "./index.js";

describe("capitalize", () => {
  describe("valid inputs", () => {
    test.each([
      ["sum", "Sum"],
      ["tesT", "Test"],
      ["car", "Car"],
    ])("capitalizes '%s' → '%s'", (input, expected) => {
      expect(capitalize(input)).toBe(expected);
    });
  });

  describe("edge cases", () => {
    test("returns empty string for empty input", () => {
      expect(capitalize("")).toBe("");
    });

    test("handles single character", () => {
      expect(capitalize("a")).toBe("A");
    });

    test("handles already capitalized word", () => {
      expect(capitalize("Hello")).toBe("Hello");
    });
  });
});

describe("reverseString", () => {
  describe("valid inputs", () => {
    test.each([
      ["key", "yek"],
      ["book", "koob"],
      ["code", "edoc"],
    ])("reverseString '%s' -> '%s'", (input, expected) => {
      expect(reverseString(input)).toBe(expected);
    });
  });
  describe("edge cases", () => {
    test("return empty string for empty input", () => {
      expect(reverseString("")).toBe("");
    });
    test("handles single character", () => {
      expect(reverseString("a")).toBe("a");
    });
    test("handles palindrom", () => {
      expect(reverseString("madam")).toBe("madam");
    });
  });
});

describe("caesarCipher ", () => {
  describe("valid inputs", () => {
    test.each([
      ["abc", 3, "def"],
      ["abc", 7, "hij"],
    ])("caesarCipher(%s, %i) -> %s", (input, i, expected) => {
      expect(caesarCipher(input, i)).toBe(expected);
    });
  });
  describe("edge cases", () => {
    test("handless letter overflow", () => {
      expect(caesarCipher("xyz", 6)).toBe("def");
    });
    test("handless last letter", () => {
      expect(caesarCipher("word", 3)).toBe("zrug");
    });
    test("handless capital letter overflow", () => {
      expect(caesarCipher("XYZ", 6)).toBe("DEF");
    });
    test("handles capital last letter", () => {
      expect(caesarCipher("WORD", 3)).toBe("ZRUG");
    });
    test("handless symbols", () => {
      expect(caesarCipher("todo#", 7)).toBe("avkv#");
    });
  });
});

describe("calculator", () => {
  describe("add", () => {
    test.each([
      [2, 2, 4],
      [0, 5, 5],
      [-1, -1, -2],
      [10, -5, 5],
    ])("%i + %i = %i", (a, b, res) => {
      expect(calculator.add(a, b)).toBe(res);
    });
  });

  describe("subtract", () => {
    test.each([
      [10, 5, 5],
      [2, 10, -8],
      [-5, -4, -1],
      [5, 0, 5],
      [2, -3, 5],
    ])("%i - %i = %i", (a, b, res) => {
      expect(calculator.subtract(a, b)).toBe(res);
    });
  });

  describe("multiply", () => {
    test.each([
      [2, 3, 6],
      [2, -4, -8],
      [-1, 10, -10],
      [0, 5, 0],
      [-2, -1, 2],
    ])("%i * %i = %i", (a, b, res) => {
      expect(calculator.mul(a, b)).toBe(res);
    });
  });

  describe("divide", () => {
    test.each([
      [6, 2, 3],
      [10, -2, -5],
    ])("%i / %i = %s", (a, b, res) => {
      expect(calculator.div(a, b)).toBe(res);
    });
    test("division by zero", () => {
      expect(() => calculator.div(5, 0)).toThrow();
    });
  });
});

describe("Analyze array", () => {
  test("valid input", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("empty array", () => {
    expect(analyzeArray([])).toEqual({
      average: 0,
      min: null,
      max: null,
      length: 0,
    });
  });

  test("single value", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });
});
