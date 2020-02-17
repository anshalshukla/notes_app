// const add = require("./utilis.js")
// // this just a random variable and it's not necessary to name it "name".
// //const name = "Anshal"

// const sum = add(4, -2)
// console.log(sum)

// //console.log(name)

const chalk = require("chalk")

const validator = require("validator")

const get_notes = require("./notes.js")

console.log(get_notes())

console.log(validator.isEmail("pilani.bits-pilani.ac.in"))
console.log(validator.isURL("https://need.io"))
console.log(chalk.red.bold.inverse("Error!"))