import { fizzBuzz } from "../src/fizzBuzz";

describe("FizzBuzz tests", () => {
  it("should return a 1 when seding 1", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("should return a 2 when seding 2", () => {
    expect(fizzBuzz(2)).toBe("2");
  });

  it("should return a 4 when seding 4", () => {
    expect(fizzBuzz(4)).toBe("4");
  });

  it("should return a Fizz when seding 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return a Fizz when seding 6", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("should return a Fizz when seding 9", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return a Buzz when seding 10", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return a Buzz when seding 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return a Buzz when seding 10", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return a Buzz when seding 20", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });

  it("should return a Buzz when seding 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return a Buzz when seding 30", () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
  it("should return a Buzz when seding 45", () => {
    expect(fizzBuzz(45)).toBe("FizzBuzz");
  });
});
