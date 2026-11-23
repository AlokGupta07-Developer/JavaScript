# JavaScript Day 2 – Scope, Hoisting & TDZ

## 1. Scope

Scope defines where a variable can be accessed.

### Types of Scope

**Global Scope**
```javascript
let name = "Alok";

function showName() {
    console.log(name);
}
showName();
```

**Function Scope**
```javascript
function showAge() {
    var age = 23;
    console.log(age);
}
showAge();

// console.log(age); // ReferenceError
```

**Block Scope**
```javascript
{
    let city = "Delhi";
    const country = "India";
    console.log(city, country);
}

// console.log(city); // ReferenceError
```

## 2. Hoisting

Hoisting is JavaScript's behavior of processing declarations before code execution.

```javascript
console.log(a); // undefined
var a = 10;

hello(); // Hello JavaScript

function hello() {
    console.log("Hello JavaScript");
}
```

### Hoisting with let and const
```javascript
// console.log(x); // ReferenceError
let x = 20;

// console.log(y); // ReferenceError
const y = 30;
```

## 3. TDZ (Temporal Dead Zone)

TDZ is the time between entering a scope and initializing a `let` or `const` variable.

```javascript
{
    // TDZ starts

    // console.log(a); // ReferenceError

    let a = 10; // TDZ ends
    console.log(a);
}
```

### TDZ with const
```javascript
{
    // console.log(name); // ReferenceError

    const name = "Alok";
    console.log(name);
}
```

## Key Points

- Scope defines variable accessibility.
- Hoisting processes declarations before execution.
- `var` is hoisted with `undefined`.
- `let` and `const` remain in TDZ until initialization.