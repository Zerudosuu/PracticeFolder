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
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [checkForColoumnOfFour, checkForColoumnOfThree, currentColorArrangement]);

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
