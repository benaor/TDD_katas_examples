import { romanNumerals } from "../src/romanNumerals";

describe("RomanNumerals tests", () => {
  it("should return I when sending a 1 ", () => {
    expect(romanNumerals(1)).toBe("I");
  });

  it("should return II when sending a 2 ", () => {
    expect(romanNumerals(2)).toBe("II");
  });

  it("should return III when sending a 3 ", () => {
    expect(romanNumerals(3)).toBe("III");
  });

  it("should return V when sending a 5 ", () => {
    expect(romanNumerals(5)).toBe("V");
  });

  it("should return VII when sending a 7 ", () => {
    expect(romanNumerals(7)).toBe("VII");
  });

  it("should return XXXVIII when sending a 38 ", () => {
    expect(romanNumerals(38)).toBe("XXXVIII");
  });

  it("should return IV when sending a 4 ", () => {
    expect(romanNumerals(4)).toBe("IV");
  });

  it("should return IX when sending a 9 ", () => {
    expect(romanNumerals(9)).toBe("IX");
  });

  it("should return XLII when sending a 42 ", () => {
    expect(romanNumerals(42)).toBe("XLII");
  });

  it("should return XC when sending a 90 ", () => {
    expect(romanNumerals(90)).toBe("XC");
  });

  it("should return CI when sending a 101 ", () => {
    expect(romanNumerals(101)).toBe("CI");
  });

  it("should return CDIV when sending a 404 ", () => {
    expect(romanNumerals(404)).toBe("CDIV");
  });

  it("should return DCCXXI when sending a 721 ", () => {
    expect(romanNumerals(721)).toBe("DCCXXI");
  });

  it("should return MMCMLVII when sending a 2957 ", () => {
    expect(romanNumerals(2957)).toBe("MMCMLVII");
  });
});
