import { expect } from "chai";
import camelCase from "../src/camelCase.js";

describe("camelCase()", () => {
  it("should convert 'Foo Bar' to 'fooBar'", () => {
    expect(camelCase("Foo Bar").trim()).to.equal("fooBar");
  });

  it("should convert '--foo-bar--' to 'fooBar'", () => {
    expect(camelCase("--foo-bar--").trim()).to.equal("fooBar");
  });

  it("should convert '__FOO_BAR__' to 'fooBar'", () => {
    expect(camelCase("__FOO_BAR__").trim()).to.equal("fooBar");
  });

  it("should handle single word strings", () => {
    expect(camelCase("HELLO").trim()).to.equal("hello");
  });

  it("should return empty string for empty input", () => {
    expect(camelCase("").trim()).to.equal("");
  });

  it("should camelCase mixed characters and numbers", () => {
    expect(camelCase("user 123 name").trim()).to.equal("user123Name");
  });

  
});
