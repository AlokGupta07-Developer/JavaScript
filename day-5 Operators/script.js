//Operators
//Arithmetic
let a = 10;
let b = 20;
console.log("Arithmatic");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(b % a);
console.log(a ** b);

//Comparison
console.log("Comparison");
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a = b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

//Assignment
console.log("Assignment");
a = 20;
console.log(a);
console.log((a += 2));
console.log((a -= 2));
console.log((a *= 2));
console.log((a /= 2));
console.log((a %= 2));

//Logical
console.log("Logical");
console.log(a > 20 && a > 10);
console.log(b >= 10 || b >= 11);
console.log(!a);

console.log("Practice Q.. Based on Logical opr...");
// practice Q1.
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
  console.log("Entry allowed");
}

// practice Q2.
let x = 10;
let y = 20;
if (x > 5 && y < 25) {
  console.log("A");
} else {
  console.log("B");
}

//practice Q3.
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// practice Q4.
let temp = 35;
if (!(temp < 30)) {
  console.log("Hot");
} else {
  console.log("pleasent");
}

//practice Q5.
let v = 0;
if (v) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

//Unary
console.log("Unary Opr");
let c = 20;
console.log(++c);
console.log(c++);
console.log(c);

console.log("Practice Q.. Based on Unary opr...");
//practice Q1.
let d = 5;
d++;
console.log(d);

//practice Q2.
let n = 3;
let m = n++;
console.log(n, m);

//practice Q3.
let p = 4;
let q = ++p;
console.log(p, q);

//practice Q4.
let g = 10;
console.log(g--);
console.log(g);

//practice Q5.
let k = 5;
let result = k++ + ++k;
console.log(result);

//Ternary
console.log("Ternary");
a > b ? console.log(a) : console.log(b);

console.log("Practice Q.. Based on Ternary opr...");
let scores = 78;
let grades =
  scores >= 90 ? "A" : scores >= 75 ? "B" : scores >= 60 ? "c" : "Fail";
console.log(grades);

//practice Q2.
let score = 90;
let grade =
  score >= 70
    ? "First division"
    : score >= 50
      ? "Second division"
      : score >= 40
        ? "Third division"
        : "Fail";
console.log(grade);

//practice Q3.
let points = 120;
let statuss = points > 100 ? "Gold" : points > 50 ? "silver" : "Bronze";
console.log(statuss);

//practice Q4.
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access);

//String Opr
console.log("String Operator")

let firstName = "Alok";
let lastName = "Gupta";
console.log(firstName + " " + lastName);  // Alok Gupta

let name = "Alok";
names += " Gupta";
console.log(names); // Alok Gupta

//Optional Chaining opr
console.log("Optional chaining operator")

let user = {
    profile: {
        name: "Alok"
    }
};
console.log(user.profile?.name); // Alok
console.log(user.address?.city); // undefined

//in operator
console.log("in Operator")

let users = {
    name: "Alok",
    age: 23
};
console.log("name" in users); // true
console.log("city" in users); // false

//Comma Operator
console.log("Comma Operator")

let results = (1 + 2, 3 + 4);
console.log(results); // 7

//Spread Operator
console.log("Spread Operator")

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

//Rest Operator
console.log("Rest Operator")

function sum(...numbers) {
    return numbers;
}
console.log(sum(10, 20, 30)); // [10, 20, 30]

//Instance of: Works on Refference values
console.log("Instance of");
let arr = [];
console.log(arr instanceof Array);

let obj = {};
console.log(obj instanceof Object);
