let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] }
 
// instanceof
if (value instanceof Date) {
  value
   
//let value: Date
}
// typeof
else if (typeof value === "string") {
  value
   
//let value: "pineapple"
}
// Specific value check
else if (value === null) {
  value
   
//let value: null
}
// Truthy/falsy check
else if (!value) {
  value
   
//let value: undefined
}
// Some built-in functions
else if (Array.isArray(value)) {
  value
   
//let value: [number]
}
// Property presence check
else if ("dateRange" in value) {
  value
   
// let value: {
//     dateRange: [Date, Date];
// }
} else {
  value
   
//let value: never
}