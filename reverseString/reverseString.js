function reverseString(str) {
  let  string = str.split("").reduce((acc, char) => char + acc, "");
  return string;
}
module.exports = reverseString;

