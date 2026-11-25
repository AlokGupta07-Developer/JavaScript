console.log("JavaScript Connected Successfully!");

//Control Flow: if else, else if, switch case, early return pattern

//if else
console.log("if else:-");

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 33 && score <= 59) {
    return "E";
  } else if (score >= 0 && score <= 32) {
    return "Fail";
  } else {
    return "Invalid marks";
  }
}
console.log(getGrade(78));

//early return
console.log("early return:-");

function getGrade(score) {
  if (score >= 90 && score <= 100) return "A";
  if (score >= 80 && score <= 89) return "B";
  if (score >= 70 && score <= 79) return "C";
  if (score >= 60 && score <= 69) return "D";
  if (score >= 33 && score <= 59) return "E";
  if (score >= 0 && score <= 32) return "Fail";
  return "Invalid marks";
}
console.log(getGrade(60));

//Switch case
console.log("Switch case:-");

let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Start of week!");
    break;
  case "Friday":
    console.log("Weekend soon!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}

//Loops
console.log("for loop:-");

for (i = 0; i <= 50; i++) {
  console.log(i, "Alok");
}

console.log("while loop:-");

let k = 1;
while (k < 32) {
  console.log(k);
  k++;
}

console.log("do while loop:-");

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 20);

console.log("break:-");

for (let i = 1; i < 201; i++) {
  console.log(i);
  if (i === 32) {
    break;
  }
}

console.log("Continue:-");

for (let i = 1; i < 201; i++) {
  if (i === 32) {
    continue;
  }
  console.log(i);
}

//Practice Q.. Based on Loops
console.log("Practice Q.. Based on Loops:-");

for (i = 1; i < 11; i++) {
  console.log(i);
}

console.log("Q..2");

let z = 10;
while (z > 0) {
  console.log(z);
  z--;
}

console.log("Q..3");

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i, "Even Number!!");
    i++;
  }
}

console.log("Q...4");

let s = 1;
while (s < 16) {
  if (s % 2 !== 0) {
    console.log(s, "Odd Number!!");
  }
  s++;
}

console.log("Q..5");

for (let i = 1; i < 11; i++) {
  console.log("5 *", i, "=", i * 5);
}

console.log("Q..6");

let sum = 0;
for (let i = 1; i < 101; i++) {
  sum = sum + i;
}
console.log(sum);

console.log("Q..7");

for (let i = 1; i < 51; i++) {
  if (i % 3 == 0) {
    console.log(i, "Divisible by 3");
  }
}

console.log("Q..8");

// let val = prompt("Give a number");

// for(let i = 1; i<=val; i++){
//     if(i%2 === 0){
//         console.log(i,"is even")
//     }else{
//         console.log(i,"id Odd");
//     }
// }

console.log("Q..9");

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

console.log("Q..10");

for (let i = 1; i < 101; i++) {
  console.log(i);
  if (i % 7 === 0) {
    break;
  }
}

console.log("Q..11");

for (let i = 1; i < 21; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

console.log("Q..12");

let count = 0;

for (let i = 1; i < 101; i++) {
  if (i % 2 !== 0) {
    count++;
    console.log(i);
  }
  if (count === 5) break;
}
