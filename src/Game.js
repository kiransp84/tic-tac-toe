import React , {useState} from "react";
  
import Board from "./Board";
import History from "./History";

const DEFAULT_VALUES = [ "0" , "1", "2" , "3" , "4" , "5" , "6" , "7", "8" ];

export default () =>  {
    const [squares,setSquares] = useState( DEFAULT_VALUES );

    const [history,setHistory] = useState([[]]);

    const updateSquares =  (index,currentPlayer) => {
        const newSquares = [...squares];
        newSquares[index] = currentPlayer == 1 ? 'X' : 'O';
        console.log('newSquares ',newSquares);
        setSquares(newSquares);
        updateHistory(newSquares)
    }

    const updateHistory = (squares ) => {
       const newHistory = [...history];
       newHistory.push(squares);
       console.log(' history sees ',newHistory);
       setHistory(newHistory);
    }

    const populateHistory = (history) => {
        console.log(' user is going to  ',history);
        setSquares(history);
    }

    return (
    <div className="game">
        <div className="game-board">
        <Board squares={squares} updateSquares={updateSquares} />
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