type Customer = {
    name: string
    age: number
}

function printCustomer(customer: Customer): void {
    console.log(customer.name + " " + customer.age);
}