# JavaScript Day 4 – String Methods

## String Methods

```javascript
let names = "Alok Gupta";

console.log(names);                       // Alok Gupta
console.log(names.length);                // 10
console.log(names.toUpperCase());         // ALOK GUPTA
console.log(names.toLocaleLowerCase());   // alok gupta
console.log(names.includes("Alok"));      // true
console.log(names.slice(0, 5));           // Alok 
console.log(names.endsWith("Alok"));      // false
console.log(names.startsWith("Alok"));    // true
console.log(names.split(" "));            // ["Alok", "Gupta"]
console.log(names.replace("Alok", "Mohit")); // Mohit Gupta
console.log(names.indexOf("o"));          // 2
console.log(names.trim());                // Alok Gupta
```

## Methods Covered

1. `length` – Returns the string length.
2. `toUpperCase()` – Converts string to uppercase.
3. `toLocaleLowerCase()` – Converts string to lowercase.
4. `includes()` – Checks whether a substring exists.
5. `slice()` – Extracts a part of a string.
6. `endsWith()` – Checks the ending of a string.
7. `startsWith()` – Checks the beginning of a string.
8. `split()` – Converts a string into an array.
9. `replace()` – Replaces a matching value.
10. `indexOf()` – Returns the first matching index.
11. `trim()` – Removes whitespace from both ends.

**Note:** Strings are immutable in JavaScript. String methods return new values; they do not modify the original string.