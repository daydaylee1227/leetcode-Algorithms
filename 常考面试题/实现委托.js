function delegate(ele, eleType, selector, callback) {
    ele.addEventListener(eleType, e => {
        let el = e.target
        while (!el.matches(selector)) {
            if (el === ele) {
                // 表示的是以及到ele,父节点上
                el = null
                break
            }
            el = el.parentNode
        }
        el && callback.call(el, e, el)
    })
    return ele
}