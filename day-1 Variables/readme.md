# JavaScript Day 1 – Variables (var, let, const) 🚀

Welcome to Day 1 of my JavaScript learning journey!

Today, I learned about JavaScript variables and how to declare and use them.

## 📚 Topics Covered

- Introduction to JavaScript Variables
- `var` – Function-scoped variable
- `let` – Block-scoped variable
- `const` – Block-scoped constant
- Difference between `var`, `let`, and `const`
- Variable declaration and initialization
- Reassignment and redeclaration

## 💻 Code Examples

### 1. var
```javascript
var name = "Alok";
var name = "Gupta"; // Redeclaration allowed
name = "Developer"; // Reassignment allowed

console.log(name);
```

### 2. let
```javascript
let age = 23;
age = 24; // Reassignment allowed

console.log(age);
```

### 3. const
```javascript
const country = "India";
// country = "USA"; // Error: Reassignment not allowed

console.log(country);
```

## 📊 Difference Between var, let and const

| Feature | var | let | const |
|---|---|---|---|
| Scope | Function | Block | Block |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Hoisting | Yes | Yes (TDZ) | Yes (TDZ) |

## 🎯 Key Learnings

- `var` allows redeclaration and reassignment.
- `let` allows reassignment but not redeclaration in the same scope.
- `const` does not allow reassignment.
- `let` and `const` follow block scope.
- Prefer `const` by default and use `let` when reassignment is required.

## 🛠️ Technologies Used
- JavaScript (ES6+)
- VS Code

## 📅 Learning Progress

**Day 1:** JavaScript Variables – `var`, `let`, `const` ✅

My learning approach:

**Learn → Practice → Build → Share → Improve**

More JavaScript concepts coming soon!

#JavaScript #JavaScriptLearning #WebDevelopment #MERNStack #CodingJourney