/**
 * @param {character[][]} grid
 * @return {number}
 */

// https://leetcode-cn.com/problems/number-of-islands/
// 遍历每一个位置,每当grid[i][j]为1时, 答案+1
// 并且每次都不会回溯结果
// 接下来需要做的就是把它四周的都遍历掉

const numIslands = function(grid) {
    let ans = 0, m = grid.length, n = grid[0].length
    const dx =[1,0,-1,0]
    const dy =[0,1,0,-1]
    const dfs = (i, j) => {
        grid[i][j] = '0'
        for(let k = 0; k < 4; k++) {
            const x = dx[k] + i
            const y = dy[k] + j
            if(x>=0 && x < m && y >= 0&& y < n && grid[x][y] === '1') {
                dfs(x, y)
            }
        }
    }
    for(let i = 0; i< m; i++ ){
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                dfs(i, j)
                ans++
            }
        }
    }
    return ans 
};