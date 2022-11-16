//
  
import React , {useState} from "react";
  
export default ({cell,onClick}) =>  {
      const [isDisabled,setIsDisabled]  = useState(false);
      return (
        <button data-cell={cell} className="square" __disabled={isDisabled} onClick={ () => { setIsDisabled(true) ; onClick(cell) }} >
          {cell}
        </button>
      );
}