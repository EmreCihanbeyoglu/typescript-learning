type TwoNumberCalc = (x: number, y: number) => number;

const addNumbers: TwoNumberCalc = (a,b) => a + b;
const subtractNumber: TwoNumberCalc = (a,b) => a - b;

addNumbers(2,4); // 6
subtractNumber(5,4); // 1