/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    return Array.from(s).every(letter => Array.from(t).includes(letter));
}