// 手动实现一个深拷贝

function deepClone(obj, map = new WeakMap()) {
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);

    if (obj == null || typeof obj != 'object') return obj;
    if (map.has(obj)) {
        return map.get(obj);
    }
    let t = new obj.constructor();
    map.set(obj, t);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            t[key] = deepClone(obj[key], map);
        }
    }
    return t;
}
//测试用例
let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    },
    d: new RegExp(/^\s+|\s$/g)
}

let clone_obj = deepClone(obj)
obj.d = /^\s|[0-9]+$/g
console.log(clone_obj)
console.log(obj)
