// 实现一个归并排序
// 思路:
// 先递归的分解数列，再合并数列（分治思想的典型应用）

const merge = (left, right) => {
    const res = []
    let i = 0, j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i++])
        } else {
            res.push(right[j++])
        }
    }
    while (i < left.length) { res.push(left[i++]) }
    while (j < right.length) { res.push(right[j++]) }
    return res
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = arr.length >> 1
    const left = arr.splice(0, mid),
        right = arr
    const leftMerge = mergeSort(left),
        rightMerge = mergeSort(right)
    return merge(leftMerge, rightMerge)
}

