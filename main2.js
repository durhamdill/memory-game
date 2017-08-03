// create set of pairs for 4x4 board

let pairList = ["images/img00.png","images/img00.png","images/img01.png","images/img01.png", "images/img03.png", "images/img03.png","images/img04.png","images/img04.png", "images/img05.png", "images/img05.png"];

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

let card;
let image;
let randomPairList;

function newBoardEasy() {
  randomPairList = shuffleArray(pairList);
  for (let array=0; array<pairList.length; array++) {
    card = document.createElement("div");
    image = document.createElement("img");
    image.setAttribute("src", pairList[array]);
    card.setAttribute("class", "card");
    // card.setAttribute("id", "card" + [array]);
    image.setAttribute("class", "image");
    card.appendChild(image);
    let board = document.getElementById("memory_board");
    board.appendChild(card);

    // cardText.classlist.toggle('hidden');
    image.classList.add("hideImage");
  }
}

newBoardEasy();

// create click event on cards

var theParent = document.querySelector("#memory_board");
theParent.addEventListener("click", showImage, false);

let imageSelect = getElementsByClassName("image");

function showImage(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        image.classList.remove("hideImage");
        image.classList.add("showImage");
        // alert("Hello " + clickedItem);
    }
    e.stopPropagation();
}

// let showCard = function() {
//   image.classList.remove("hideImage");
//   image.classList.add("showImage");
// }
//
// card.addEventListener("click", showCard);
//
//
// <script>
//   document.getElementById("test").addEventListener("click", function( event ) {
//     // display the current click count inside the clicked div
//     event.target.textContent = "click count: " + event.detail;
//   }, false);
// </script>
//
// document.getElementById('card').addEventListener("click", function(event)) {
//   event.target.
// }
// image.classList.remove("hideImage");

// // let cardImage = document.getElementsByClassName();
// let cardDiv = document.querySelector("#memory_board");
//
//
// function showCard(e){
//
//   e.target.classList.remove("hideImage");
//   e.target.classList.add("showImage");
//   console.log("click");
// }
//
// cardDiv.addEventListener("click", showCard, false);
//
//
// // https://davidwalsh.name/css-flip
