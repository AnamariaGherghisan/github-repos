import { formatTopics } from "./formatTopics";

describe("formatTopics", () => {
  it("should return a list of topics", () => {
    const expected = "#nodejs, #react";
    const actual = formatTopics(["nodejs", "react"]);

    expect(actual).toEqual(expected);
  });

  it("should return a list of single topic", () => {
    const expected = "#nodejs";
    const actual = formatTopics(["nodejs"]);

    expect(actual).toEqual(expected);
  });

  it("should return an empty string for no topics", () => {
    const expected = "";
    const actual = formatTopics([]);

    expect(actual).toEqual(expected);
  });

  it("should return an empty string for undefined topics", () => {
    const expected = "";
    const actual = formatTopics();

    expect(actual).toEqual(expected);
  });
});
