/**
 * @param {string} s
 * @return {number}
 */

// 暴力得解法: 遍历i,j,判断是不是回文串
// 时间复杂度是O(n * n * n)

// 显然这样子是不优雅的
// 那我们能不能缓存一下这个结果呢
// dp[i][j] 表达是含义, 从i到j,是不是可以构成回文串
// 这样子定义到话,其实也符合我们到预期,我们可以将这个大的问题拆分成无数的小问题
// 我们需哟考虑的点
// 1. 当i===j时,它肯定是回文
// 2. 当i+1 === j时,需要判断s[i] === s[j]
// 3. 当 j - i >= 2时, 需要判断s[i]===[j] && dp[i+1][j-1]是不是回文
countSubstrings = function (s) {
    let count = 0, len = s.length
    const dp = Array.from(new Array(len), () => new Array(len).fill(false))
    for (let j = 0; j < len; j++) {
      for (let i = 0; i <= j; i++) {
        if (i === j) {
          dp[i][j] = true
          count++
        } else if (j - i === 1 && s[i] === s[j]) {
          dp[i][j] = true
          count++
        } else if (j - i >= 2 && s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true
          count++
        }
      }
    }
    return count
  }