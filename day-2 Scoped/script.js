//Topic: Scopes

//Practice Q..1
var x = 1;
{
  var x = 2; //overwrite x value output is 2
}
console.log(x);

//Practice Q..2
let g = 10;
{
  let g = 20;
  console.log("inside", g);
}
console.log("Outside", g);

//Topic: TDZ & Hoisting per Type

//Practice Q..3
console.log(nm);
var nm = "Alok";

//Above Concept: When i create a variable then variable brokekn 2-parts one declare part move upwords and initialized keep it down like this
var nm = undefined;
console.log(nm); //Output: undefined
nm = "Alok";

//Practice Q..4
console.log(age);
let age = 22;
//Above Concept: Not Hoist let of const so activate TDZ and show Refference error
