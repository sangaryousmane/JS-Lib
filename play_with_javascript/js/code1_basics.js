
// Everything in Javascript is an object and can be 
// stored in a variable.
// Selecting and designing a selector using js
// const heading = document.querySelector('h1');
// heading.textContent='Hello World'
const change_image=document.querySelector('img');

change_image.onclick=()=>{
    const img_src=change_image.getAttribute('src');

    if(img_src == 'images/firefox-icon.png'){
        change_image.setAttribute('src', 'images/ms-edge.png');
    }
    else{
        change_image.setAttribute('src', 'images/ms-edge.png');
    }
}   

let change_btn=document.querySelector('button');
let heading=document.querySelector('h1');

const setUsername=()=>{
    const myName=prompt('Please enter your name.');
    
    if(!myName){
        setUsername();
    }
    else{
    localStorage.setItem('name', myName); // Store data in the browser and retrieve it later
    heading.textContent= `Mozilla is cool ${myName}`;
    }
}

// Check if name exist or not
if(!localStorage.getItem('name')){
    setUsername();
}
else{
    const storedName=localStorage.getItem('name');
    heading.textContent = `Mozilla is cool, ${storedName}`;
}

change_btn.onclick=()=>{
    setUsername();
};


// Null refers to the absence of a value in javascript






function linear_search(values, target){

    for(let i=0; i<=values.length; i++){
        if (values[i] === target)
            return values[i];
        else
            return -1;
    }
    console.log('Done!');
    
}


// console.log(3==='3'); 
// // === compare both value and data type
// == compare only values

const calculates=(sign, a, b)=>{

    if (sign == '+')
         return a+b;
    else if(sign=='*')
         return a*b;
    else if(sign == '-')
         return a-b;
    else
         return a/b;               

}
console.log(calculates('/', 5,5));