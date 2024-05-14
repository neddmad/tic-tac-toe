
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const fourthButton = document.getElementById('fourthButton');
const fifthButton = document.getElementById('fifthButton');
const sixthButton = document.getElementById('sixthButton');
const seventhButton = document.getElementById('seventhButton');
const eighthButton = document.getElementById('eighthButton');
const ninthButton = document.getElementById('ninthButton');

let currentPlayer = 1;

function buttonClicker(button) {
 
  if(currentPlayer === 1){
    alert('Хід гравця #1')
  } else (alert('Хід гравця #2'))
  if (button.innerText === '1' ||
   button.innerText === '2' ||
    button.innerText === '3' ||
     button.innerText === '4' ||
      button.innerText === '5' ||
       button.innerText === '6' ||
        button.innerText === '7' ||
         button.innerText === '8' ||
          button.innerText === '9') {
    let promptInfo = prompt('Enter X or O (in English)');
    if (promptInfo === 'X' || promptInfo === 'O') {
      button.innerText = promptInfo;
     currentPlayer = currentPlayer === 1 ? 2 : 1;
      checkWinCondition();
      checkDrawCondition();
    } else {
      alert('Invalid input!');
    }
  }
}

function addEventListenersToButtons() {
  firstButton.addEventListener('click', () => {
    buttonClicker(firstButton);
  });

  secondButton.addEventListener('click', () => {
    buttonClicker(secondButton);
  });

  thirdButton.addEventListener('click', () => {
    buttonClicker(thirdButton);
  });

  fourthButton.addEventListener('click', () => {
    buttonClicker(fourthButton);
  });

  fifthButton.addEventListener('click', () => {
    buttonClicker(fifthButton);
  });

  sixthButton.addEventListener('click', () => {
    buttonClicker(sixthButton);
  });

  seventhButton.addEventListener('click', () => {
    buttonClicker(seventhButton);
  });

  eighthButton.addEventListener('click', () => {
    buttonClicker(eighthButton);
  });

  ninthButton.addEventListener('click', () => {
    buttonClicker(ninthButton);
  });
}

function checkWinCondition() {
  if (
    (firstButton.innerText === secondButton.innerText && secondButton.innerText === thirdButton.innerText) ||
    (firstButton.innerText === fourthButton.innerText && fourthButton.innerText === seventhButton.innerText) ||
    (firstButton.innerText === fifthButton.innerText && fifthButton.innerText === ninthButton.innerText) ||
    (secondButton.innerText === fifthButton.innerText && fifthButton.innerText === eighthButton.innerText) ||
    (thirdButton.innerText === fifthButton.innerText && fifthButton.innerText === seventhButton.innerText) ||
    (thirdButton.innerText === sixthButton.innerText && sixthButton.innerText === ninthButton.innerText) ||
    (fourthButton.innerText === fifthButton.innerText && fifthButton.innerText === sixthButton.innerText) ||
    (seventhButton.innerText === eighthButton.innerText && eighthButton.innerText === ninthButton.innerText)
  ) {if(currentPlayer === 2){
    alert('Переміг гравець #1')
  }
  if(currentPlayer === 1){alert('Переміг гравець #2')}
    
  }
}


function checkDrawCondition() {
  if (
    firstButton.innerText !== '1' &&
    secondButton.innerText !== '2' &&
    thirdButton.innerText !== '3' &&
    fourthButton.innerText !== '4' &&
    fifthButton.innerText !== '5' &&
    sixthButton.innerText !== '6' &&
    seventhButton.innerText !== '7' &&
    eighthButton.innerText !== '8' &&
    ninthButton.innerText !== '9'
  ) {
    alert('It\'s a draw!');
  }
}

addEventListenersToButtons();

