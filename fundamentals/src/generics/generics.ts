function makeTuple<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}

const first = makeTuple(1,2); // [1,2]
const second = makeTuple("Emre", "cihan"); // ["Emre", "cihan"];