# JavaScript Day 3 – Data Types

## 1. Primitive Data Types

Primitive data types store single values.

### Types of Primitive Data Types

**1. String**
```javascript
let name = "Alok";
console.log(name);
```

**2. Number**
```javascript
let age = 23;
let price = 99.99;
console.log(age, price);
```

**3. Boolean**
```javascript
let isStudent = true;
console.log(isStudent);
```

**4. Undefined**
```javascript
let city;
console.log(city); // undefined
```

**5. Null**
```javascript
let data = null;
console.log(data);
```

**6. BigInt**
```javascript
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
```

**7. Symbol**
```javascript
let id = Symbol("id");
console.log(id);
```

## 2. Non-Primitive (Reference) Data Types

Reference data types store references to objects in memory.

### Types of Reference Data Types

**1. Object**
```javascript
let user = {
    name: "Alok",
    age: 23
};
console.log(user);
```

**2. Array**
```javascript
let skills = ["HTML", "CSS", "JavaScript"];
console.log(skills);
```

**3. Function**
```javascript
function greet() {
    console.log("Hello Alok");
}
greet();
```

## 3. Difference Between Primitive and Reference

| Primitive | Reference |
|---|---|
| Stores values | Stores references to objects |
| Immutable values | Objects can be modified |
| Copied by value | Object references are copied |
| Examples: String, Number, Boolean | Examples: Object, Array, Function |

## 4. typeof Operator

```javascript
console.log(typeof "Alok");       // string
console.log(typeof 23);           // number
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object
console.log(typeof 123n);          // bigint
console.log(typeof Symbol());      // symbol
console.log(typeof []);            // object
console.log(typeof {});            // object
console.log(typeof function(){});  // function
```

## 5. Dynamic Typing

JavaScript is a dynamically typed language. It allows a variable to hold different types of values without declaring its data type.

```javascript
let value = 100;
console.log(typeof value); // number

value = "Hello";
console.log(typeof value); // string

value = true;
console.log(typeof value); // boolean

value = { name: "Alok" };
console.log(typeof value); // object
```

## 6. Type Coercion

Type coercion is the automatic or implicit conversion of one data type into another.

**1. String Coercion**
```javascript
console.log("10" + 5); // "105"
console.log("Hello" + 10); // "Hello10"
```

**2. Number Coercion**
```javascript
console.log("10" - 5); // 5
console.log("10" * 2); // 20
console.log("20" / 2); // 10
```

**3. Boolean Coercion**
```javascript
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
```

**4. Equality Coercion**
```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

## 7. Explicit Type Conversion

Explicit conversion means manually converting one data type into another.

```javascript
let num = "100";

console.log(Number(num)); // 100
console.log(String(100)); // "100"
console.log(Boolean(1));  // true
```

## Key Points

- JavaScript has 7 primitive data types.
- Objects, arrays, and functions are reference types.
- `typeof` checks the data type of a value.
- JavaScript supports dynamic typing.
- Type coercion converts data types automatically.
- Explicit conversion is performed manually.
- `==` allows type coercion, whereas `===` checks value and type.