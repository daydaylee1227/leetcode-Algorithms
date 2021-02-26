// 动手实现一个call

Function.prototype.mycall = function () {
    let [thisArg, ...arg] = [...arguments]
    thisArg = Object(thisArg) || window
    const fn = Symbol()
    thisArg[fn] = this
    const result = thisArg[fn](...arg)
    delete thisArg[fn]
    return result
}