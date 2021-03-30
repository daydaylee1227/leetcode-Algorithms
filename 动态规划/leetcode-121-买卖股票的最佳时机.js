/**
 * @param {number[]} prices
 * @return {number}
 */
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// 买卖股票的最佳时机
// dp[i] 表示到第几天后到最大利润
// dp[i] = Math.max(dp[i−1], prices[i] - minprice)
// 临界的结果就是prices[0]
const maxProfit = prices => {
    let max = 0, minprice = prices[0]
    for(let i = 1; i < prices.length; i++) {
        minprice = Math.min(prices[i], minprice)
        max = Math.max(max, prices[i] - minprice)
    }
    return max
};