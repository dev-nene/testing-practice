import {capitalize} from "./index.js"

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