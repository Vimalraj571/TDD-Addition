/* eslint-disable no-undef */
const { Addition } = require("../addition");

describe("Testing Addition", () => {
  // input  : ""
  // output : 0
  test("Empty String as Input", () => {
    expect(Addition("")).toBe(0);
  });
  // input  : "1"
  // output : 1
  test("Simple String with one value", () => {
    expect(Addition("1")).toEqual(1);
  });
  // input  : "1,2"
  // output : 3
  test("Simple String with two value with comma as seperator", () => {
    expect(Addition("1,2")).toEqual(3);
  });
  // input  : "1,2,3,4,5,6,7,8,9,0,10,11,12"
  // output : 78
  test("String with two or more value with comma as seperator", () => {
    expect(Addition("1,2,3,4,5,6,7,8,9,0,10,11,12")).toEqual(78);
  });
  // input  : "1,2\n3"
  // output : 3
  test("String with two or more value with comma and new line as seperator", () => {
    expect(Addition("1,2\n3")).toEqual(6);
  });
  // input  : "1,2,3,4,5\n6,7,8\n9,0\n10,11\n12"
  // output : 78
  test("String with two or more value with comma,new line as seperator", () => {
    expect(Addition("1,2,3,4,5\n6,7,8\n9,0\n10,11\n12")).toEqual(78);
  });
  // input  : "//'\n1'2"
  // output : 3
  test("Support different delimiters", () => {
    expect(Addition("//'\n1'2")).toEqual(3);
  });
  // input  : "//#\n1#-2"
  // output : negatives not allowed
  test("Handle the negative Numbers", () => {
    expect(() => Addition("//#\n1#-2")).toThrow("negatives not allowed");
  });
  // input  : "//#\n1#-2"
  // output : negatives not allowe
  test("Handle the multiple negative Numbers", () => {
    expect(() => Addition("//#\n-11#-2")).toThrow("negatives not allowed");
  });
  // input  : "11111"
  // output : 11111
  test("Single Multi Digit", () => {
    expect(Addition("11111")).toEqual(11111);
  });
  // input  : "-111111"
  // output : negatives not allowed
  test("Single multi Digit negative", () => {
    expect(() => Addition("-11111")).toThrow("negatives not allowed");
  });
  // input  : "-11111,-222222"
  // output : negatives not allowed
  test("Simple multi Digit negative", () => {
    expect(() => Addition("-11111,-222222")).toThrow("negatives not allowed");
  });
  // input  : "////"
  // output : negatives not allowed
  test("Invalid Input", () => {
    expect(() => Addition("////")).toThrow("not a valid input");
  });
  // input  : "1,\n""
  // output : not a valid input
  test("Invalid Input", () => {
    expect(() => Addition("1,\n")).toThrow("not a valid input");
  });
});
