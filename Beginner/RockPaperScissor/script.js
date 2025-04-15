

const play = (userChoice) => {
    const choices = ['rock', 'paper', 'scissor'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let winner = "";
    if(userChoice === compChoice){
        winner = "Draw";
    }
    else if((userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper"))
    {
        winner = "You Win!";
    }
    else{
        winner = "You Lose :(";
    }

    document.querySelector("#comp-choice").innerHTML = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
    document.querySelector("#user-choice").innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

    document.querySelector(".output-result").innerHTML = winner;
};

