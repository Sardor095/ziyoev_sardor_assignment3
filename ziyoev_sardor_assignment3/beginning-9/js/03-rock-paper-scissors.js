let playerChoice = prompt("Do you choose rock, paper or scissors?");
let robotChoice = Math.random();
if (robotChoice <0.34){
    robotChoice = "rock";
}else if(robotChoice <=0.67){
    robotChoice = "paper";
}
else{
    robotChoice = "scissors";
}

function compare(playerChoice, robotChoice) {
    if(playerChoice===robotChoice){
        return "The choice is a tie" + " " + "Try it again! =)";
    }

    if(playerChoice==="rock"){
        if(robotChoice==="scissors"){
            return "Rock destroys scissors.";
        } else {
            return "Paper covers rock.";
        }
    }
    if(playerChoice==="paper") {
        if(robotChoice==="rock"){
            return "Paper covers rock.";
        } else {
            return "Scissors cut paper.";
        }
    }
    if(playerChoice==="scissors"){
        if(robotChoice==="rock"){
            return "Rock destroys scissors.";
        } else {
            return "Scissors cut paper.";
        }
    }
}
document.write("Computer chose: " + robotChoice + "<br>" + "<br>");
document.write(compare(playerChoice, robotChoice));




// function compare(playerChoice, gamer2) {
//     if(playerChoice===robotChoice){
//         return "the choice is tie"
//     }

//     if(playerChoice==="rock"){
//         if(robotChoice==="scissors"){
//             return "rock destroys the scissors"
//         }else{
//             return "paper covers the rock"
//         }
//     }

//     if(playerChoice==="scissors"){
//         if(robotChoice==="paper"){
//             return "scissors cut paper"
//         }else{
//             return "rock destroys the scissor"
//         }
//     }

//     if(playerChoice==="paper") {
//         if(robotChoice==="rock"){
//             return "paper covers the rock"
//         }else {
//             return "scissors cut the paper"
//         }
//     }
// }
// document.write("Computer choice: " + robotChoice + "<br>");
// document.write(compare(playerChoice, robotChoice));