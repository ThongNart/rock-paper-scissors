// Below is the code for Rock Paper Scissor Game

//document.getElementById("buttonPlay").onclick = playRound;
// it turns fucking out that there is Type Error is that the function after 'onclick =' is not suppose to have the '()'
const button1 = document.querySelector('#buttonPlay') ;
button1.onclick = fiveGame;
		
function computerInput (number){
	number = Math.floor(Math.random()*3);
	
	if (number ==0){
		return 'rock';
	} else if (number ==1){
		return 'paper';
	}else{
		return 'scissor';
	}

}




function playerInput(){

	let inputVal = document.getElementById('boxinput').value;

	return inputVal.toLowerCase();
}


let computerPoints = 0;
let playerPoints =0;

function playRound (computerSelect, playerSelect) {
	
	console.log('function playRound is working');


		computerSelect = computerInput();
		playerSelect = playerInput();
		document.getElementById('computerChoose').innerHTML = ('computer chooose: ' + computerSelect);
		document.getElementById('youChoose').innerHTML = ('player chooose: ' + playerSelect);


		if (computerSelect=='rock'&& playerSelect =='paper' ){
			playerPoints++;
		} else if (computerSelect =='rock'&& playerSelect=='scissor'){
			computerPoints++;
		} else if(computerSelect =='rock'&& playerSelect=='rock'){
			computerPoints +=0;
		}
		else if (computerSelect =='paper'&& playerSelect=='rock'){
			computerPoints++;
		}
		else if (computerSelect== 'paper'&& playerSelect=='paper'){
			computerPoints +=0;
		}
		else if (computerSelect=='paper'&& playerSelect=='scissor'){
			playerPoints++;
		}
		else if (computerSelect =='scissor'&& playerSelect=='rock'){
			playerPoints++;
		}
		else if (computerSelect == 'scissor'&& playerSelect =='paper'){
			computerPoints++;
		}
		else if (computerSelect == 'scissor' && playerSelect == 'scissor'){
			computerPoints +=0;
		}
	


	

}

let round = 0;

	function fiveGame () {

		playRound();
		round +=1;
		document.getElementById("roundCount").innerHTML = "Round " + round;		

		document.getElementById("result").innerHTML = 'Computer Points: ' + computerPoints +'. Player Points: ' + playerPoints;

		if (computerPoints > playerPoints){
			document.getElementById("whoWin").innerHTML = "Computer Wins";
		} else if (computerPoints < playerPoints) {
			document.getElementById("whoWin").innerHTML= "You Win";
		} else {
			document.getElementById("whoWin").innerHTML= "DRAW";
		}

	}