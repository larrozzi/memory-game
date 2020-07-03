
document.addEventListener('DOMContentLoaded', () => {
   

    const cardArray = [
    {
        name:'leaf',
        img:'images/leaf.png'
    },
    {
        name:'leaf',
        img:'images/leaf.png'
    },
    {
        name:'island',
        img:'images/island.png'
    },
    {
        name:'island',
        img:'images/island.png'
    },
    {
        name:'plant',
        img:'images/plant.png'
    },
    {
        name:'plant',
        img:'images/plant.png'
    },
    {
        name:'cool-icecream',
        img:'images/cool-icecream.png'
    },
    {
        name:'cool-icecream',
        img:'images/cool-icecream.png'
    },
    {
        name:'icecream-down',
        img:'images/icecream-down.png'
    },
    {
        name:'icecream-down',
        img:'images/icecream-down.png'
    },
    {
        name:'bad-island',
        img:'images/bad-island.png'
    },
    {
        name:'bad-island',
        img:'images/bad-island.png'
    }
  ]
  
    cardArray.sort(() => 0.5 - Math.random())
   
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    

    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/focus.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name )
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout (checkForMatch,500)
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId= cardsChosenId[0]
        const optionTwoId= cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/focus.png')
            cards[optionTwoId].setAttribute('src', 'images/focus.png')
            alert('You have clicked the same image!')
          }
        else if(cardsChosen[0]===cardsChosen[1]){
            alert('You found a Match')
            cards[optionOneId].setAttribute('src', 'images/tick.png')
            cards[optionTwoId].setAttribute('src', 'images/tick.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'images/focus.png')
            cards[optionTwoId].setAttribute('src', 'images/focus.png')
            alert("Try Again")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = " "+cardsWon.length

        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent=" Congratulations! Your memory works."
        }
    }

    createBoard()
  })

