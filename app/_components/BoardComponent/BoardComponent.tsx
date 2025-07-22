"use client"
import { useState } from "react";
import { defaultStartingBoard } from "../../lib/data/defaultStartingBoard"
import { Board, Square } from "../../lib/interfaces/Board"
import SquareComponent from "../SquareComponent/SquareComponent";
import { ChessDataProvider } from "../../context/ChessDataProvider";


export default function BoardComponent() {
  const [board, setBoard] = useState<Board>(defaultStartingBoard)

  // const flipThePerspective = false;

  //standard map of board
  const whiteView = board.map((square: Square) => (
    <SquareComponent key={`sq${square.id}`} square={square} setBoard={setBoard} />
  ));

  //slice() creates a copy of whiteView as to avoid mutating the whiteView const
  // const blackView = whiteView.slice().reverse();

  // this conditional will alternate the view based on whose turn it is.
  // if the flip board icon is clicked it will show the opposite view.
  // const view =
  //   isWhiteTurn && !flipThePerspective ? whiteView : 
  //   isWhiteTurn && flipThePerspective ? blackView  : 
  //   flipThePerspective ? whiteView : blackView; // !isWhiteTurn is implied as this is the else

  return (
    <ChessDataProvider>
      <div id="board">{whiteView}</div>;
    </ChessDataProvider>
  )
}