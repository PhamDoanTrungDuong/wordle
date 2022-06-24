import React from 'react'
import "./square.css"

interface IProps {
     val: string;
     squareIdx: number;
}

const Square: React.FC<IProps> = ({val, squareIdx}) => {
  return (
    <div>
          <div className="square">
            {val}
          </div>
    </div>
  )
}

export default Square