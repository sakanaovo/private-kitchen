import { describe, it, expect } from "vitest";
import { sum } from "../src";
describe("sum", () => {
  it("sum should be a function", () => {
    expect(typeof sum).toBe("function");
  });

  it("sum should receive the sum of two parameters and return", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
