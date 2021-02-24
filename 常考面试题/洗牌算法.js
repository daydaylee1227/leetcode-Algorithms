// 这里实现的就是经典的洗牌算法
// 经典的洗牌算法思路:
// 当我们选一个数字后，我们没有必要在下一次随机的时候选择它
// 因此，我们每次只从可选的数的集合中进行随机

// 默认这个cards是数组

const shuffle = (cards) => {
    let len = cards.length, randomIndex
    for (let i = len - 1; i >= 0; i--) {
        randomIndex = Math.floor(i * Math.random())
        const tmp = cards[randomIndex]
        cards[randomIndex] = cards[i]
            cards[i] = tmp
    }
    return cards
}