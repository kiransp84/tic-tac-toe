//
  
import React from "react";
  
export default ({cell,onClick}) =>  {
      
      return (
        <button data-cell={cell} className="square" onClick={ () => { onClick(cell) }} >
          {cell}
        </button>
      );
}