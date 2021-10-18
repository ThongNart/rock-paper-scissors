// Below is the code for Rock Paper Scissor Game

//document.getElementById("buttonPlay").onclick = playRound;
// it turns fucking out that there is Type Error is that the function after 'onclick =' is not suppose to have the '()'

//const button = document.querySelector('#buttonPlay') ;
//button.onclick = fiveGame;
		
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




		document.getElementById('button1').onclick =function(){
				console.log('rock');
				fiveGame();
				playRound(computerInput(),'rock');
		}

		document.getElementById('button2').onclick = function(){
			console.log('PAPER');
			fiveGame();
			playRound(computerInput(),'paper');
			}
			
		document.getElementById('button3').onclick = function(){
				console.log('SCissor');
				fiveGame();
				playRound(computerInput(),'scissor');
			}

	

let computerPoints = 0;
let playerPoints =0;

function playRound (computerSelect, playerSelect) {
	
	console.log('function playRound is working');
		
		
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


	// The code below here are for me to test code snippets while learning thru Odin project
	const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
	console.log(contacts[0].split(':'));

