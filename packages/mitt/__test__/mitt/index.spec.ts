import { test, vi, describe, it, expect, beforeEach } from "vitest";
import { HandlersMap, Emitter, mitt } from "../../src";

describe("mitt", () => {
  // 应该是一个函数
  it("should be a function", () => {
    expect(typeof mitt).toBe("function");
  });

  //  传入一个可选的事件处理程序映射
  it("should accept an optional event handler map", () => {
    const event = new Map();
    const emitter = mitt(event);
    expect(emitter.events).toBe(event);
    expect(() => mitt(new Map())).not.toThrow();
    const map = new Map();
    const handlers = {
      a: () => {},
      b: () => {},
    };
    const a = vi.spyOn(handlers, "a");
    const b = vi.spyOn(handlers, "b");
    map.set("foo", [a, b]);
    expect(() => mitt(map)).not.toThrow();
    const events = mitt<{ foo: undefined }>(map);

    events.emit("foo");
    // 期望a函数被调用一次
    expect(a).toHaveBeenCalledTimes(1);
    // 期望b函数被调用一次
    expect(b).toHaveBeenCalledTimes(1);
  });
});

describe("mitt#", () => {
  const evetType = Symbol("evetType");
  type Events = {
    foo: unknown;
    constructor: unknown;
    FOO: unknown;
    bar: unknown;
    Bar: unknown;
    "baz:bat!": unknown;
    "baz:baT!": unknown;
    Foo: unknown;
    [evetType]: unknown;
  };

  let events: HandlersMap<Events>, inst: Emitter<Events>;

  beforeEach(() => {
    events = new Map();
    inst = mitt(events);
  });

  describe("properties", () => {
    it("should expose the event handler map", () => {
      expect(events).toBe(events);
    });
  });

  describe("on", () => {
    it("should be a function ", () => {
      expect(typeof inst.on).toBe("function");
    });

    it("should register event handler for new type", () => {
      const foo = () => {};
      inst.on("foo", foo);
      expect(events.get("foo")).toEqual([foo]);
    });

    it("should register handlers for any type strings", () => {
      const foo = () => {};
      inst.on("constructor", foo);
      expect(events.get("constructor")).toEqual([foo]);
    });

    it("should append hanler for existing type", () => {
      const foo = () => {};
      const bar = () => {};
      inst.on("foo", foo);
      inst.on("foo", bar);
      expect(events.get("foo")).toEqual([foo, bar]);
    });

    it("should NOT normalize case", () => {
      const foo = () => {};
      inst.on("FOO", foo);
      inst.on("Bar", foo);
      inst.on("baz:bat!", foo);

      expect(events.get("FOO")).toEqual([foo]);
      expect(events.has("foo")).toEqual(false);
      expect(events.get("Bar")).toEqual([foo]);
      expect(events.has("bar")).toEqual(false);
      expect(events.get("baz:bat!")).toEqual([foo]);
    });

    it("can take symbol for event tpye", () => {
      const foo = () => {};
      inst.on(evetType, foo);
      expect(events.get(evetType)).toEqual([foo]);
    });

    it("should add duplicate listeners", () => {
      const foo = () => {};
      inst.on("foo", foo);
      inst.on("foo", foo);
      expect(events.get("foo")).toEqual([foo, foo]);
    });
  });

  describe("off", () => {
    it("should be a function", () => {
      expect(typeof inst.off).toBe("function");
    });

    it("should remove for type", () => {
      const foo = () => {};
      inst.on("foo", foo);
      inst.off("foo", foo);
      expect(events.get("foo")).toEqual([]);
    });

    it("should NOT normalize case", () => {
      const foo = () => {};
      inst.on("FOO", foo);
      inst.off("FOO", foo);
      expect(events.get("FOO")).toEqual([]);
      expect(events.has("foo")).toEqual(false);
    });

    it("should remove only the listener passed", () => {
      const foo = () => {};
      const bar = () => {};
      inst.on("foo", foo);
      inst.on("foo", bar);
      inst.off("foo", foo);
      expect(events.get("foo")).toEqual([bar]);
    });
  });

  describe("emit", () => {
    it("should be a function", () => {
      expect(typeof inst.emit).toBe("function");
    });

    it("should invoke handlers for type", () => {
      const event = { type: "foo" };
      inst.on("foo", (one: any, two?: unknown) => {
        expect(one).toBe(event);
        expect(two).toBe(undefined);
      });

      inst.emit("foo", event);
    });

    it("should NOT normalize case", () => {
      const foo = vi.fn();
      inst.on("FOO", foo);
      inst.emit("FOO");
      expect(foo).toHaveBeenCalledTimes(1);

      const event = { type: "FOO" };
      inst.on("FOO", (one: any, two?: unknown) => {
        expect(one).toBe(event);
        expect(two).toBe(undefined);
      });

      inst.emit("FOO", event);
    });
  });
});
