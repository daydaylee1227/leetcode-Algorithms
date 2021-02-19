/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// https://leetcode-cn.com/problems/coin-change/
// 不错的题解：https://leetcode-cn.com/problems/coin-change/solution/js-xiang-jie-dong-tai-gui-hua-de-si-xiang-yi-bu-da/


// 我们的思路就是维护一个dp数组,dp[i] 表达的就是面值为i时，最小的话费
// dp[i] = Math.min(dp[i], 1 + dp[i - coins[k]])
const coinChange = (coins, amount) => {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
      for (let coin of coins) {
        if (i - coin >= 0) {
          dp[i] = Math.min(dp[i], 1 + dp[i - coin])
        }
      }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
  }

// const coinChange = function(coins, amount) {
//   let dp = new Array( amount + 1 ).fill( Infinity );
//   dp[0] = 0;
  
//   for (let i = 1; i <= amount; i++) {
//     for (let coin of coins) {
//       if (i - coin >= 0) {
//         dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//       }
//     }
//   }
  
//   return dp[amount] === Infinity ? -1 : dp[amount];
// }