// === also checks for data type while comparing.


let firstName = 'Ousmane';  // let value is changeable
const firstName1= 'Ousmane'; // const value can't be change
var firstName2 =undefined; // undefined is a data type whose variable isn't initialized.
var null_value = null;      // null is a special value that represents empty or unknown value.



if (null_value == null){
    console.log('Is null');
}else{
    console.log('Not null');
}

console.log(50033n);


const Student ={
    Age: Symbol(24),
    name: `Ousmane Sangary`,
    isGraduate: true
}

s= Student

if (s.isGraduate){
    console.log('Senior Developer');

}else{
    console.log('Junior Developer');
}


// for(let i=1; i<=50; i++){
//     if(i % 2 ==0) { // if a number is even
//         console.log(`${i}`);
//     }
// }



 const user_input=prompt('Enter number: ')


 if (user_input > 0){
    console.log(`The number: ${user_input} is positive`);

 }
 else{
    console.log(`Sorry! the number ${user_input} is negative.`);
 }

 console.log('Done...');

let country = 'Liberia';
let result= (country=='Liberia') ? 'Election is near':'In this year but not near yet!';


console.log(result);