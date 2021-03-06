// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let mxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      mxChar = char;
    }
  }
  return mxChar
}

module.exports = maxChar;

// What is the most common character in a string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?
