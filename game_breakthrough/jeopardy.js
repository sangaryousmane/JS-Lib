
const game =document.getElementById('game');
const scoreDisplay=document.getElementById('score');


const jeopardyCategories=[
   {
    genre:'WHO',
    questions:[
        {
        question:'Who is the president of China?',
        answers:['JK Rowling', 'Xi Jingpin'],
        correct:'Xi Jingpin',
        level: 'easy',
        }, 
        {
        question: 'Who is the author of Macbeth',
        answers:['JK Rowling', 'Shakespear'],
        correct: 'Shakespear',
        level:'medium',
        },
        {
        question: 'Who designed the first car',
        answers:['Karl Benz', 'Henry Ford'],
        correct: 'Karl Benz',
        level:'hard',
        },
        {
        question: 'Who was born on Krypton',
        answers:['JK Rowling', 'JRR Tolkien'],
        correct: 'Superman',
        level:'medium',
        },
      ],
    },
    {
    genre:'WHERE',
    questions:[
        {
        question: 'Where is the Three Gorges Located',
        answers:['Richmond', 'Yichang'],
        correct: 'Yichang',
        level:'easy',
        },
        {
        question: 'Where is the Colosseum',
        answers:['Rome', 'Milan'],
        correct: 'Rome',
        level:'medium',
        },
        {
        question: 'Where is Mount Kilamanjaro',
        answers:['Zimbabwe', 'Tanzania'],
        correct: 'Tanzania',
        level:'hard',    
        }
    ],
  },
  {
    genre: 'WHEN',
    questions:[
        {
        question: 'When Liberia was founded?',
        answers:['30th Dec', '26th July'],
        correct: '26th July',
        level:'easy',            
        },
        {
        question: 'When is Guinea national day?',
        answers:['1963', '2nd October 1958'],
        correct: '1963',
        level:'hard',             
        },
        {
        question: 'When  was WW2?',
        answers:['1932', '1941'],
        correct: '1941',
        level:'medium',            
        },
      ], 
    
  },
  {
    genre: 'WHAT',
    questions:[
        {
        question: 'What is the capital of Saudi Arabia?',
        answers:['Jeddah', 'Riyadh'],
        correct: 'Riyadh',
        level:'hard',            
        },
        {
        question: 'what do koalas eat',
        answers:['Straw', 'Eucalypt'],
        correct: 'Eucalypt',
        level:'medium',            
        },
        {
        question: 'What is a kg in short for?',
        answers:['kilojoule', 'kilogram'],
        correct: 'kilogram',
        level:'easy',            
        },
        ], 
  },
 
  {
    genre: 'HOW MANY',
    questions:[
        {
        question: 'How many players in a team?',
        answers:['15', '11'],
        correct: '11',
        level:'easy',            
        },
        {
        question: 'How many seconds in an hour?',
        answers:['36000', '3600'],
        correct: '3600',
        level:'medium',            
        },
        {
        question: 'How many people in China?',
        answers:['1.1 bil', '1.4 bil'],
        correct: '1.4 bil',
        level:'hard',            
        },
        ], 
  }
  
]

// Initial Score
let score = 0;

function addCategory(category){
    
    // Create a div element and add a class name: genre-column
    const column=document.createElement('div');
    column.classList.add('genre-column');


    // Create a div element and add a class name genre-title
    const genreTitle=document.createElement('div');
    genreTitle.classList.add('genre-title');
    genreTitle.innerText=category.genre


    // Append genre-title as a child class to the genre-column
    // and add column to the game id
    column.appendChild(genreTitle);
    game.append(column);


    // Create and add class to the column id
    category.questions.forEach(question => {
      const card=document.createElement('div');
      card.classList.add('card');
      column.append(card);
   

      if(question.level==='easy'){
        card.innerHTML = 100;
      }
      if(question.level ==='medium'){
        card.innerHTML = 200;
      }
      if(question.level === 'hard'){
        card.innerHTML = 300;
      }

      // Set attributes for various elements
      card.setAttribute('data-question', question.question);
      card.setAttribute('data-answer-1', question.answers[0]);
      card.setAttribute('data-answer-2', question.answers[1])
      card.setAttribute('data-correct', question.correct)
      
      // get the score from the question
      card.setAttribute('data-value', card.getInnerHTML())


      // Add event listener to buttons to flip the cards/questions
      card.addEventListener('click', flipcard);
    })
    
}

jeopardyCategories.forEach(category =>addCategory(category))

function flipcard(){
  this.innerHTML = "";

  // Add some styling to the card
  this.style.fontSize='15px';
  this.style.lineHeight='30px';
  

  // Create a new div element with class named card-text
  const textDisplay = document.createElement('div');
  textDisplay.classList.add('card-text');
  textDisplay.innerHTML=this.getAttribute('data-question')
 

  // create two button elements
  const firstButton=document.createElement('button');
  const secondButton=document.createElement('button');

  // Add classes to the buttons
  firstButton.classList.add('first-button');
  secondButton.classList.add('second-button');

   // Add the data attributes as labels for the buttons
  firstButton.innerHTML=this.getAttribute('data-answer-1');
  secondButton.innerHTML=this.getAttribute('data-answer-2')
  
  firstButton.addEventListener('click', getResult);
  secondButton.addEventListener('click', getResult)

  // Add all buttons and the textDisplay to the card
  this.append(textDisplay, firstButton, secondButton);


  // Disabled all other cards while one is already flipped.
  const allCards=Array.from(document.querySelectorAll('.card'));
  allCards.forEach(card=>{
    card.removeEventListener('click', flipcard)
  })

}

function getResult(){
  const allCards=Array.from(document.querySelectorAll('.card'));
  allCards.forEach(card => card.addEventListener('click', flipcard))
 
  const cardOfButtons=this.parentElement;

  if(cardOfButtons.getAttribute('data-correct') ==this.innerHTML){
    // add the current score to the numerical score obtained from the data-value class
    score=score + parseInt(cardOfButtons.getAttribute('data-value'));

    // display the calculated score.
    scoreDisplay.innerHTML = score
    cardOfButtons.classList.add('correct-answer');
    setTimeout(()=>{
      while (cardOfButtons.firstChild){
        cardOfButtons.removeChild(cardOfButtons.lastChild)
      }
      cardOfButtons.innerHTML = cardOfButtons.getAttribute('data-value');

    }, 100)
  }
  else{
    cardOfButtons.classList.add('wrong-answer');
    setTimeout(()=>{
      while(cardOfButtons.firstChild){
        cardOfButtons.removeChild(cardOfButtons.lastChild);
      }
      cardOfButtons.innerHTML = 0
    }, 100)
  }
  cardOfButtons.removeEventListener('click', flipcard);
}





