var cards = ['queen', 'queen', 'king', 'king'];
    var cardsInPlay = [];

    function checkForMatch(){
       if (cardsInPlay[0] === cardsInPlay[1]) {
          console.log("You found a match!");
        }
        else {
         console.log("Sorry, try again!");
        }
      }
    
    function flipCard(cardId) {
      var cardOne;
      var cardTwo;
          
      if (cardsInPlay.length === 2) {
        console.log("User flipped " + cards[cardId]);
        cardsInPlay.push(cards[cardId]);
        checkForMatch();
        }
      

    }



