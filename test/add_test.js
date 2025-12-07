import { expect } from "chai";
import add from "../src/add.js"; 

describe("add function", () => {
  it("should add two positive numbers", () => {
    expect(add(6, 4)).to.equal(10);
  });

  it("should add negative and positive numbers", () => {
    expect(add(-2, 5)).to.equal(3);
  });

  it("should add zeros", () => {
    expect(add(0, 0)).to.equal(0);
  });

  it("should handle decimal numbers", () => {
    expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.0001);
  });
});
