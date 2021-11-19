//various results 
let results_score = document.getElementById("result");
let options_object = {
    'rock' : {
        'rock' : 'draw',
        'paper' : 'loser',
        'scissors' : 'winner'
    },
    'scissors' : {
        'rock' : 'loser',
        'paper' : 'winner',
        'scissors' : 'draw'
    },
    'paper' : {
        'rock' : 'winner',
        'paper' : 'draw',
        'scissors' : 'loser'
    }
}

//random computer selection 
function checker(input){
    let options = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML =
    `Computer chose <span>${options[rand].toUpperCase()}</span>`;
//display player selection
    document.getElementById("user_choice").innerHTML =
    ` You chose <span>${input.toUpperCase()}</span>`;

    let computer_choice = options[rand];

    switch(options_object[input][computer_choice]){
        case 'winner': 
          results_score.style.cssText = "background-color: #42f551; text-align: center"
          results_score.innerHTML = "WINNER!";
        break;
        case 'loser': 
          results_score.style.cssText = "background-color: #f54542; text-align: center"
          results_score.innerHTML = "COMPUTER WINS - YOU LOSE";
        break;
        default: 
        results_score.style.cssText = "background-color: #f5da42; text-align: center"
          results_score.innerHTML = "IT'S A DRAW";
        break;
    }
}

