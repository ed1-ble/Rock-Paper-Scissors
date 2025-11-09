const choices = ['Rock','Paper','Scissors']

let score = 0;
let compScore = 0;
let rounds = 0;

let getCompChoice = () => {
    return choices[Math.floor(Math.random()*choices.length)];
};

let addElement = (etype,parent,styles,content) => {
    let e = document.createElement(etype);
    e.textContent = content;
    e.setAttribute('style',styles);
    parent.appendChild(e);
    return e;
};

const playRound = (human, comp) => {
    if (human === comp) return "That's a draw!";
    if (
        (human === 'Rock' && comp === 'Scissors') ||
        (human === 'Paper' && comp === 'Rock') ||
        (human === 'Scissors' && comp === 'Paper')
    ) return "You win!";
    return "You lose!";
};

function onClick(humChoice) {

    if (rounds > 5) {
        return;
    } else if (rounds === 5) {
        rounds++;
        addElement('h1',document.querySelector('div'),'color:blue',score > compScore ? 'VICTORY' : 'DEFEAT');
        return;
    }

    let result = playRound(humChoice,getCompChoice());
    if (result == 'You win!') {
        score++;
    } else if (result == 'You lose!') {
        compScore++;
    }
    addElement('h2',document.querySelector('div'),'color:grey;',result);
    rounds++;
    return;
}

document.querySelectorAll('button').forEach((button)=>{
    button.addEventListener('click',()=>{
        onClick(button.getAttribute('id'));
    });
});

