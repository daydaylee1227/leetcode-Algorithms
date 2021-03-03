// 触发实践后，每隔一段实践执行
// 比如 滚动条事件
function throttle(fn, delay) {
    let flag = true,
        timer = null
    return function(...args) {
        let context = this
        if(!flag) return
        
        flag = false
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context,args)
            flag = true
        },delay)
    }
}