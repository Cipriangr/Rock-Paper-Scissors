$(function(){
  const game = () =>{
    let playerScore = 0;
    let computerScore = 0;
    
    const startgame = () =>{
      const startbtn = $('.intro button');
      const closeinterface = $('.intro');
      const startgame = $('.match')

      startbtn.on('click', ()=>{
        closeinterface.addClass('fadeOut');
        startgame.addClass('fadeIn');
      })
    }
    
    const playgame = function(){
      const playerhand = document.querySelector('.player-hand');
      const computerhand = document.querySelector('.computer-hand');
      const gamebtns = document.querySelectorAll('.options button');
      const hands = document.querySelectorAll('.hands img');
      hands.forEach(hands=>{
        hands.addEventListener('animationend', function(){
          this.style.animation = "";
        })
      })

      const computeroptions = ['rock', 'paper', 'scissors'];

      gamebtns.forEach(option =>{
        option.addEventListener('click', function(){
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computeroptions[computerNumber];
          setTimeout(()=>{
            comparehands(this.textContent, computerChoice)
            //update images
            playerhand.src =`./assets/${this.textContent}.png`;
            computerhand.src =`./assets/${computerChoice}.png`;

          },1500);
          playerhand.style.animation = "shakePlayer 1.5s ease";
          computerhand.style.animation = "shakeComputer 1.5s ease";
        })
      })

    }

    const updateScore = () =>{
      const playerupdate = document.querySelector('.player-score p')
      const computerupdate = document.querySelector('.computer-score p')
      playerupdate.textContent = playerScore;
      computerupdate.textContent = computerScore;
    }

    //Compare hands
    const comparehands = (player, computer)=>{
      const winner = document.querySelector('.winner');

      //tie
      if(player === computer){
        winner.textContent = "It's a tie";
        return;
      }

      //rock
      if(player === 'rock'){
        if(computer === 'scissors'){
          winner.textContent = "Player wins";
          playerScore ++;
          updateScore()
          return;
        }else{
          winner.textContent = "Computer wins";
          computerScore ++
          updateScore()
          return
        }
      }
      if(player === 'scissors'){
        if(computer === 'rock'){
          winner.textContent = "Computer wins";
          computerScore ++
          updateScore()
          return
        }else{
          winner.textContent = "Player wins";
          playerScore ++;
          updateScore()
          return
        }
      }
      if(player === 'paper'){
        if(computer === 'scissors'){
          winner.textContent = "Computer wins";
          computerScore ++
          updateScore()
          return
        }else{
          winner.textContent = "Player wins";
          playerScore ++;
          updateScore()
          return
        }
      }
    }
    

    // call Functions

    startgame();
    playgame();
  }
  game();
})

// $(function(){


//   const game = ()=>{
//     let pScore = 0;
//     let cScore = 0;


//     //Start the game
//     const startGame = () =>{
//       const playBtn = $('.intro button');
//       const introScreen = $('.intro')
//       const match = $('.match')
//       playBtn.on('click', ()=>{
//         introScreen.addClass('fadeOut');
//         match.addClass('fadeIn');
//       });
//     }
//     //play match
//     const playMatch = ()=>{
//       const options = document.querySelectorAll(".options button");
//       const playerHand = document.querySelector(".player-hand");
//       const computerHand = document.querySelector(".computer-hand");
//       const hands = document.querySelectorAll('.hands img');

//       hands.forEach(hand =>{
//         hand.addEventListener('animationend', function(){
//           this.style.animation = ""
//         })
//       })
//       //computer options      
//       const computerOptions = ['rock', 'paper', 'scissors'];
//       options.forEach(option =>{
//         option.addEventListener("click", function(){
//           //Computer choice
//           const computerNumber = Math.floor(Math.random() * 3);
//           const computerChoice = computerOptions[computerNumber];
//           setTimeout(()=>{
//                       //here is where we call compare hands
//           compareHands(this.textContent, computerChoice);

//           //Update images
//           playerHand.src = `./assets/${this.textContent}.png`;
//           computerHand.src = `./assets/${computerChoice}.png`;
//           },2000)
//           //Animation for shaking
//           playerHand.style.animation = "shakePlayer 2s ease";
//           computerHand.style.animation = "shakeComputer 2s ease";
//         })
//       })
//     }

//     const updateScore = () =>{
//       const playerScore = document.querySelector('.player-score p');
//       const computerScore = document.querySelector('.computer-score p');
//       playerScore.textContent = pScore;
//       computerScore.textContent = cScore;
//     }

//     const compareHands = (playerChoice, computerChoice)=>{
//       //update text
//       const winner = document.querySelector('.winner')
//       //checking for a tie
//       if(playerChoice === computerChoice){
//         winner.textContent = "It is a tie";
//         return;
//       }
//       //check for Rock
//       if(playerChoice === 'rock'){
//         if(computerChoice === 'scissors'){
//           winner.textContent = 'Player wins'
//           pScore++
//           updateScore();
//           return;
//         }else{
//           winner.textContent = 'Computer Wins';
//           cScore++
//           updateScore();
//           return;
//         }
//       }
//       //check for Paper
//       if(playerChoice === 'paper'){
//         if(computerChoice === 'scissors'){
//           winner.textContent = 'Computer wins'
//           cScore++
//           updateScore();
//           return;
//         }else{
//           winner.textContent = 'Player Wins';
//           pScore++
//           updateScore();
//           return;
//         }
//       }
//       //check for Scissors
//       if(playerChoice === 'scissors'){
//         if(computerChoice === 'rock'){
//           winner.textContent = 'Computer wins'
//           cScore++
//           updateScore();
//           return;
//         }else{
//           winner.textContent = 'Player Wins';
//           pScore++
//           updateScore();
//           return;
//         }
//       }
//     }


//     //Call all the inner function
//     startGame();
//     playMatch()
//   }

//   game();

// })

