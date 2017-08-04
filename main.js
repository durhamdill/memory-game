// create set of pairs for 4x4 board

let pairList = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

let memory_values = [];
let memory_card_ids = [];
let cards_flipped = 0;

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

let flipCard = function() {
  this.classList.remove("class", "hideText");
  this.classList.add("class", "showText");
  console.log(this.id);
}

// create board for new game (easy version)

function newBoardEasy() {
  cards_flipped = 0;
  let randomPairList = shuffleArray(pairList);
  for (let array=0; array<randomPairList.length; array++) {
    let card = document.createElement("div");
    let cardData = document.createTextNode(randomPairList[array]);
    card.setAttribute("class", "hideText");
    card.setAttribute("id", "card" + [array]);
    console.log([array]);
    card.appendChild(cardData);
    card.addEventListener('click', flipCard, false);
    let board = document.getElementById("memory_board");
    board.appendChild(card);
  }
}

newBoardEasy();



// var board = document.querySelector("#memory_board");
// board.addEventListener("click", doSomething, false);
//
// function doSomething(e) {
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target;
//         // console.log(e);
//         console.log(clickedItem);
//         // var activeCard = document.getElementById("${clickedItem}")
//         // console.log(activeCard);
//         clickedItem.setAttribute('class', 'showText')
//         // e.target.id.classList.remove("hideText");
//         // clickedItem.classList.add("hidden");
//         // alert("Hello " + clickedItem);
//     }
//     e.stopPropagation();
// }

// let cardText = document.getElementsByClassName("cardtext");
// let cardDiv = document.getElementsByClassName("card");
//
// function showCard(){
//   cardText.classlist.toggle('visible');
// }
//
// cardDiv.addEventListener("click", showCard);


// https://davidwalsh.name/css-flip
