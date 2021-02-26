// 实现bind功能

Function.prototype.mybind = function (thisArg, ...arg){
    const fn = this 
    return function (...rest) {
        return fn.apply(thisArg,[...arg, ...rest])
    }
}
