const fs = require("fs")
const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday "
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync("1-json.json", bookJSON)
console.log(bookJSON)
// json stores it like a string not like an object so different attributes cannot be accessed 
// bookJSON.title cannot be accessed but book.title can be

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
// parsedData is js object

const dataBuffer = fs.readFileSync("1-json.json")
//What comes back is buffer which is a way of node.js to represent
//binary data
console.log(dataBuffer.toString())
// .toString method changes to the binary into the string


