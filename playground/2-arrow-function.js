// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
// //if our function just have to return a single statement then we can make the es6 arrorw function 
// //do that like above.Their no need of curlty braces ,and not even of return keyword


// console.log(square(2))

// // How arror functions work in context of methods. So arrow functions as properties on an object

// const event = {
//     name: "Birthday Party",
//     printGuestList: function () {
//         console.log("Guest List for " + this.name)
//     }
// }

// event.printGuestList()

// const event = {
//     name: "Birthday Party",
//     printGuestList: () => {
//         console.log("Guest list for " + this.name)
//     }
// }

// event.printGuestList()
// // this prints "guest list for undefined" this is because arrow functions are suitable for methids inside an obhject
// // in this case it is best to the conventional function

// // their is actually a es6 functions that allow us to access methods within the objects
// // it has more shorter and consise syntax while keeping with up all the functionality that a function has

const event = {
    name: "Birthday Party",
    guestList: ["Anshal", "Jane", "Mike"],
    printGuestList() {
        //const that = this
        console.log("Guest list for " + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
        })

    }
}
//arrow functions dont bind their own this value but the this value of the context under which they weere created.
// the above is a standard function it is not arrow function,it is just an alternative syntax that is available to us while setting up 
//methods inside an object
//but they dont have the bindings like the standard function

event.printGuestList()