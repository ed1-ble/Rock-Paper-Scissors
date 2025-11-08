const choices = ['Rock','Paper','Scissors']

let getCompChoice = () => {
    return choices[Math.floor(Math.random()*3)];
}

let getHumanChoice = () => {
    let choice = prompt("What's your choice?");
    return choice;
}

function playRound(compChoice, humChoice) {
    switch(humChoice) {
        case choices[0]:
            if (compChoice === choices[1]) {
                return 0;
            } else if (compChoice === choices[2]) {
                return 1;
            } else {
                return 2;
            }
            break;
        case choices[1]:
            if (compChoice === choices[0]) {
                return 1;
            } else if (compChoice === choices[2]) {
                return 0;
            } else {
                return 2;
            }
            break;
        case choices[2]:
            if (compChoice === choices[0]) {
                return 0;
            } else if (compChoice === choices[1]) {
                return 1;
            } else {
                return 2;
            }
            break;
        
    }
}

console.log('Hi im working')
let score = 0;
let compScore = 0;

for (let i = 0; i <5; i++) {
    let compC = getCompChoice();
    let humC = getHumanChoice();
    let status = playRound(compC,humC);
    console.log(compC + ' VS ' + humC + ', ');
    switch (status) {
        case 1:
            console.log('You win this round!');
            score +=1;
            break;
        case 0:
            compScore +=1;
            console.log('You lose this round!');
            break;
        case 2:
            console.log('This round is a draw!');
            break;
        default:
            console.log('Invalid');
    }
} 

if (score > compScore) {
    console.log('YOU WIN!!')
} else if (compScore >score) {
    console.log('YOU LOSEEE!!!')
} else {
    console.log("IT'S A TIE!!")
}