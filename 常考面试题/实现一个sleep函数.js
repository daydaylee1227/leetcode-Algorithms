// 收入多少时间长,延迟多久执行

async function sleep(time) {
    return new Promise((reject) => setTimeout(reject, time))
}
