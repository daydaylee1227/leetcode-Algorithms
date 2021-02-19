/**
 * @param {number[]} nums
 * @return {number}
 */
// 不错的题解：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/
// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// dp[i] 的值代表 nums 前 i 个数字的最长子序列长度。
// dp[i] = max(dp[i], dp[j] + 1), nums[i] > nums[j]

const lengthOfLIS = (nums) => {
    const len = nums.length, dp = new Array(len).fill(1)
    for (let i = 1; i < len; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1)
        }
      }
    }
    return Math.max(...dp)
  }