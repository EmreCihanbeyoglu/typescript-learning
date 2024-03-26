function invokeInFourSeconds(callback: () => undefined) {
    setTimeout(callback, 4000);
}


function invokeInFiveSeconds(callback: () => void) {
    setTimeout(callback, 5000);
}

const numbers: number[] = [];
//invokeInFourSeconds(() => numbers.push(4)); // gives error since we have defined undefined but it returns something
invokeInFiveSeconds(() => numbers.push(2)); // works properly since void means that it might return something but ignore it. 