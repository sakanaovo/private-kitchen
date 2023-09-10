import { describe, it, expect } from "vitest";
import _ from "../../src";

describe("indexOf#", () => {
  it("_ 上应该有 indexOf", () => {
    expect("indexOf" in _).toBe(true);
  });

  it("indexOf", () => {
    expect(_.indexOf([1, 2, 1, 2], 2)).toBe(1);

    expect(_.indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
  });
});
