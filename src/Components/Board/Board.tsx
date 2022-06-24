import React from 'react'
import Square from "./../Square/Square"
import Keyboard from '../Keyboard/Keyboard';
import "./board.css"

interface IProps {
     board: string[];
}

const Board: React.FC<IProps> = ({ board }) => {
  return (
    <>
     <div className="board">
          {board.map((square, idx) => {
               return (
                    <div key={idx}>
                         <Square val={square} squareIdx={idx} />
                    </div>
               )
          })}
     </div>
     <div className="keyboard">
          <Keyboard />
     </div>
    </>
  )
}

export default Board