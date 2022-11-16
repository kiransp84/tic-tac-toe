
  
  import React , {useState} from "react";

  import Square from "./Square";
  




  const DEFAULT_VALUES = [ "0" , "1", "2" , "3" , "4" , "5" , "6" , "7", "8" ];

  export default () => {
    
      const status = 'Next player: X';
      const [squares,setSquares] = useState( DEFAULT_VALUES );
      const [currentPlayer,setCurrentPlayer] = useState(1);

      const renderSquare =  (i) => {
        return (<Square cell={i} onClick={fillValue} />);
      }

      const fillValue =  (index) => {
        
        const newSquares = [...squares];
        newSquares[index] = currentPlayer == 1 ? 'X' : 'O';
        console.log('newSquares ',newSquares);
        setSquares(newSquares);
        setCurrentPlayer(currentPlayer == 1  ? 0: 1 );
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
  