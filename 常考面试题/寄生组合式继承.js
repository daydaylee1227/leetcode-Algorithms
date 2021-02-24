const inherit = (Son, Father) => {
    //  创建对象，创建父类原型的一个副本
    const prototype = Object.create(Father.prototype)
    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
    prototype.constructor = Son
    // 指定对象，将新创建的对象赋值给子类的原型
    Son.prototype = prototype
}
