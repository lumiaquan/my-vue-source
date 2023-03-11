import {observe} from "./observe.js";

export function defineReactive(data, key, val) {
    // console.log('我是defineReactive', data, key)
    // 子元素设置响应式
    let childOb = observe(val)
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log('get')
            return val
        },
        set(newValue) {
            console.log('set')
            if (newValue === val) {
                return
            }
            // 设置的新值也要变成响应式
            childOb = observe(newValue)
            val = newValue
        },
    })
}
