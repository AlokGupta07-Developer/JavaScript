//fnc statement / fnc declaration
function greet() {
  console.log("Function Statement / Function Declaration");
}

greet() //call

//fnc Expression
const gree = function() {
    console.log("Function Expression")
}

gree()

//Arrow fnc
const arrow = () => {
    console.log("Arrow Function")
}

arrow()

//Recursion
function recursion() {
    console.log("Recursion")

    recursion()
}

//recursion()

//Recursion with stopping condition
function count(num) {
    if(num>5) {
        return
    }
    console.log(num)
    count(num+1)
}

count(1)

//function with parameter, argument
function dance(name) {
    console.log(`${name} dancing`)
}

dance("Mohit")

//callback function
function callBack(name, callback) {
    console.log(`${name} is calling...`)
    callback()
}

function sayBye() {
    console.log("Good Bye!")
}

callBack("Alok", sayBye)

//function with default parameter and arguments
function add(v1,v2) {
    console.log(v1+v2)
}

add() //undefined + undefined = NaN
add(11,18)

//Return Type function
function abcd() {
    return 11
}

let val = abcd()
console.log(val)

//first class function: treated as a value, pass into argument in another fun, save into variable

let fnc = function() {
    console.log("Hello Alok!")
}

fnc() //treated as value

 //passed as a argu in another fnc
// function abcd(val) {
//     val()
// }

// abcd(function() {
//     console.log("Hey")
// })

//Higher Order function
function outer() {
    return function inner() {
        console.log("Hey")
    }
}

let final = outer()
console.log(final)

//Takes another fnc in an arguments
function abcd(val) {
    val()
}

function efgh() {
    console.log("ALok")
}

efgh(val)

//pure function
var a = 12
function abcd() {
    console.log(a)
}

abcd()

//Impure function
var b = 12
function add() {
    b++
    console.log(b)
}

add()

//closure
function close() {
    let f = 11
    return function() {
        console.log(f, 'working')

    }
}

let fun = close()
fun()

//lexical scopping
var n = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(n);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();

//IIFE

(function () {
    console.log("Immedietly Invoked Function Expression")
})()

//Hoisting
//function declaration are hoist

first()

function first() {
    console.log("Hoist")

}

//function expression: not hoist

second()

let second = function() {
    console.log("Second")
}
