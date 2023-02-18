/*
Recursion is the process of a function calling itself or 
a function that calls itself is a recursive function.

A recursive function must have a condition to stop calling itself. 
Otherwise, the function is called indefinitely. Once the condition is met, the function stops calling itself,
This is called a base condition. 
*/

// Example to count down numbers to 1 using recursion
const countDown=(number)=>{
    console.log(number);

    // decrementing the number by one recursively.
    const counter=number -1;

// base case or the statement that stops the function when the condition is met
// Once the base condition is met, the function is not called anymore.  
if(counter > 0){
       countDown(counter);
   }
}

// countDown(5);

// Find the factorial of a number
const factorial=(number)=>{

    if(number === 0)
        return 1;
    
    return number * factorial(number -1);    
}


// var result = factorial(5)//


// Fizzbuzz prints fizz for multiple of 3, Buzz for multiple of 5
// and print fizzbuzz for multiple of 3 and five.
// Solution 1
const fizzBuzz1=(number)=>{
     const answers =[]

    // check for positive value
 
    for(let i=1; i<number; i++){
        if(i%15 == 0)
            answers.push('FizzBuzz');
        else if(i%3 == 0)
            answers.push('Fizz');
        else if(i % 5 == 0)
            answers.push('Buzz');
        else
           answers.push(i);        
    }
    return answers;
}



// let result=fizzBuzz(10);
// console.log(result);

// Using Recursion, not efficient but fancier.
const fibonacci1=(number)=>{

    if(number <=1)
      return 1;
    
    else 
      return fibonacci1(number -1) + fibonacci1(number-2);
}


const fizz=(n)=>{
    let result = []
    for(let i=1; i<=n; i++){
        if(i%15==0)
           result.push('FizzBuzz');
        
        else if(i%5==0) 
           result.push('Buzz');
        else if(i%3==0)
           result.push('Fizz');
        else 
           result.push(i);       
    }
    console.log(result);
}
// Using the while loop. 
const fibonacci2 =(number)=>{

    let a =1 , b=0;
    let temp;


    while(number >=0){
        temp =a;
        a =a +b;
        b=temp;
        number --;
    }
    console.log(2);

}


const fruitGame=()=>{
    let medProblem=['Constipation', 'Diarrhea'];
    let result=[];

    if(!(medProblem[0] == 'Diarrhea')){
        result.push('🍌🍌');
    }
    else{
        result.push(`🍍🍏`)
    }
    console.log(result);
}

fruitGame()


