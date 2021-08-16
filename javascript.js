	// Below is the code for Rock Paper Scissor Game
		button2 = document.querySelector('.rockpaperscissor');
		
		button2.onclick = function computerSelection (){
			let number = Math.floor(Math.random()*3);
			console.log('number is: '+ number);
			if (number ==0){
				return 'Rock';
			} else if (number ==1){
				return 'Paper';
			}else{
				return 'Scissor';
			}
		}



		function playRound (computerSelection, playerSelection) {
			let computerPonints = 0;
			let playerPoints =0;
			if (computerSelection=='Rock'&& playerSelection =='Paper' ){
				playerPoints++;
			} else if (computerSelection =='Rock'&& playerSelection=='Scissor') {
				computerPoints++;
			} else if(computerSelection =='Rock'&& playerSelection=='Rock'){
				break;
			}
			else if (computerSelection =='Paper'&& playerSelection){
				computerPoints

			}
