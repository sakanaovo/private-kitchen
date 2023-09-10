import { head } from "./../../src/array/head";
import { describe, it, expect, vitest, vi } from "vitest";
import _ from "../../src";

describe("head#", () => {
  it("_ 上应该有 head", () => {
    expect("head" in _).toBe(true);
  });

  it("head", () => {
    expect(_.head([1, 2, 3])).toBe(1);

    expect(_.head([])).toBe(undefined);
  });

  it("head 别名为 first", () => {
    expect(_.first).toBe(_.head);

    const headRes = _.head([1, 2, 3]);

    const firstRes = _.first([1, 2, 3]);

    expect(headRes).toBe(firstRes);
  });
});
