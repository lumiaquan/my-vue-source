import {def} from "./utils.js";

//需要被改写的方法
const changeMethodList = [
    'push',
    'pop',
    'shift',
    'unshift',
    'reverse',
    'sort'
]
//获取数组原型对象
const arrayPrototype = Array.prototype
//定义以数组原型为原型的对象
export const arrayMethods = Object.create(arrayPrototype)

changeMethodList.forEach(methodName => {
    //备份原来的方法
    const origin = arrayPrototype[methodName]
    //定义新方法
    def(arrayMethods, methodName, function () {
        //调用数组原型上的方法，获取返回值
        const result = origin.apply(this, arguments)
        const ob = this.__ob__
        let inserted = []
        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = arguments
                break
            case 'splice':
                inserted = Array(arguments).slice(2)
                break
        }
        if (inserted) {
            ob.observeArray(inserted)
        }
        console.log(123)
        return result
    }, false)
})