/**
 * @param {string} s
 * @return {string[][]}
 */

// https://leetcode-cn.com/problems/palindrome-partitioning/
// 利用动态规划来解决字符串s是否是回文串
// dp[i][j] 表示的就是从i到j是否是回文串

// 有了这个结果后，我们需要做得就是遍历这个dp[i][j]即可

const partition = function (s) {
    const res = [];
    const dp = new Array(s.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length);
    }
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (i == j) {
                dp[i][j] = true;
            } else if (j - i == 1 && s[i] == s[j]) {
                dp[i][j] = true;
            } else if (j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
            } else {
                dp[i][j] = false;
            }
        }
    }
    function dfs(temp, start) {
        if (start == s.length) {
            res.push(temp.slice());
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (dp[start][i]) {
                temp.push(s.substring(start, i + 1));
                dfs(temp, i + 1);
                temp.pop();
            }
        }
    }
    dfs([], 0);
    return res;
};