import { expect, describe, it } from "vitest";
import _ from "../../src";

describe("difference#", () => {
  it("_ 应该有 difference", () => {
    expect("difference" in _).toBe(true);
  });

  it("difference", () => {
    expect(_.difference([3, 2, 1], [4, 2])).toEqual([3, 1]);

    expect(_.difference([3, 2, 1], [4, 2], ["1"])).toEqual([3, 1]);

    expect(_.difference([3, 2, 1], [4, 2], 1)).toEqual([3]);

    expect(_.difference([3, 2, 1], [4, 2], 4, 2)).toEqual([3, 1]);
  });
});
