const person = {
    name: "Emre",
    age: 35
}

console.log(person);
//console.log(person.nickName); // throws error since there is no such a property


/**
 * separate declarion and initialization
 */
let employee: {
    name: string;
    surname: string;
    age: number
}

employee = {
    name: "Emre",
    surname: "Cihan",
    age: 34

}
