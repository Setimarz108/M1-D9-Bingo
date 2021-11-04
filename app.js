

const createBingoCards = function(){

      let bingoBoard = document.getElementById('board');

      for( let cardNum = 1; cardNum <= 76; cardNum++) {

        let newCardNode = document.createElement('div');
            newCardNode.innerText = cardNum
            newCardNode.classList.add("number")

            bingoBoard.appendChild(newCardNode);
      }

}

window.onload = function() {
    createBingoCards()
} 


const randomNum = function(){

    let num = Math.floor(Math.random() * 76 + 1);
   console.log(num)
}