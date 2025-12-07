import { expect } from "chai";
import at from "../src/at.js";

describe("at()", () => {

  // pick values from object paths
  it("should pick values from deep object paths", () => {
    const object = { a: [{ b: { c: 3 } }, 4] };

    const result = at(object, ["a[0].b.c", "a[1]"]);

    expect(result).to.deep.equal([3, 4]);
  });

  it("should return undefined for invalid paths", () => {
    const object = { a: { b: 1 } };

    const result = at(object, ["a.c", "a.b.d"]);

    expect(result).to.deep.equal([undefined, undefined]);
  });

  it("should allow multiple string path arguments", () => {
    const object = { x: { y: 10 }, z: 20 };

    const result = at(object, "x.y", "z");

    expect(result).to.deep.equal([10, 20]);
  });

  it("should handle empty paths", () => {
    const object = { a: 1 };

    const result = at(object);

    expect(result).to.deep.equal([]);
  });
});
