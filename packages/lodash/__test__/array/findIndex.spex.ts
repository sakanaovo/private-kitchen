import { describe, it, expect } from "vitest";
import _ from "../../src";

describe("findIndex#", () => {
  it("_ 上应该有 findIndex", () => {
    expect("findIndex" in _).toBe(true);
  });

  it("findIndex", () => {
    type Users = {
      user: string;
      active: boolean;
    };
    const users: Users[] = [
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ];

    expect(_.findIndex(users, (i) => i.user === "barney")).toBe(0);

    expect(_.findIndex(users, (i) => i.user === "fred")).toBe(1);

    expect(_.findIndex(users, (i) => i.active === false)).toBe(0);

    expect(_.findIndex(users, (i) => i.active === true)).toBe(2);

    expect(_.findIndex(users, (i) => i.user === "A")).toBe(-1);
  });
});
