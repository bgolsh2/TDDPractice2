
function reverseString(string) {
  let newStr = '';

  for (let i = string.length - 1; i >= 0; i--) {
    let char = string[i];
    newStr += char;

  }
  return newStr;
}


console.log(reverseString("hello"));





// __________________________________________________________________________________
// DO NOT EDIT BELOW THS LINE
// __________________________________________________________________________________


module.exports = { reverseString };
