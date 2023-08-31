import { chunk } from "./../../src/array/chunk";
import { describe, it, expect } from "vitest";
import _ from "../../src";

describe("chunk#", () => {
  it("_ 上存在chunk这个属性", () => {
    expect("chunk" in _).toBe(true);
  });

  it("chunk", () => {
    const arr = ["a", "b", "c", "d"];

    expect(_.chunk(arr, 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);

    expect(_.chunk(arr, 3)).toEqual([["a", "b", "c"], ["d"]]);

    expect(chunk([arr], -1)).toEqual([]);

    expect(chunk(arr, 0)).toEqual([]);

    expect(chunk(arr, 5)).toEqual(arr);
  });
});
