import { useState, useEffect } from "react";

const width = 8;
const colors = ["blue", "green", "red", "yellow", "purple", "pink"];

function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createboardGame = () => {
    const board = [];
    for (let i = 0; i < width * width; i++) {
      const randomvalue = Math.floor(Math.random() * width.length);
      const randomColor = colors[randomvalue];
      board.push(randomColor);
    }

    setCurrentColorArrangement(board);
  };

  useEffect(() => {
    createboardGame();
  });

  console.log(currentColorArrangement);
  return <></>;
}

export default App;
