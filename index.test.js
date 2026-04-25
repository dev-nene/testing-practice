import { capitalize, reverseString, caesarCipher } from "./index.js";

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
      expect(caesarCipher("todo#", 7)).toBe("avkv#")
    })
  });
});
