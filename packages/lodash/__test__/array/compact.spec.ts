import { describe, it, expect } from "vitest";
import _ from "../../src";

describe("compact#", () => {
  it("_ 上存在compact这个属性", () => {
    expect("compact" in _).toBe(true);
  });

  it('过滤掉false, null,0, "", undefined, 和 NaN这些假的值', () => {
    const arr1 = [1, false, 2, 3];
    expect(_.compact(arr1)).toEqual([1, 2, 3]);

    const arr2 = [1, "", 2, 3];
    expect(_.compact(arr2)).toEqual([1, 2, 3]);

    const arr3 = [1, null, 2, 3];
    expect(_.compact(arr3)).toEqual([1, 2, 3]);

    const arr4 = [1, undefined, 2, 3];
    expect(_.compact(arr4)).toEqual([1, 2, 3]);

    const arr5 = [1, 0, 2, 3];
    expect(_.compact(arr5)).toEqual([1, 2, 3]);

    const arr6 = [1, NaN, 2, 3];
    expect(_.compact(arr6)).toEqual([1, 2, 3]);

    const arr7 = [1, "", null, undefined, NaN, 0, false, 2, 3];
    expect(_.compact(arr7)).toEqual([1, 2, 3]);
  });
});
