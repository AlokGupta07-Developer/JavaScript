var a; //Declaration
var a = 10; //Declaration & Initialization
var a = 20; //Redeclaration & Reassingment with same name... Possible in var. Not show error
console.log(a);

let b; //Declaration
let c = 20; //Declaration & Initialization
//let c = 20  //Cannot redeclare let(block scope) with same name... Show error
c = 30; //Reassignment is possible with same value.. Not show error
console.log(c);

const d = 40; //Declaration
const e = 40; //Declaration & Initialization
//const e = 40; //Cannot redeclare & assign const (block-scoped) with same name
console.log(e);
//e = 50 //Updation possible
console.log(e);
