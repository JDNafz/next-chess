"use client"
import { useState } from "react";
import { defaultStartingBoard } from "../../lib/data/defaultStartingBoard"
// import { Board, Square } from "../../lib/interfaces/Board"
import SquareComponent from "../SquareComponent/SquareComponent";
import { ChessDataProvider } from "../../context/ChessDataProvider";
import { createBoardFromFEN } from "../../lib/data/fenBoard";
import { ChessBoard, Square } from "../../lib/interfaces/ChessInterfaces";


export default function BoardComponent() {
  const [board, setBoard] = useState<ChessBoard>(defaultStartingBoard)

  // const flipThePerspective = false;
  const handleSquareClick = (index: number) => {
    //click logic
  }
  const fenBoard = createBoardFromFEN();

  const fenMapped = fenBoard.map((square, index) => {
    const isBlackSquare = Math.floor(index / 8) % 2 === index % 2;
    return <SquareComponent
      key={index}
      index={index}
      isBlackSquare={isBlackSquare}
      square={square}
      onClick={() => handleSquareClick(index)}
    />
  })
  return (
    <ChessDataProvider>
      <div id="board">{fenMapped}</div>;
    </ChessDataProvider>
  )
}