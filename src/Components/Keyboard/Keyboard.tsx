import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { desPos, incRow, setBoard } from "../../redux/boardSlice";
import { rootState } from "../interface";
import Key from "../Key/Key";
import "./keyboard.css";
import wordList from "../../word.json";

const Keyboard = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const board = useSelector((state: rootState) => state.board.board);
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const position = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);
  const word = useSelector((state: rootState) => state.board.correctWord);
  let currentRow = Math.floor((position - 1) / 5);
  const dispatch = useDispatch();

  let wordValid = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`;
  let allWords = wordList.words;
  const clickBack = () => {
    if (currentRow < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(desPos());
    dispatch(setBoard(newBoard));
  };
  const clickEnter = () => {
     console.log(correctWord)
     if (!allWords.includes(wordValid.toLowerCase())) {
          alert("Invalid Words");
     }
     else if (allWords.includes(wordValid.toLowerCase())) {
          if (position % 5 === 0 && position !== 0) {
          dispatch(incRow());
          }
     }
     if(allWords.includes(wordValid)){
          alert("The word is: " + correctWord);
     }
  };
  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className="row" key={idx}>
            {idx === 2 && (
              <span className="letter-row" onClick={clickEnter}>
                {" "}
                Enter{" "}
              </span>
            )}

            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row" key={idx}>
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}> Back </span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
