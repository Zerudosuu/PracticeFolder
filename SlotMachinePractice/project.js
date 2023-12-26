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

//the first step on gettting the deposit amount of the player;
const Deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberOfDeposit = parseFloat(depositAmount);

    if (isNaN(depositAmount) || numberOfDeposit <= 0)
      console.log("Invalid deposit amount, try again.");
    else return numberOfDeposit;
  }
};

//second is getting the lines that she/he's betting to
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter a number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(lines) || numberOfLines <= 0 || numberOfLines > 3)
      console.log("Invalid number of lines, try again.");
    else return numberOfLines;
  }
};
//this will calculate the number of lines and balance will divided by the number of lines
//so that it checks whether the balance is enough or not.

const getBetAmount = (Balance, lines) => {
  while (true) {
    const bet = prompt("Enter bet amount: ");
    const betAmount = parseFloat(bet);

    if (isNaN(lines) || betAmount <= 0 || betAmount > Balance / lines)
      console.log("Invalid bet, try again.");
    else return betAmount;
  }
};

//this method handles simulation of the reels on
const spin = () => {
  const symbols = []; // declaring symbols to act as container of the new values
  //Object.entries(SYMBOL_COUNT)) means that it is accesing the objects and its value
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    // const [symbol, count] means destructiring, symbol is the value and the count is the value of keys
    for (
      let i = 0;
      i < count;
      i++ //count is the number and values of the keys in the array object; so the loop
    ) {
      symbols.push(symbol); //every symbol will be push on the array depending on the count, like A:2 it will push two A
    }
  }

  const reels = []; // reels are the container of the columns that will act as reels for slot machine

  for (let i = 0; i < COLS; i++) {
    // COLS = 3 therefore, in every array there are three elements inside;
    reels.push([]); // for it to be dynamic, we pushed container of the array, since the COLS = 3 it will push 3 of it.
    const reelSymbols = [...symbols]; // we used spread operator for the reelSymbols to copy the symbols.

    for (let j = 0; j < ROWS; j++) {
      // Rows is equal to 3
      const randomIndex = Math.floor(Math.random() * reelSymbols.length); //reelsymbol.length is equal to 20 elements since we spread the symbols to it and we want to generate a random number from it
      const selectedSymbol = reelSymbols[randomIndex]; //selected symbol is equal to the reelsymbol[and the random index that was generate]
      reels[i].push(selectedSymbol); // in every reels that we generate, since we first push the [] with reels[i] and the index is one, means accessing the first element of the array and pushins the next element
      reelSymbols.splice(randomIndex, 1); // after that we remove the selected random symbol on symbols so that it wont be selected again.
    }
  }
  return reels; // this method and loops will run until the new array and elements are created
};

const transposeArray = (reels) => {
  // yay!! I did this I transpose the array
  const rows = []; // declaring this again so that we can store the new array
  for (let i = 0; i < COLS; i++) {
    rows.push([]); //pushing every rotation a new array container
    for (let j = 0; j < ROWS; j++) {
      rows[i].push(reels[j][i]); //switching the element so that it can be transposed
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
