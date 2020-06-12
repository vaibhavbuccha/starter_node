// for loop program
/**
 * 
 * print pattern using for loop
 * 
 */

 let j ,i ;
 for(i=1;i<=5;i++)
 {
    for(j=1;j<=i;j++)
    {
        console.log("*");
    }
    console.log("\n");
 }

 
//  print all values of a json object using for in loop

let jsonObj = {
    'firstname' : 'vaibhav',
    'lastname'  : 'jain',
    'course'  : 'IT'
}

for(x in jsonObj)
{
    console.log(x);
}

// print multiple values objects values

let jsonObj2 = [
    {
        'firstname' : 'vaibhav',
        'lastname'  : 'jain',
        'course'  : 'IT'
    },
    {
        'firstname' : 'john',
        'lastname'  : 'doe',
        'course'  : 'sales'
    },
    {
        'firstname' : 'kim',
        'lastname'  : 'carter',
        'course'  : 'marketing'
    }
];
for(x of jsonObj2)
{
    console.log(x);
}
for(x of jsonObj2)
{
    console.log(x.firstname);
}


// while loop

// print a series

let k = 1;
while(k<=10){
    console.log(k*19);
    k++;
}


// do while loop


let funstuff = (name, i)=>{
    let a = 1;

    do{
        console.log('Hello ' +name);
        a++;
    }
    while(name == 'Vaibhav'&& a <= i);
   
}
funstuff('Vaibhav',5);