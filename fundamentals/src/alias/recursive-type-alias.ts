type recursiveType = number | recursiveType[];

const val: recursiveType = [1, 2, [1,2], [], [[1,3,]]]

// val.push('emre'); // gives error