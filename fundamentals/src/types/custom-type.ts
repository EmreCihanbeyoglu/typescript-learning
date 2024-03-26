type Combinable = number | string;

function combineInputsBasedOnTheirType(input1: Combinable, input2: Combinable) {
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }else {
        return input1.toString() + input2.toString();
    }
}

combineInputsBasedOnTheirType(2,5); // 7
combineInputsBasedOnTheirType("2", "5"); // 25