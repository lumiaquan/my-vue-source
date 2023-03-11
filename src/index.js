import {observe} from "./observe.js";


let obj = {
    a: {
        name: '张三',
        age: 18,
    },
    b: [1, 2, {speed: 'fast'}],
}

observe(obj)
obj.b.push([1, 2, 3, {car: 'lambokeni'}])
console.log(obj)