//DataTypes:
//Primitive DataTypes: All those value if we will copy this then if give a real copy of that value
let d = 12;
let e = d;
console.log(e);
console.log(d);
//If i will change the value of d then only change in d not in e because d have own value and e have own value
d = 24;
console.log(d);
console.log(e);

// String, Number, Boolean, null, undefined, bigInt

//1. String:
let names = "Alok";
var title = "Gupta";
const clg = `IEC`;
console.log(names, title, clg);

//2. Number:
let a = 123;
let b = 456;
console.log(a, b);

//3. Boolean
let number = true;
const row = false;
console.log(number, row);

//4. null: We give the by default value null if we change the value in future then replace by null
let user = null;
console.log(user);

//5. undefined: If we create a variable and do not give the value so js by default consider undefined
let users;
console.log(users);

//6. bigInt: maxSafeInteger taken from the user
let c = 9007199254740991n;
c = c + 2n;
console.log(c);

//Refference DataTypes: Array [], Object {}, function ()
//If we will copy this type of data then we not get a real copy but we get a refference of parent
let arr = [1, 2, 3, 4, 5];
let Arr = arr;
arr.pop(); //pop in both
console.log(Arr);
console.log(arr);

//Dynamic DataTyping: JS allow to store diffrent types of data in one variable
let f = 12;
f = "Alok";
f = true;
f = null;
f = undefined;
f = [];
f = {};

//type of quirks: To check the DataType
console.log(typeof "Alok");
console.log(typeof 12);

//Failed number operations:
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof NaN); //number


//Type Coercion: One dataType automatically converts another dataTypes
console.log("5" + 1)   //Concatination
console.log("5" - 1)   //Subtract

//Falsy values: 0, -0, 0n, Null, undefined, document.all, false, NaN
console.log(!!null)
console.log(!!0)