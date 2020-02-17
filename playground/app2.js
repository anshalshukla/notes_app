const chalk = require("chalk")
const yargs = require("yargs")
const getNotes = require("./notes.js")

const command = process.argv[2]
// argv is the argument vector and it is the array of arguments passed in

if (command === "add") {
    console.log("Adding Note...")
} else if (command === "remove") {
    console.log("Removing Note...")
}

// Customise yargs version
yargs.version("1.1.0")

// Create add command
yargs.command

console.log(process.argv)
console.log(yargs.argv)
