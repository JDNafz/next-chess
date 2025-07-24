"use client"
import { useState } from "react";
// import { Board, Square } from "../../lib/interfaces/Board"
import SquareComponent from "../SquareComponent/SquareComponent";
import { ChessDataProvider } from "../../context/ChessDataProvider";
import { createBoardFromFEN } from "../../lib/helpers/fenBoard";
import { ChessBoard, ChessPiece, Color, Square } from "../../lib/interfaces/ChessInterfaces";
import style from "./board.module.css"
import { indexToCoordinate } from "../../lib/helpers/coordinateConverstion";
import { GameState, loadGameState } from "../../lib/interfaces/GameState";

const BoardComponent: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = loadGameState();
    return saved || {
      board: createBoardFromFEN(),
      moves: [],
      currentPlayer: Color.WHITE,
      gameStatus: 'active',
      //start time? 
      //last move time?
    }


  });
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);




  const [currentPlayer, setCurrentPlayer] = useState<Color>(Color.WHITE); //who's turn is it?
  const [board, setBoard] = useState<ChessBoard>(createBoardFromFEN())

  

  
 

  const makeMove = (from: number, to: number, chessPiece: ChessPiece) => {
    const newBoard: ChessBoard = board.map((square, index) => {
      if (index === from) {
        return null
      } else if (index === to) {
        return chessPiece
      }
      return square
    });
    setBoard(newBoard);
    setCurrentPlayer(prev => prev === Color.WHITE ? Color.BLACK : Color.WHITE);

  }



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
        makeMove(selectedSquare, index, board[selectedSquare]);
        setSelectedSquare(null);
        //send move history to the db?

      }
    }//end second click
  }//end handleSquareClick


  return (
    <ChessDataProvider>
      <div id="board">
        {
          board.map((square, index) => {
            const isBlackSquare = Math.floor(index / 8) % 2 === index % 2;
            return <SquareComponent
              key={index}
              index={index}
              cssClass={selectedSquare === index ? style.selected : isBlackSquare ? style.black : style.white}
              square={square}
              onClick={() => handleSquareClick(index)}
            />
          })
        }
      </div>
    </ChessDataProvider>
  )


}
export default BoardComponent;


