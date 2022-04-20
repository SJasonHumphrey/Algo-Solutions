// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
}

module.exports = reverse;

// function reverse(str) {
//   return str
//   .split("")
//   .reverse()
//   .join("");
// }

// function reverse(str) {
//     let reveresed = '';
//     for ( let character of str) {
//         reversed = character + reversed;
//     }
//     return reveresed;
// }

// function reverse(str) {
//     str.split('').reduce((reversed, character)=> {
//       return character + reversed;
//     }, '');
// }