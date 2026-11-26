//Arrays
let arr = [1, 2, 3, 4, 5]; //Create
console.log(arr);
console.log(arr[3]); //Access
arr[2] = 11; //Modify
console.log(arr);

//Methods of an array
let marks = [25, 35, 45, 55, 65, 75, 85, 95];
marks.pop(); //Delete element from last position
console.log(marks);

//length
marks.length()
console.log(marks)

marks.push(95); //Add element from last position
console.log(marks);

marks.shift(); //Delete element from first position
console.log(marks);

marks.unshift(25); //Add element from first position
console.log(marks);

marks.reverse(); //Reverse the array
console.log(marks);

marks.sort((a, b) => b - a); //Sort in order
console.log(marks);

marks.splice(1, 3); //pass Where start, How much remove
console.log(marks);

marks.slice(2, 5); //pass Where start, Where end
console.log(marks);

//forEach
marks.forEach(function (val) {
  console.log(val);
});

//map
let newMarks = marks.map((number) => number * 2);
console.log(newMarks);

//filter
let result = marks.filter((number) => number % 2 === 0);
console.log(result);

//reduce
let sum = marks.reduce((accumulator, val) => accumulator + val, 0);
console.log(sum);

//find
let newFind = marks.find(function (val) {
  return val > 10;
});
console.log(newFind);

//some
let somes = marks.some(function (val) {
  return val < 20;
});
console.log(somes);

//every
let ever = marks.every(function (val) {
  return val < 20;
});
console.log(ever);
