export function def(data, key, value, enumerable) {
    Object.defineProperty(data, key, {
        enumerable,
        configurable: true,
        value
    })
}
