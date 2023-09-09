import { describe, it, expect } from "vitest";
import _ from "../../src";

describe("dropWhile#", () => {
  it("_ 上应该有 dropWhile", () => {
    expect("dropWhile" in _).toBe(true);
  });

  it("dropWhile", () => {
    type Users = {
      user: string;
      active: boolean;
    };
    const users: Users[] = [
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ];

    expect(_.dropWhile(users, (o) => !o.active)).toEqual([
      { user: "pebbles", active: true },
    ]);
  });
});
