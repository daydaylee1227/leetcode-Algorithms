/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode-cn.com/problems/3sum-closest/
// 数组 + 双指针
// 以一个为起点

const threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let len = nums.length, ans = nums[0] + nums[1] + nums[len - 1]
    for(let i = 0; i < len - 1; i++) {
        let middle = nums[i]
        let right = len - 1, left = i + 1
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            ans = Math.abs(ans - target) > Math.abs(sum - target) ? sum : ans
            if(sum > target) {
                right--
            } else {
                left++
            }
        }
    }
    return ans
};