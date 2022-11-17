
  
  import React  from "react";

  import Square from "./Square";
  




  

  export default ( {squares,updateSquares,currentPlayer}) => {
    
      const status = " Winner : "+calculateWinner(squares); 

      const renderSquare =  (i) => {
        return (<Square cell={i} onClick={fillValue} />);
      }

      const fillValue =  (index) => { 
        const nextPlayer = currentPlayer == 1  ? 0: 1   ;
        updateSquares(index,nextPlayer);
      }

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(squares[0])}
            {renderSquare(squares[1])}
            {renderSquare(squares[2])}
          </div>
          <div className="board-row">
            {renderSquare(squares[3])}
            {renderSquare(squares[4])}
            {renderSquare(squares[5])}
          </div>
          <div className="board-row">
            {renderSquare(squares[6])}
            {renderSquare(squares[7])}
            {renderSquare(squares[8])}
          </div>
        </div>
      );
  }
  

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }