import { describe, it, expect } from "vitest";
import _ from "../../src";

describe("concat#", () => {
  it("_ 上存在 concat 这个属性", () => {
    expect("concat" in _).toBe(true);
  });

  it("concat", () => {
    const array = [1];
    expect(_.concat(array, 2, [4])).toEqual([1, 2, 4]);

    expect(_.concat(array, "2", [4])).toEqual([1, "2", 4]);

    expect(_.concat(array, "2", [4], [[1, 2, 3]])).toEqual([
      1,
      "2",
      4,
      [1, 2, 3],
    ]);

    expect(array).toEqual(array);
  });
});
