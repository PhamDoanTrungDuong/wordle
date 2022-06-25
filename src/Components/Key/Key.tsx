import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incPos, setBoard } from '../../redux/boardSlice';
import { rootState } from '../interface';
import "./key.css"

interface IProps {
     letter: string;
}

const Key: React.FC<IProps> = ({ letter }) => {

  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row)
  const dispatch = useDispatch();
  let currentRow = Math.floor(position/5);

  const chooseLetter = () => {
      if(currentRow > row) return;

      if(position >= 30) return;
      const newBoard = [...board];
      newBoard[position] = letter;
      dispatch(incPos())
      dispatch(setBoard(newBoard))
  }

  return (
    <div className="letter" onClick={chooseLetter}>
          {letter}
    </div>
  )
}

export default Key