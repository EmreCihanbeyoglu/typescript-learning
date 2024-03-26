type questionResult = [number, boolean];

const firstQuestion: questionResult = [1, false];
const secondQuestion: questionResult = [2, true];
const thirdQuestion: questionResult = [3, true];

let answers: questionResult[] = [];
answers.push(firstQuestion);
answers.push(secondQuestion);
answers.push(thirdQuestion);

function countTotalCorrectAnswers(answers: questionResult[]) : number{
    let count = 0;
    for(const question of answers) {
        question[1] === true ? count ++ : "";
    }
    return count;
}

const countOfCorrectAnswers = countTotalCorrectAnswers(answers);
console.log(countOfCorrectAnswers);



type month = readonly [number, string];
const jan: month = [1, "January"];
const feb: month = [2, "February"];


// jan.push(1); // gives error since it is defined as readonly
jan.length // 2