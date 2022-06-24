import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { desPos, setBoard } from '../../redux/boardSlice';
import { rootState } from "../interface";
import Key from "../Key/Key";
import "./keyboard.css"

const Keyboard = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.pos);
  const dispatch = useDispatch();

  const clickBack = () => {
     if(position <= 0) return;
     const newBoard = [...board];
     newBoard[position-1] = "";
     dispatch(desPos())
     dispatch(setBoard(newBoard))
  }

  return (
     <div className="keyboard-container">
          {rows.map((row, idx) => {
               return (
                    <div className="row" key={idx}>
                         {idx === 2 && (
                              <span className="letter-row"> Enter </span>
                         )}

                         {row.split(" ").map((letter, idx) => {
                              return (
                                   <div className="letter-row" key={idx}>
                                        <Key letter={letter.toUpperCase()} />
                                        {letter === "m" && <span onClick={clickBack}> Back </span>}
                                   </div>
                              )
                         })}
                    </div>
               )
          })}
     </div>
  );
};

export default Keyboard;