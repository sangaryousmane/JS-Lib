/*
A global scope variable can be accessed anywhere in the program. 
A local scope variable can be accessed only inside a function  
A block-scoped variable can be accessed only inside the if statement block
*/


// Global scope variable
let firstName ='Ousmane';

let variableScope=function (){
    // local scope variable
    let lastName='Sangary';

    
    if(lastName ==='Sangary'){

        // Block-scope variable
        let FullName='L.'.concat(firstName) + ' '+lastName;
        console.log(`Full Name: ${FullName}`);
    }
    else{
        console.log('Sorry! Wrong Name');
    }
   
}
// sum of natural numbers
const sumOfNaturalNumbers=(number)=>{
    
    let sum=0;

    for(let i=1; i<=number; i++){
        sum +=i;
    }
    console.log(`${sum}`);
}

// sumOfNaturalNumbers(100)


// sum of positive numbers
function sumOfPositiveNumbers(number){
    let sum=0;
    while (number >=0){
        sum +=number;
    }
    return sum;
}

// result=sumOfPositiveNumbers(43);
// console.log(result);



// Passengers qualified for flight promo
const promoForAllUnderAge=()=>{
    let ages = [23, 45, 64, 44, 28,15,16,17,18, 29, 20];
    let adults=[]


    for(let i=1; i<=ages.length; i++){
        if (ages[i] <=18)
             continue
        else
           adults.push(ages[i]);
    }
    console.log(`The total number of adults are: ${adults.length} and here: ${adults}`);
}
isNaN()

// promoForAllUnderAge();

// Function expressions or anonymous function
let mathExpressions=function (){
    let result = Math.pow(4,3);
    console.log(result);
}



/*
 Hoisting in JavaScript:
 Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.
 In hoisting, though it seems that the declaration has moved up in the program, 
 the actual thing that happens is that the function and variable declarations are added to memory during compile phase.
 
In terms of variables and constants. keyword var is hoisted and let and const doesn't allow hoisting.
eg: 
a = 5
console.log(a);
var a; // ouput 5 eventhough the variable a is use before declaring it


// But initializations aren't hoisted in JS
eg: 
console.log(a)
var a = 5;

*/

// Function hoisting
// The function can be called before declaring
// let and const keywords are illegal in hoisting
speak('Ousmane');
function speak(name){
    console.log(`Hello, there ${name}`);
}
