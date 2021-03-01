// 手动实现柯里化函数
// 思想: 它是一个函数，他接收函数A作为参数，运行后能够返回一个新的函数。
// 并且这个新的函数能够处理函数A的剩余参数。

const currying = (fn, ...args) => {
    return fn.length > args.length ? (...newArgs) => currying(fn, ...args, ...newArgs): fn(...args)
}