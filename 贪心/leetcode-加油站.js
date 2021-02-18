/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// https://leetcode-cn.com/problems/gas-station/
// 这里我们需要注意的就是: 什么时候一定有解
// 很显然,当所有当gas[i]和大于cost[i]和时，一定会存在解
// 那么我们需要维护一个total变量,然后去判断当前当curr是不是小于0
// 小于0的话，说明从当前的第i个点出来,是不合理的，也就是到达不了
// 这样子的话，就能计算出答案
// totol记入的是整个gas-cost的话费,currTotal维护的内容就是从第i个出发后的结果
// ans记入的就是结果
const canCompleteCircuit = (gas, cost) => {
    let len = gas.length, total = 0, currTotal = 0, ans = 0
    for (let i = 0; i < len; i++) {
      currTotal += gas[i] - cost[i]
      if (currTotal < 0) {
        currTotal = 0
        ans = i+ 1
      }
      total = total + gas[i] - cost[i]
    }
    return total >= 0 ? ans : -1
  }