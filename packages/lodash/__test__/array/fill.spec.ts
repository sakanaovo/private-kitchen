import { describe, it, expect } from "vitest";
import _ from "../../src";

describe("fill#", () => {
  it("_ 应该有 fill", () => {
    expect("fill" in _).toBe(true);
  });

  it("fill", () => {
    const array = [1, 2, 3];
    expect(_.fill(array, "a")).toEqual(["a", "a", "a"]);

    expect(_.fill(array, "*", 1, 2)).toEqual([1, "*", 3]);

    expect(_.fill([4, 6, 8, 10], "*", 1, 3)).toEqual([4, "*", "*", 10]);
  });
});
