function printCar(car: {
    make: string
    model: string
    year: number
}) {
    let str = `${car.make} ${car.model} (${car.year})`;
    console.log(str);
}

// gives error because of excess of properties
// printCar({
//     make: "honda",
//     model: "civic",
//     year: 2019,
//     color: "blue"
// })


// works properly since it is a variable which points to an object and print method uses only necessary props
const myNewCar = {
    make: "honda",
    model: "civic",
    year: 2019,
    color: "blue"
}

printCar(myNewCar);