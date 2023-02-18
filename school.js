

const school={
      name:'HBUT',
      rank:'Top 50',
      specialty:'Computer Science',
    
    
    get getName(){
       return this.name
    },  

    set setName(name){
        this.name=name;
    },
    
}

// console.log(school.getName);

// Every object and function in javaScript has a property named prototype by default. 
// Prototype is used to provide additional property to all the objects created from a constructor function
class Germany {
    constructor(population, GDP, capital) {
        this.population = population;
        this.GDP = GDP;
        this.capital = capital;

    }
    get getValues(){
        return `{${this.population + ' , ' + this.GDP + ' , '+this.capital+' , '+this.continent}}`;
    }
}

Germany.prototype.continent ='Europe';

let germany = new Germany(1220220, 4000000, 'Munich');
console.log(germany.continent);

