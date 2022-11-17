import React , {useState} from "react";
  
import Board from "./Board";
import History from "./History";

const DEFAULT_VALUES = [ "0" , "1", "2" , "3" , "4" , "5" , "6" , "7", "8" ];

export default () =>  {
    
    const [board,setBoard] = useState( { squares : DEFAULT_VALUES , currentPlayer : 1  } );

    //const [squares,setSquares] = useState( DEFAULT_VALUES );

    const [history,setHistory] = useState([]);

    const updateSquares =  (index,currentPlayer) => {
        const newSquares = [...board.squares];
        newSquares[index] = currentPlayer == 1 ? 'X' : 'O';
        console.log('newSquares ',newSquares);
        const newBoard =  { squares : newSquares  , currentPlayer };
        setBoard(newBoard);
        updateHistory(newBoard)
    }

    const updateHistory = (board ) => {
       const newHistory = [...history];
       newHistory.push(board);
       console.log(' history sees ',newHistory);
       setHistory(newHistory);
    }

    const populateHistory = (board,move) => {
        console.log(' user is going to  ',board);
        setBoard(board);
        const newHistory = history.splice(move);
        setHistory(newHistory);
    }

    return (
    <div className="game">
        <div className="game-board">
        <Board squares={board.squares} currentPlayer={board.currentPlayer} updateSquares={updateSquares} />
        </div>
        <div className="game-info">
        <History historyItems={history} applyHistory={populateHistory}/>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        </div>
    </div>
    );

}
  
  // ========================================