// 实现一个防抖函数
// 输入框 当用户完成操作后,才需要后续操作
// 比如 resize

const debounce = (fn, delay) => {
    let timer = null
    return () => {
        if (timer) clearTimeout(timer)
        setTimeout(fn, delay);
    }
}