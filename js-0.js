// Below is the code for Rock Paper Scissor Game

//document.getElementById("buttonPlay").onclick = playRound;
// it turns fucking out that there is Type Error is that the function after 'onclick =' is not suppose to have the '()'
const button1 = document.querySelector('#buttonPlay') ;
button1.onclick = playRound;
		
function computerPlay (number){
	number = Math.floor(Math.random()*3);
	console.log('Computer number is: '+ number);
	if (number ==0){
		return 'Rock';
	} else if (number ==1){
		return 'Paper';
	}else{
		return 'Scissor';
	}

}
function playerPlay (number){
	number = Math.floor(Math.random()*3);
	console.log('Player number is: '+ number);
	if (number ==0){
		return 'Rock';
	} else if (number ==1){
		return 'Paper';
	}else{
		return 'Scissor';
	}
}



function playRound (computerSelect, playerSelect) {
	
	console.log('function playRound is working');
	let computerPoints = 0;
	let playerPoints =0;


	for (i =0; i<=5 ; i++){

		computerSelect = computerPlay();
		playerSelect = playerPlay();

		if (computerSelect=='Rock'&& playerSelect =='Paper' ){
			playerPoints++;
		} else if (computerSelect =='Rock'&& playerSelect=='Scissor'){
			computerPoints++;
		} else if(computerSelect =='Rock'&& playerSelect=='Rock'){
			computerPoints +=0;
		}
		else if (computerSelect =='Paper'&& playerSelect=='Rock'){
			computerPoints++;
		}
		else if (computerSelect== 'Paper'&& playerSelect=='Paper'){
			computerPoints +=0;
		}
		else if (computerSelect=='Paper'&& playerSelect=='Scissor'){
			playerPoints++;
		}
		else if (computerSelect =='Scissor'&& playerSelect=='Rock'){
			playerPoints++;
		}
		else if (computerSelect == 'Scissor'&& playerSelect =='Paper'){
			computerPoints++;
		}
		else if (computerSelect == 'Scissor' && playerSelect == 'Scissor'){
			computerPoints +=0;
		}
	}
	document.getElementById("result").innerHTML = 'Computer Points: ' + computerPoints +'. Player Points: ' + playerPoints;

	if (computerPoints > playerPoints){
		document.getElementById("whoWin").innerHTML = "Computer Wins";
	} else {
		document.getElementById("whoWin").innerHTML= "You Win";
	}
	

}
