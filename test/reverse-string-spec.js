const { reverseString } = require("../problems/reverse-string");
const chai = require("chai");
const expect = chai.expect;

describe("reverseString(string)", () => {
  let fun;
  it("should reverse input string", () => {
    const string1 = "fun";
    expect(fun).to.equal("nuf");
  });
});

// describe("isFive(num)", () => {
//   it("should return true if the num is 5 otherwise false", () => {
//     const num1 = 5;

//     const actual1 = isFive(num1); // should be true

//     expect(actual1).to.be.true;

//     const otherInput = "not 5";
//     const num2 = 4;

//     const actual2 = isFive(num2); // should be false
//     const actual3 = isFive(otherInput); // should be false

//     expect(actual2).to.be.false;
//     expect(actual3).to.be.false;
//   });
// });
