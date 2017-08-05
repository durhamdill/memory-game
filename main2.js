let easyButton = document.getElementById('easy_button');
let start_screen = document.getElementById('start_screen');


let startEasyGame = function() {
  document.getElementById("start_screen").style.visibility = "hidden";
  newBoardEasy();
}

easyButton.addEventListener('click', startEasyGame, false);

// create set of pairs for 4x4 board

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

// create board for new game (easy version)

// let card;
// let image;
// let randomPairList;

let playerHand = [];
let playerScore = 0;


let checkFlipCard = function() {
  if (playerHand.length===0) {
    this.classList.remove("class", "hideImage");
    this.classList.add("class", "showImage");
    playerHand.push(this);
    console.log(playerHand);
  } else if (playerHand.length===1) {
      this.classList.remove("class", "hideImage");
      this.classList.add("class", "showImage");
      playerHand.push(this);
      console.log(playerHand);
      setTimeout(clearHand, 500);
    }
    }

    // console.log(playerHand);

    let clearHand = function() {
      if (playerHand[0].innerHTML===playerHand[1].innerHTML) {
        playerScore +=2;
        playerHand.pop();
        // console.log(playerHand);
        playerHand.pop();
        // console.log(playerHand);
        console.log(playerScore);
        if (playerScore===16) {
          alert("You win!");
        }
      } else {
          playerHand[0].classList.remove("class", "showImage");
          playerHand[0].classList.add("class", "hideImage");
          playerHand[1].classList.remove("class", "showImage");
          playerHand[1].classList.add("class", "hideImage");
          playerHand.pop();
          playerHand.pop();
          }
    }


function newBoardEasy() {
  cards_flipped = 0;
  let randomPairList = shuffleArray(pairList);
  for (let array=0; array<pairList.length; array++) {
    card = document.createElement("div");
    image = document.createElement("img");
    image.setAttribute("src", pairList[array]);
    card.setAttribute("class", "hideImage");
    //image.setAttribute("id", "image" + [array]);
    // image.setAttribute("class", "image");
    card.appendChild(image);
    card.addEventListener('click', checkFlipCard,false);
    let board = document.getElementById("memory_board");
    board.appendChild(card);
  }
}

// newBoardEasy();
