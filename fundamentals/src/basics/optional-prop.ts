let car = {
    make: "honda",
    model: "civic",
    year: 2019
}

// function printCar(car: {
//     make: string
//     model: string
//     year: number
//     chargeVoltage?: number
// }) {
//     let str = `${car.make} ${car.model} (${car.year})`
//     if (typeof car.chargeVoltage !== "undefined"){
//         str += `// ${car.chargeVoltage}v`
//     }
//     console.log(str);
// }

printCar(car);