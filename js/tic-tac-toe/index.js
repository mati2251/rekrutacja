let turn = 'x';
let symbols = [['', '', ''], ['', '', ''], ['', '', '']];

const board = document.querySelector('.board');
const tiles = Array.from(document.querySelectorAll('.tile'));

board.addEventListener('click', ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes('tile') && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${ turn }`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === 'x' ? 'o' : 'x';

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  const turnElement = document.getElementById('turn');
  turnElement.innerText = turn.toUpperCase()
}

function checkWin() {
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i].join('').length === 3) {
      if (symbols[i][0] === symbols[i][1] && symbols[i][1] === symbols[i][2]) {
        displayWinAlert();
        break;
      }
    }
    if (symbols[0][i] !== '' && symbols[1][i] !== '' && symbols[2][i] !== '') {
      if (symbols[0][i] === symbols[1][i] && symbols[1][i] === symbols[2][i]) {
        displayWinAlert();
        break;
      }
    }
  }
  if (symbols[0][0] !== '' && symbols[1][1] !== '' && symbols[2][2] !== '') {
    if (symbols[0][0] === symbols[1][1] && symbols[2][2] === symbols[1][1]) {
      displayWinAlert();
    }
  }
  if (symbols[0][2] !== '' && symbols[1][1] !== '' && symbols[0][2] !== '') {
    if (symbols[2][0] === symbols[1][1] && symbols[0][2] === symbols[1][1]) {
      displayWinAlert();
    }
  }
}

function displayWinAlert() {
  const winner = turn === 'x' ? 'O' : 'X'
  alert(`${ winner } player win`)
}

document.getElementById('reset').addEventListener('click', reset)

function reset() {
  symbols = [['', '', ''], ['', '', ''], ['', '', '']];
  board.querySelectorAll('*').forEach((tile) => {
    tile.classList.remove('tile-x', 'tile-o')
  });
  turn = 'x';
  displayTurn(turn);
}
