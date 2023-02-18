
// JS objects


function freelancers (){
const developers ={
    'Atalib':{
        name: 'Atalib',
        skills: ['Flutter', 'Django', 'Angular', 'SpringBoot'],
        country: 'Mali',
        education: 'Bachelors',
        experience: 3
    },
    'Benjamin':{
        name: 'Benjamin',
        skills: ['Flutter', 'Node.js', 'Firebase','Android'],
        country: 'Congo',
        education: 'Masters'
    },
    'Ousmane':{
        name: 'Ousmane',
        skills: ['AI/ML', 'Node.js', 'React', 'SpringBoot'],
        country: 'Liberia',
        education: 'Masters'
    },
    'output': function(){
            console.log(developers);
        }
    }


if (developers.Atalib.education == 'Bachelors' && developers.Atalib.experience >3){
    console.log('He is hire');
}
else{
    console.log('Sorry! Cannot be hire.');
}

developers.output();
}







const person ={
    name: 'Laye', 
    greet: function(){
        console.log(`Hello: ${this.name}`);
    }
}
let personName=person.name;
// person.greet(personName)

// In order to access the properties of an object, this keyword is used by . and key
// eg: this.key 
// the this keyword refers to an object, it is bound to an object. 

// Constructor functions

function Person(name, age){
    this.name=name,
    this.age=age,
    this.greet=function(){
        console.log(`Hello: ${this.name}, are you ${this.age} years old ?`);
    }

}

const person1=new Person('Laye' , 24);
console.log(`Name is: ${person1.name}, Age is: ${person1.age}`);
person1.greet()

// Constructor function is used to create multiple object and the object literal is used to create 
// a single object.

// object literal 
let bank ={
    name:['BOC', 'PSB', 'ICBC']
}

let bank1=bank;


console.log(bank.name[1]);
