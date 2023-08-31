module.exports.reverseString = reverseString;

function reverseString(string) {
  let arr = [];
  let char = string.split("");
  for (let i = char.length - 1; i >= 0; i--) {
    let ele = char[i];
    arr.push(ele);
  }
  return arr.join("");
}

console.log(reverseString("hello"));
