

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },

  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },

  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
    var cardsInPlay = [];

    var flippedCard = [];

    var checkForMatch = function(){
      if (cardsInPlay[0] === cardsInPlay[1]) {
         alert("You found a match!");
         resetCards();
         shuffleCards();
       }
       else {
        alert("Sorry, try again!");
       resetCards();
       shuffleCards();
      }
     }

     var resetCards = function(){
      cardsInPlay = [];
      flippedCard.pop().setAttribute("src", "images/back.png");
      flippedCard.pop().setAttribute("src", "images/back.png");
     }


     var shuffleCards = function () {
       var i = cards.length, j, temp;
       while (--i > 0) {
         j = Math.floor(Math.random() * (i+1));
         temp = cards[j];
         cards[j] = cards[i];
         cards[i] = temp; 
       }

       return cards;
     }

    var flipCard = function() {
      
      let cardId = this.getAttribute("data-id");

      console.log("User flipped " + cards[cardId].rank);
      cardsInPlay.push(cards[cardId].rank);
    
      console.log(cards[cardId].cardImage);
      console.log(cards[cardId].suit);

      flippedCard.push(this);

      this.setAttribute("src", cards[cardId].cardImage);

      if (cardsInPlay.length === 2) {
        checkForMatch(); 
      }

    }

    var createBoard = function () {
      for (var i = 0; i < cards.length; i++) {
             var cardElement = document.createElement('img');
             cardElement.setAttribute("src", "images/back.png");
             cardElement.setAttribute("data-id", i); 
             cardElement.addEventListener('click', flipCard);
             document.getElementById("game-board").appendChild(cardElement); 
            }
    }

  createBoard();
    
    



