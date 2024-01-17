/**
 * @param {string} s
 * @return {boolean}
*/

function isPalindrome(s) {
    const string = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
    return string.split("").reverse().join("") === string;
}