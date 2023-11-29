// Deposit some money
// Determine number of lines to bet on
// Collect a bet amount
// Spin the slot machine
// check if the user won
// give the user their winnings
// play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const Deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberOfDeposit = parseFloat(depositAmount);

    if (isNaN(depositAmount) || numberOfDeposit <= 0)
      console.log("Invalid deposit amount, try again.");
    else return numberOfDeposit;
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter a number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(lines) || numberOfLines <= 0 || numberOfLines > 3)
      console.log("Invalid number of lines, try again.");
    else return numberOfLines;
  }
};

const getBetAmount = (Balance, lines) => {
  while (true) {
    const bet = prompt("Enter bet amount: ");
    const betAmount = parseFloat(bet);

    if (isNaN(lines) || betAmount <= 0 || betAmount > Balance / lines)
      console.log("Invalid bet, try again.");
    else return betAmount;
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];

  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];

    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const transposeArray = (reels) => {
  const rows = [];
  for (let i = 0; i < COLS; i++) {
    rows.push([]);
    for (let j = 0; j < ROWS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;

      if (i != row.length - 1) {
        rowString += " | ";
      }
    }

    console.log(rowString);
  }
};

const getWinnnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol in symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

let Balance = Deposit();
const numberOfLines = getNumberOfLines();
const bet = getBetAmount(Balance, numberOfLines);
const reels = spin();
const rows = transposeArray(reels);
const print = printRows(rows);
const winnings = getWinnnings(rows, bet, numberOfLines);
console.log("You won, $" + winnings.toString());

// can use method to store the value and pass it to variable(s)
