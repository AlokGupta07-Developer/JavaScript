# JavaScript Day 5 – Operators

## 1. Arithmetic Operators

Used to perform mathematical operations.

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 Addition
console.log(a - b);  // 7 Subtraction
console.log(a * b);  // 30 Multiplication
console.log(a / b);  // 3.333 Division
console.log(a % b);  // 1 Modulus
console.log(a ** b); // 1000 Exponentiation
console.log(a++);   // 10 Increment
console.log(a--);   // 11 Decrement
```

## 2. Assignment Operators

Used to assign values to variables.

```javascript
let x = 10;

x += 5;  // x = x + 5
console.log(x); // 15

x -= 3;  // x = x - 3
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6

x %= 4;
console.log(x); // 2

x **= 3;
console.log(x); // 8
```

Other assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `&&=`, `||=`, `??=`, `&=`, `|=`, `^=`, `<<=`, `>>=`, `>>>=`.

## 3. Comparison Operators

Used to compare two values. They return `true` or `false`.

```javascript
let a = 10;
let b = 5;

console.log(a == b);  // false
console.log(a === b); // false
console.log(a != b);  // true
console.log(a !== b); // true
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= b);  // true
console.log(a <= b);  // false
```

## 4. Logical Operators

Used to combine multiple conditions.

```javascript
let age = 23;

console.log(age > 18 && age < 30); // true
console.log(age > 25 || age < 30); // true
console.log(!(age > 18));          // false
```

- `&&` – AND
- `||` – OR
- `!` – NOT

## 5. Unary Operators

Operate on a single operand.

```javascript
let a = 10;

console.log(+a);       // 10
console.log(-a);       // -10
console.log(++a);      // 11
console.log(--a);      // 10
console.log(typeof a); // number

let obj = {};
console.log(delete obj.name); // true
```

## 6. Ternary Operator

Short form of an if-else condition.

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult
```

## 7. String Operators

Used to join strings.

```javascript
let firstName = "Alok";
let lastName = "Gupta";

console.log(firstName + " " + lastName);
// Alok Gupta

let name = "Alok";
name += " Gupta";

console.log(name); // Alok Gupta
```

## 8. Bitwise Operators

Work on the binary representation of numbers.

```javascript
let a = 5; // 0101
let b = 3; // 0011

console.log(a & b);  // 1 AND
console.log(a | b);  // 7 OR
console.log(a ^ b);  // 6 XOR
console.log(~a);     // -6 NOT
console.log(a << 1); // 10 Left shift
console.log(a >> 1); // 2 Right shift
console.log(a >>> 1);// 2 Unsigned right shift
```

## 9. Nullish Coalescing Operator (??)

Returns the right-side value only when the left-side value is `null` or `undefined`.

```javascript
let username = null;

console.log(username ?? "Guest"); // Guest

let age = 0;
console.log(age ?? 18); // 0
```

## 10. Optional Chaining Operator (?.)

Safely accesses nested object properties.

```javascript
let user = {
    profile: {
        name: "Alok"
    }
};

console.log(user.profile?.name); // Alok
console.log(user.address?.city); // undefined
```

## 11. typeof Operator

Returns the data type of a value.

```javascript
console.log(typeof "Alok"); // string
console.log(typeof 23);     // number
console.log(typeof true);   // boolean
console.log(typeof {});     // object
```

## 12. instanceof Operator

Checks whether an object belongs to a particular constructor or class's prototype chain.

```javascript
let arr = [];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
```

## 13. in Operator

Checks whether a property exists in an object or an index exists in an array.

```javascript
let user = {
    name: "Alok",
    age: 23
};

console.log("name" in user); // true
console.log("city" in user); // false
```

## 14. Comma Operator

Evaluates multiple expressions and returns the last expression's value.

```javascript
let result = (1 + 2, 3 + 4);

console.log(result); // 7
```

## 15. Spread Operator (...)

Expands elements of an array or properties of an object.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]
```

## 16. Rest Operator (...)

Collects multiple values into an array or object.

```javascript
function sum(...numbers) {
    return numbers;
}

console.log(sum(10, 20, 30)); // [10, 20, 30]
```

## 17. Grouping Operator ()

Controls the order of evaluation.

```javascript
let result = (10 + 5) * 2;

console.log(result); // 30
```

## 18. Logical Assignment Operators

```javascript
let a = true;
a &&= false;
console.log(a); // false

let b = false;
b ||= true;
console.log(b); // true

let c = null;
c ??= "Alok";
console.log(c); // Alok
```

## 19. Relational Operators

```javascript
console.log("Alok" < "Mohit"); // true
console.log(10 in [10, 20]);   // true (index 10? No)
```

**Note:** `in` checks array indexes, not element values. For checking an array value, use `includes()`.

## Key Points

- Arithmetic operators perform mathematical operations.
- Assignment operators assign or update values.
- Comparison operators return Boolean values.
- Logical operators combine conditions.
- Ternary operator is a short form of if-else.
- Bitwise operators work with binary numbers.
- `??` handles null or undefined values.
- `?.` safely accesses nested properties.
- Spread and rest use the same `...` syntax but have different purposes.