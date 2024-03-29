import { useState, useEffect } from "react";
import Boxes from "./boxes";
import "./style.scss";

const width = 8;
const candyColors = ["blue", "green", "red", "yellow", "purple", "pink"];

function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const checkForColoumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentColorArrangement[i];

      if (
        columnOfFour.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        columnOfFour.forEach(
          (square) => (currentColorArrangement[square] = "")
        );
      }
    }
  };

  const checkForRowOfFour = () => {
    for (let i = 0; i <= 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      // console.log(columnOfThree);
      const decidedColor = currentColorArrangement[i];
      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 62, 63, 64,
      ];

      if (notValid.includes(i)) continue;

      if (
        rowOfFour.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        rowOfFour.forEach((square) => (currentColorArrangement[square] = ""));
      }
    }
  };

  const checkForRowOfThree = () => {
    for (let i = 0; i <= 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      // console.log(columnOfThree);
      const decidedColor = currentColorArrangement[i];
      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];

      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        rowOfThree.forEach((square) => (currentColorArrangement[square] = ""));
      }
    }
  };

  const checkForColoumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      // console.log(columnOfThree);
      const decidedColor = currentColorArrangement[i];

      if (
        columnOfThree.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        columnOfThree.forEach(
          (square) => (currentColorArrangement[square] = "")
        );
      }
    }
  };

  const createboardGame = () => {
    const board = [];
    for (let i = 0; i < width * width; i++) {
      const randomvalue = Math.floor(Math.random() * candyColors.length);
      const randomColor = candyColors[randomvalue];
      board.push(randomColor);
    }

    setCurrentColorArrangement(board);
  };

  useEffect(() => {
    createboardGame();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColoumnOfFour();
      checkForColoumnOfThree();
      checkForRowOfFour();
      checkForRowOfThree();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColoumnOfFour,
    checkForColoumnOfThree,
    checkForRowOfFour,
    checkForRowOfThree,
    currentColorArrangement,
  ]);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((color, index) => (
          <img key={index} style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  );
}

export default App;
