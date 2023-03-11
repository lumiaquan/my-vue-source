import {def} from "./utils.js";
import {defineReactive} from "./defineReactive.js";
import {arrayMethods} from "./array.js";
import {observe} from "./observe.js";

export class Observer {
    constructor(data) {
        // 添加__ob__标记，指向Observer实例对象，避免循环递归
        def(data, '__ob__', this)

        if (Array.isArray(data)) {
            //如果data是数组，强行将修改它的原型为arrayMethods,所以调用7个方法会先在arrayMethods里找
            Object.setPrototypeOf(data, arrayMethods)
            this.observeArray(data)
        } else {
            this.walk(data)
        }
    }

    //遍历对象，逐级响应式处理
    walk(data) {
        for (let key in data) {
            defineReactive(data, key, data[key])
        }
    }

//遍历数组，进行响应式处理
    observeArray = function (data) {
        for (let i = 0, l = data.length; i < l; i++) {
            observe(data[i])
        }
    }
}

