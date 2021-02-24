function promise(fn) {
    fn((data) => this.success(data), (error) => this.error(error))
}


promise.prototype.success = function (data) {
    this.success(data)
}
promise.prototype.error = function (err) {
    this.error(err)
}
promise.prototype.then = function (success, err) {
    this.success = success
    this.err = err
}