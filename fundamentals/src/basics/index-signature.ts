const salary1 = {
    baseSalary: 100_000,
    yearlyBonus: 20_000
  };

const salary2 = {
    contractSalary: 110_000
};

function calculateTotalSalary(salary: {[key: string]: number}) {
    let total = 0;
    for(const name in salary) {
        total += salary[name];
    }
    return total;
}

console.log(calculateTotalSalary(salary1)); // 120 000
console.log(calculateTotalSalary(salary2)); // 110 000

const salary3 = {
    baseSalary: "200"
}

// console.log(calculateTotalSalary(salary3));  // gives error