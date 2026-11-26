//Arrays

let arr = [1,2,3,4,5]  //Create
console.log(arr)
console.log(arr[3])    //Access
arr[2] = 11            //Modify
console.log(arr)

//Methods of an array
let marks = [25,35,45,55,65,75,85,95]
marks.pop()  //Delete element from last position
console.log(marks)

marks.push(95) //Add element from last position
console.log(marks)

marks.shift()  //Delete element from first position
console.log(marks)

marks.unshift(25) //Add element from first position
console.log(marks)

marks.reverse()  //Reverse the array
console.log(marks)

marks.sort((a,b) => b-a)     //Sort in order
console.log(marks)

marks.splice(1, 3) //pass Where start, How much remove
console.log(marks)

marks.slice(2, 5)  //pass Where start, Where end
console.log(marks)