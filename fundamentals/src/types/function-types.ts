function add(n1: number, n2: number) {
    return n1 + n2;
}

// method signature should be defined with types as we do in Java
type Sum = (a: number, b: number) => number;

const result: Sum = add;

console.log(result(3,4));


/**
 * callback example
 */

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(2,3, (result) => {
    console.log(result);
});