import { capitalize, reverseString } from "./index.js";

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
