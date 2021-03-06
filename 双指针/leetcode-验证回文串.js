/**
 * @param {string} s
 * @return {boolean}
 */

// 利用的是双指针
// 判断是不是数字和字母

const isValid = (c) => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')

const isPalindrome = function(s) {
    let i = 0, j = s.length - 1
    s = s.toUpperCase()
    while(i < j) {
        if(!isValid(s[i])) {
            i++
            continue
        }
        if(!isValid(s[j])) {
            j--
            continue
        }
        if(s[i]!==s[j]) return false
        i++
        j--
    }
    return true
};