"use client"
import { useState } from "react";
import { defaultStartingBoard } from "../../lib/data/defaultStartingBoard"
// import { Board, Square } from "../../lib/interfaces/Board"
import SquareComponent from "../SquareComponent/SquareComponent";
import { ChessDataProvider } from "../../context/ChessDataProvider";
import { createBoardFromFEN } from "../../lib/data/fenBoard";
import { ChessBoard, Color, Square } from "../../lib/interfaces/ChessInterfaces";
import style from "./board.module.css"

const BoardComponent: React.FC = () => {
  const [board, setBoard] = useState<ChessBoard>(createBoardFromFEN())
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [currentPlayer, sestCurrentPlayer] = useState<Color>(Color.WHITE); //who's turn is it?

  const handleSquareClick = (index: number) => {
    const clickedSquare = board[index]

    if (selectedSquare === null || clickedSquare?.color === board[selectedSquare].color) {
      // first click: select square
      if (clickedSquare && clickedSquare.color === currentPlayer) {
        setSelectedSquare(index);
        console.log("Selected", index);
      }
    } else {
      //second click
      if (selectedSquare === index) {
        // clicked the same square > deselect 
        setSelectedSquare(null);
      } else {
        // try to make a move
        // makeMove(selectedSquare, index, board[selectedSquare]);
        setSelectedSquare(null);
        //send move history to the db?

      }
    }//end second click
  }//end handleSquareClick

  const fenBoard = createBoardFromFEN();
  const squares = board.map((square, index) => {
    const isBlackSquare = Math.floor(index / 8) % 2 === index % 2;
    return <SquareComponent
      key={index}
      index={index}
      cssClass={selectedSquare === index ? style.selected : isBlackSquare ? style.black : style.white}
      square={square}
      onClick={() => handleSquareClick(index)}
    />
  })

  return (
    <ChessDataProvider>
      <div id="board">{squares}</div>
    </ChessDataProvider>
  )
}
export default BoardComponent;