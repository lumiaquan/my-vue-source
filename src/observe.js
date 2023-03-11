import {Observer} from "./Observer.js";

export function observe(data) {
    if (typeof data !== 'object') {
        return
    }
    let ob
    if (data.__ob__ instanceof Observer) {
        ob = data.__ob__
    } else {
        ob = new Observer(data)
    }
    return ob
}
