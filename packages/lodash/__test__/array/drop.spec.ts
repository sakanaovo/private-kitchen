import { describe, it, expect } from "vitest";
import _ from "../../src";

describe("drop#", () => {
  it("_ 应该有 drop", () => {
    expect("drop" in _).toBe(true);
  });

  it("drop", () => {
    expect(_.drop([1, 2, 3])).toEqual([2, 3]);

    expect(_.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);

    expect(_.drop([1, 2, 3], 2)).toEqual([3]);

    expect(_.drop([1, 2, 3], 5)).toEqual([]);
  });
});
