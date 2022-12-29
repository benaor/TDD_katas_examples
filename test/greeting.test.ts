import { greeting } from "../src/greeting";

describe("Greeting Test", () => {
  it("should greet the morning when it is the morning", () => {
    Date.prototype.getHours = jest.fn().mockReturnValue(7);
    expect(greeting()).toBe("Good morning!");
  });

  it("should greet the afternoon when it is the afternoon", () => {
    Date.prototype.getHours = jest.fn().mockReturnValue(15);
    expect(greeting()).toBe("Good afternoon!");
  });

  it("should greet the evening when it is the evening", () => {
    Date.prototype.getHours = jest.fn().mockReturnValue(18);
    expect(greeting()).toBe("Good evening!");
  });

  it("should greet the night when it is the night", () => {
    Date.prototype.getHours = jest.fn().mockReturnValue(23);
    expect(greeting()).toBe("Good night!");
  });

  it("should greet the night when it is the night", () => {
    Date.prototype.getHours = jest.fn().mockReturnValue(2);
    expect(greeting()).toBe("Good night!");
  });

  it("should greet the day when hours is undefined", () => {
    Date.prototype.getHours = jest.fn().mockReturnValue(undefined);
    expect(greeting()).toBe("Good day!");
  });
});
