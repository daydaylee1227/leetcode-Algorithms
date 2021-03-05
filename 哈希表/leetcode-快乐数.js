/**
 * @param {number} n
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/happy-number/
// 简单枚举一下即可

const isHappy = (n) => {
    const map = new Map()
    while(n != 1){
        if( map.has(n)) return false
        map.set(n, true)
        n = String(n).split('').map(item => item**2).reduce((a,b)=>a+b)
    }
    return true
};
