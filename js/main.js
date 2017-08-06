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

// create array to hold/track player lives and a function to display them:
let playerLivesEasy = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; //start with 15 lives
let lives = '';

let showLives = (array) => {
  for (let x=0; x<array.length; x++) {
    lives += `
      <i class="fa fa-heart" aria-hidden="true"></i>
    `;
  }
  console.log("Remaining lives: " + playerLivesEasy.length);
   hearts.innerHTML="Lives: " + lives;
}

// add event listener to easy button on homepage:

easyButton.addEventListener('click', startEasyGame, false);

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
  if (playerHand.length===0) { //if no cards chosen, allow flip
    this.classList.remove("class", "hideImage");
    this.classList.add("class", "showImage");
    playerHand.push(this); //push first card to player hand for comparison
  } else if (playerHand.length===1) { //if 1 card chosen, allow flip
      this.classList.remove("class", "hideImage");
      this.classList.add("class", "showImage");
      playerHand.push(this); //push second card to player hand for comparison
      playerTries += 1; //add 1 to number of player turns
      setTimeout(clearHand, 500); //run function to compare cards & reset hand
    }
    }


    let clearHand = function() {
      if (playerHand[0].innerHTML===playerHand[1].innerHTML) {
        playerScore +=2;
        console.log("Player got a match. Player score is " + playerScore + "/16 in " + playerTries + " tries.");
        console.log("Remaining lives: " + playerLivesEasy.length);
        playerHand.splice(0,2);
        win();
      } else {
          console.log("Player did not get a match. Player score is " + playerScore + "/16 in " + playerTries + " tries.");
          console.log(document.getElementById('timer').innerHTML);
          playerHand[0].classList.remove("class", "showImage");
          playerHand[0].classList.add("class", "hideImage");
          playerHand[1].classList.remove("class", "showImage");
          playerHand[1].classList.add("class", "hideImage");
          playerHand.splice(0,2);
          playerLivesEasy.pop();
          lives='';
          showLives(playerLivesEasy);
          lose();
          }
    }

    let win = function() {

      if (playerScore===16) {
        alert("You win!");
      }
    }

    let lose = function() {
      if (playerLivesEasy.length===0) {
        alert("You lose!");
      }
    }


// create board for new game (easy version):

function newBoardEasy() {
  cards_flipped = 0;
  let randomPairList = shuffleArray(pairList);
  for (let array=0; array<pairList.length; array++) {
    card = document.createElement("div");
    image = document.createElement("img");
    image.setAttribute("src", pairList[array]);
    card.setAttribute("class", "hideImage");
    card.appendChild(image);
    card.addEventListener('click', checkFlipCard,false);
    let board = document.getElementById("memory_board");
    board.appendChild(card);
  }
}

// newBoardEasy();
