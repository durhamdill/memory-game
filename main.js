// create set of pairs for 4x4 board

let pairList = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];


// create board for new game

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


function newBoard() {
  let randomPairList = shuffleArray(pairList);
  for (let array=0; array<randomPairList.length; array++) {
    let card = document.createElement("div");
    let data = document.createElement("h1");
    let cardData = document.createTextNode(randomPairList[array]);
    card.setAttribute("class", "card");
    card.setAttribute("id", "card" + [array]);
    data.setAttribute("class", "cardtext");
    data.appendChild(cardData);
    card.appendChild(data);
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
