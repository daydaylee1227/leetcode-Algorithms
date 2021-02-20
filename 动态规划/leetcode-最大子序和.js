/**
 * @param {number[]} nums
 * @return {number}
 */
// 不错的题解:
// https://leetcode-cn.com/problems/maximum-subarray/solution/53-zui-da-zi-xu-he-by-alexer-660/
// https://leetcode-cn.com/problems/maximum-subarray/
// 这个需要计算得是最大值,那么我们是不是可以尝试去维护一下结果
// dp[i] 表示的是以第i个结尾的最大自序和
// dp[i] = max(dp[i-1] + nums[i], nums[i])


const maxSubArray = (nums) => {
    let dp = Array(nums.length).fill(0), res = dp[0], len = nums.length
    dp[0] = nums[0]
    for (let i = 1; i < len; i++) {
      dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
    }
    return Math.max(...dp)
  }