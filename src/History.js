import React from "react";

export default ( { historyItems , applyHistory } ) =>{
    console.log(historyItems);
    return historyItems ? historyItems.map( ( historyItem , index ) => <div key={index} ><HistoryButton  move={index} history={historyItem} apply={applyHistory} /> <br/> </div> ) : <></>
}

const HistoryButton = ({history,move,apply }) => {
    if( move === 0 ) return <></>
    return <button type="buton" onClick={() => { apply(history,move) }} >Go to Move {move}></button>
}