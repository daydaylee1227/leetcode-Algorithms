/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// https://leetcode-cn.com/problems/combinations/
// 注意的是考虑的是无序的，所以数据只用一次就好

const combine = (n, k) => {
    const res = []
    const dfs = (start, arr) => {
        if(arr.length === k) {
            return res.push(arr.slice())
        }
        for(let i = start; i <= n; i++) {
            arr.push(i)
            dfs(i+1, arr)
            arr.pop()
        }
    }
    dfs(1, [])
    return res
}