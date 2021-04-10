/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// https://leetcode-cn.com/problems/isomorphic-strings/
// 简单用一个对象去映射
// 需要注意的就是，双方的结构是对等的

const isIsomorphic = function(s, t) {
    let flag = true, len = s.length, i = 0, tmp = {}, tmpc = {};
    while( i < len) {
        if(tmp[s[i]]) {
            if(tmp[s[i]] !== t[i]) {
                flag = false
                return false
            }
        } else {
            tmp[s[i]] = t[i]
        }
        if(tmpc[t[i]]) {
            if(tmpc[t[i]] !== s[i]) return false
        } else {
            tmpc[t[i]] = s[i]
        }
        i++
    }
    return flag
};