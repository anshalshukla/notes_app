console.log("utilis.js")

const name = "Shukla"

const add = function (a, b) {
    return a + b
}

module.exports = add
// Whatever you assign to the module.exports is what gets exported
// other files can now take the advantage of it
// the utilis module will now return the name const that it has stored

