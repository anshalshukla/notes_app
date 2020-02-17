const fs = require("fs")

const jsonData = fs.readFileSync("2-json.json")
const jsData = JSON.parse(jsonData)
console.log(jsData)
jsData.name = "Anshal"
jsData.planet = "Mars"
jsData.age = 19
fs.writeFileSync("2-json.json", JSON.stringify(jsData))
