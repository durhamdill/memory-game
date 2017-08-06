// create buttons for start screen that will begin the game:

let easyButton = document.getElementById('easy_button');
let start_screen = document.getElementById('start_screen');

// create function that launches the easy version of the game:

let startEasyGame = function() {
  document.getElementById("start_screen").style.visibility = "hidden"; //hide start screen
  newBoardEasy(); //load easy game board
  showLives(playerLivesEasy); //load easy lives
  var timerVar = setInterval(countTimer, 1000); // start timer at load of game
  var totalSeconds = 0;
  function countTimer() {
     ++totalSeconds;
     var hour = Math.floor(totalSeconds /3600);
     var minute = Math.floor((totalSeconds - hour*3600)/60);
     var seconds = totalSeconds - (hour*3600 + minute*60);
     document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
  }
}

// add event listener to easy button on homepage:

easyButton.addEventListener('click', startEasyGame, false);

// create array to track player lives and a function to display them:
let playerLivesEasy = [1,2,3,4,5,6,7,8,9,10]; //start with 10 lives
let lives = ''; //empty string to update lives each turn

let showLives = (array) => {
  for (let x=0; x<array.length; x++) { //show hearts based on number of player lives
    lives += `
      <i class="fa fa-heart" aria-hidden="true"></i>
    `;
  }
  console.log("Remaining lives: " + playerLivesEasy.length);
  hearts.innerHTML="Lives: " + lives;
}

// create array of pairs for 4x4 easy board:

let pairList = ["images/img00.png","images/img00.png","images/img01.png","images/img01.png", "images/img02.png", "images/img02.png","images/img03.png","images/img03.png", "images/img04.png", "images/img04.png", "images/img05.png", "images/img05.png", "images/img06.png", "images/img06.png", "images/img07.png", "images/img07.png"];

// randomize pairList; function found at StackOverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// create variables to track progress of game:

let playerHand = [];
let playerScore = 0;
let playerTries = 0;

// create function that reveals cards on click/pushes them to player's hand array:

let checkFlipCard = function() {
  if (playerHand.length===0) { //if no cards chosen, allow flip/reveal card
    this.classList.remove("class", "hideImage");
    this.classList.add("class", "showImage");
    playerHand.push(this); //push first card to player hand for comparison
  } else if (playerHand.length===1) { //if 1 card chosen, allow flip/reveal card
      this.classList.remove("class", "hideImage");
      this.classList.add("class", "showImage");
      playerHand.push(this); //push second card to player hand for comparison
      playerTries += 1; //add 1 to number of player turns
      setTimeout(clearHand, 500); //run function to compare cards & reset hand; slight delay added so that player can see cards before turning back over
    }
    }

    //function to compare cards for match and then clear hand/reset board for next round:

    let clearHand = function() {
      if (playerHand[0].innerHTML===playerHand[1].innerHTML) { //if cards in hand match
        playerScore +=2; //player gets two points
        console.log("Player got a match. Player score is " + playerScore + "/16 in " + playerTries + " tries."); //log progress to console for tracking
        console.log("Remaining lives: " + playerLivesEasy.length);
        playerHand.splice(0,2); //clear player hand for next round
        win(); //run win script to see if game is won
      } else {
          console.log("Player did not get a match. Player score is " + playerScore + "/16 in " + playerTries + " tries."); //log progress to console for tracking
          // console.log(document.getElementById('timer').innerHTML);
          playerHand[0].classList.remove("class", "showImage"); //flip cards back over
          playerHand[0].classList.add("class", "hideImage");
          playerHand[1].classList.remove("class", "showImage");
          playerHand[1].classList.add("class", "hideImage");
          playerHand.splice(0,2); //clear player hand for next round
          playerLivesEasy.pop(); //remove one player life
          lives=''; //clear player lives so they can reset in loop
          showLives(playerLivesEasy); //run loop to update number of lives that show
          lose(); //check to see if player has lost
          }
    }

    //check to see if player has won game:
    let win = function() {

      if (playerScore===16) {
        document.getElementById("win_screen").style.visibility = "visible"; //if winner, show message
        document.getElementById("win_message").textContent = "You matched 8/8 sets of twins in " + playerTries + " tries with " + playerLivesEasy.length + "/15 lives remaining.";
      }
    }

    //check to see if player has lost game:
    let lose = function() {
      if (playerLivesEasy.length===0) { //if lost, show message
        document.getElementById("lose_screen").style.visibility = "visible";
        document.getElementById("lose_message").textContent = "You matched " + (playerScore/2) + "/8 sets of twins in " + playerTries + " tries with " + playerLivesEasy.length + "/15 lives remaining.";
      }
    }


// create board for new game (easy version):

function newBoardEasy() {
  cards_flipped = 0; //start with no cards flipped
  let randomPairList = shuffleArray(pairList); //randomize list of pairs for each game
  for (let array=0; array<pairList.length; array++) { //create cards holding each image
    card = document.createElement("div");
    image = document.createElement("img");
    image.setAttribute("src", pairList[array]);
    card.setAttribute("class", "hideImage");
    card.appendChild(image);
    card.addEventListener('click', checkFlipCard,false);
    let board = document.getElementById("memory_board"); //push cards to game board
    board.appendChild(card);
  }
}
