/**
 * @param {string} s
 * @return {boolean}
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * Example 1:
 * 
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * Example 2:
 * 
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * Example 3:
 * 
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 */
 var isPalindrome = function(s) {
    // clean up string
    const cs = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const len = cs.length;
    if (len < 2) { 
        return true; 
    }
    const middle = parseInt(len / 2);
    const first = cs.slice(0, middle);
    const second = cs.slice(middle + (len % 2), len);
    if (first === second.split('').reverse().join('')) {
        return true; 
    } else {
        return false;
    }     
};
console.log('"aa" => ', isPalindrome('aa')) // true
console.log('"" => ', isPalindrome('')) // true
console.log('"a" => ', isPalindrome('a'))   // true
console.log('"A man, a plan, a canal: Panama" => ', isPalindrome('A man, a plan, a canal: Panama')) // true
console.log('"0P" => ', isPalindrome('0P')) // false
console.log('"aap"', isPalindrome('aap'))   // false
