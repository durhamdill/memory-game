// create set of pairs for 4x4 board

let pairList = ["images/img00.png","images/img00.png","images/img01.png","images/img01.png", "images/img03.png", "images/img03.png","images/img04.png","images/img04.png", "images/img05.png", "images/img05.png"];


// create board for new game

// randomize pairList; function found at StackOverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }


function newBoard() {
  // let randomPairList = shuffleArray(pairList);
  for (let array=0; array<pairList.length; array++) {
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", pairList[array]);
    // let cardData = document.createTextNode(randomPairList[array]);
    // card.setAttribute("class", "card");
    // card.setAttribute("id", "card" + [array]);
    // data.setAttribute("class", "cardtext");
    // data.appendChild(cardData);
    card.appendChild(image);
    let board = document.getElementById("memory_board");
    board.appendChild(card);

    // this following line is supposed to start the cardData as hidden, but the side effect is the flexboxes lose their height without the content; also tried display: none
    // cardText.classlist.toggle('hidden');

  }


}

newBoard();

let cardText = document.getElementsByClassName("cardtext");
let cardDiv = document.getElementsByClassName("card");

function showCard(){
  cardText.classlist.toggle('visible');
}

cardDiv.addEventListener("click", showCard);


// https://davidwalsh.name/css-flip
