# Loops in Node js
---
#### In node js 4 types of loops are available
- for
- for/in
- for/of
- while
- do/while

1. for Loop

```js
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```
example

```js
for (i = 0; i < 5; i++) {
  console.log(i);
}

/**
 * 
 * Result
 * 0
 * 1
 * 2
 * 3
 * 4
 * 
*/
```

2. For/in Loop
### use for print properties of object.

```js
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
// John Doe 25
```

3. for/of loop
### use for values of iterable object

```js
var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >");
}
/**
 * 
 * BMw
 * Volvo
 * mini
 * 
*/
```

4. while loop

```js
while (condition) {
  // code block to be executed
}
```

5. Do/while
```js
do {
  // code block to be executed
}
while (condition);
```


---
6. switch statement
```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```