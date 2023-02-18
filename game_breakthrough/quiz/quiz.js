

// First select and stored the game and score id
const game =document.getElementById('game');
const displayScore=document.getElementById('score');


// Code the quiz properties
// Who, when, what, how many
const jeopardyQuiz=[
    {
        genre: 'WHO',
        questions:[{
            question:'Who wrote Art of Seduction?',
            answers:['Robert Greene', 'JRR Tolkien'],
            correct:'Robert Greene',
            level: 'easy',
        },
        {
            question: 'Who invented Radioactivity',
            answers:['Marie Curie', 'JRR Tolkien'],
            correct: 'Marie Curie',
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
        questions:[{
                question: 'Where is the Buckinghan Palace',
                answers:['Richmond', 'London'],
                correct: 'London',
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
                },

        ],
    },
    {
        genre: 'WHEN', 
        questions: [{
            question: 'When is Christmas?',
            answers:['30th Dec', '24th/25th Dec'],
            correct: '24th/25th Dec',
            level:'easy',            
            },
            {
            question: 'When was JFK shot?',
            answers:['1963', '1961'],
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
        questions:[{
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
        ]
        },
   
    {
        genre:'HOW MANY', 
        questions:[{
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


// Initilize score to zero
let score =0;


/*
 Code the addCategory function

  // Create a div element and add a class name: genre-column
  // Create a div element and add a class name genre-title
  // Append genre-title as a child class to the genre-column
    // and add column to the game id
    // Create and add class to the column id. Iterate and add scores based on difficulty level
    // Set attributes for various elements
    // get the score from the question
    // Add event listener to buttons to flip the cards/questions


*/
function addCategory(category){
    const column=document.createElement('div');
    column.classList.add('genre-column');

    const genreTitle=document.createElement('div');
    genreTitle.classList.add('genre-title');
    genreTitle.innerHTML =category.genre
    
    column.appendChild(genreTitle);

    game.append(column);

    category.questions.forEach(question => {
        const card=document.createElement('div');
        card.classList.add('card');
        column.append(card)


        if (question.level === 'easy'){
            card.innerHTML = 100;
        }
        if(question.level === 'medium'){
            card.innerHTML = 200;
        }
        if (question.level === 'hard'){
            card.innerHTML = 300;
        }

        card.setAttribute('data-question', question.question);
        card.setAttribute('data-answer-1', question.answers[0]);
        card.setAttribute('data-answer-2', question.answers[1]);
        card.setAttribute('data-correct', question.correct);

        card.setAttribute('data-value', card.getInnerHTML())

        // event listener for the button
        card.addEventListener('click', flipcard);

    })
}

// Iterates and add categories to the quiz
jeopardyQuiz.forEach(category => addCategory(category));

// create the flipcard function
function flipcard(){
    this.innerHTML = ""
    this.style.fontSize='15px';
    this.style.lineHeight='30px';


    const cardText=document.createElement('div');
    cardText.classList.add('cardText');
    cardText.innerHTML=this.getAttribute('data-question')

    const firstButton = document.createElement('button');
    firstButton.classList.add('first-button');

    const secondButton=document.createElement('button');
    secondButton.classList.add('second-button');

    // Add the data attributes as labels for the buttons
    firstButton.innerHTML= this.getAttribute('data-answer-1');
    secondButton.innerHTML=this.getAttribute('data-answer-2');

    // Add listener to both buttons
    firstButton.addEventListener('click', getResult);
    secondButton.addEventListener('click', getResult);

    this.append(cardText, firstButton, secondButton);

    // Disable other cards while one is already flipped.
    const allCards=Array.from(document.querySelectorAll('.card'));
    allCards.forEach(allCard =>{
        allCard.removeEventListener('click', flipcard);
    })
}
//  // Add some styling to the card
// Create a new div element with class named card-text
// create two button elements
// Add classes to the buttons
   // Add the data attributes as labels for the buttons
  // Add all buttons and the textDisplay to the card
  // Disabled all other cards while one is already flipped.



  // Finally, you can code the getResult function
function getResult (){
    const allCards=Array.from(document.querySelectorAll('.card'));
    allCards.forEach(allCard =>allCard.addEventListener('click', flipcard))
    
    const cardOfButtons =this.parentElement

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
    