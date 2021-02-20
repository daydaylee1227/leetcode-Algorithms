/**
 * @param {number[]} nums
 * @return {number}
 */


// https://leetcode-cn.com/problems/maximum-product-subarray/

// dp[i]含义表示的是,以第i个结尾,最大值,这个时候,我们需要考虑的什么情况下是最大值
// 第一种情况,最大的值就是前面dp[i-1] * nums[i]
// 或者是本身也可以,第二种情况就是前面一个负数,然后自己也是负数
// 所有需要维护两个dp,分别是最大，最小值。

const maxProduct = (nums) => {
    let len = nums.length, maxDp = new Array(len).fill(0), minDp = new Array(len).fill(0)
    maxDp[0] = minDp[0] = nums[0]
    for (let i = 1; i < len; i++) {
      maxDp[i] = Math.max(nums[i], maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i])
      minDp[i] = Math.min(nums[i], nums[i] * minDp[i-1], nums[i] * maxDp[i-1])
    }
    return Math.max(...maxDp)
  }