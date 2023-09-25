import { describe, it, expect } from "vitest";

import _ from "../../src";

describe("intersection#", () => {
  it("_ 上应该有 intersection", () => {
    expect("intersection" in _).toBe(true);
  });

  it("intersection", () => {
    expect(_.intersection([2, 1], [4, 2], [1, 2])).toEqual([2]);

    expect(_.intersection([])).toEqual([]);
  });
});
