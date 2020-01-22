// print hello world 
console.log(`hello world`);

// variables and constants

//  for declare a constant we have to use keyword const.
const a = 10;
console.log(a); // i will provide us 10

// a = 20;  ->  Assignment to constant variable.
//  console.log(a); 

// let name = 'vaibhav';
// let num = 10;
// let last_name = 'jain';
// let last_num = 20;

var name = 'vaibhav';
var num = 10;
var last_name = 'jain';
var last_num = 20;

console.log(name); // -> vaibhav;
console.log(name + last_name) // -> vaibhavjain;
console.log(name+num); //vaibhav10
console.log(num+last_num) // -> 30


/**
 *  diffrence between let and var
 * 
 *  1 diffrence socpe of both if diffrent 
 * 
 *  let is strictly bounded .
 * 
 *  var scope id global towards the window.
 * 
 */

 console.log(x); // it will give us undefine.
 var x = 5;

//  but when we do the same with let it will give us error

// console.log(y);
// let y = 5;

// talk more about that

/**
 * 
 * we will talk about window  so just check towards window object
 * 
 * Note : if we are using window object in console it will give error the reason 
 * 
 * window is only part of js not of node.
 */

//  let abc = 5;
//  var def = 5; 
//  console.log(window.abc); //5
//  console.log(window.def); //undefined

/**
 * 
 * BLOCKS
 * 
 */

//  for (let j = 0 ; j<=3 ;j++)
//  {
//      console.log(j);
//  }
//  console.log(j);  // -> j is not defined

for (var j = 0 ; j<=3 ;j++)
{
    console.log(j);
}
// console.log(j)  // -> 4

