## variables and print helloworld in console.
----
- helloworld

*Way1*

```shell
node
```
```js
console.log(`hello world!`);
```
*Way2* :- create a node file with js extention and run in console with node prefix.

```npm
node filename.js
```
 - variables and constants
------------------
## constants
----------
 the diffrence between variables and constant is

 -------------------------------------------------

 |  variables           |    constants   |
 |:----------------------:|:----------------:|
 |  variables are vary  |  and constants are not. |
 | we can redeclare variables | but we can't redeclare constants once it would be declared than it can't be changed |

- for declare a constant in node we have to use const keyword.

```js
const variableName =  value ;
console.log(variableName); // -> retun value

variableName = value2 ; //through exception ->  Assignment to constant variable.
```
-----
## variables
-----
variables in js are declared using var and let keywords . the diffrence between these 2 is simple scope .
var is gloabal or loosly typed varible while let is strict varible.

> js is an intelligent language we don't need to initialize variable with there datatype it take care by the node it self.

```js
// varibale declaration using let 

let name = 'vaibhav';
let num = 10;
let last_name = 'jain';
let last_num = 20;

console.log(name); // -> vaibhav;
console.log(name + last_name) // -> vaibhavjain;
console.log(name+num); //vaibhav10
console.log(num+last_num) // -> 30

// we can also redeclare our variables 

let name = "another name";
console.log(name);

```
<q><i>but it will give you a error when you redeclare variable with var which are previously declared via let.

```js
// varibale declaration using var 

var name = 'vaibhav';
var num = 10;
var last_name = 'jain';
var last_num = 20;

console.log(name); // -> vaibhav;
console.log(name + last_name) // -> vaibhavjain;
console.log(name+num); //vaibhav10
console.log(num+last_num) // -> 30

// we can also redeclare our variables 

var name = "another name";
console.log(name);

```
### diffrence b/w  Let and Var
---
| let | var |
|:----:| :----:|
|    ```  console.log(x); // -> error  let x = 10; ```   |   ```  console.log(x); // -> undefine  var x = 10; ```    |
|  let gives you the privilege to declare variables that are limited in scope to the block, statement of expression unlike var. | var is rather a keyword which defines a variable globally regardless of block scope. |
|  ```  let letVariable = “this is a let variable”;  console.log(window.letVariable); //undefined ```  | ``` var varVariable = “this is a var variable”;  console.log(window.varVariable); //this is a var variable``` |
---

#### Let var in blocks
---

```js 
 for (let j = 0 ; j<=3 ;j++)
  {
     console.log(j);
  }
  console.log(j);  // -> j is not defined
```

```js
for (var j = 0 ; j<=3 ;j++)
{
    console.log(j);
} console.log(j)  // -> 4
```

