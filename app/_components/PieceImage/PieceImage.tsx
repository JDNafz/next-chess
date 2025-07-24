import styles from "./piece.module.css"

// Import Statements:
import Bk from "./Pieces/bk";
import Bq from "./Pieces/bq";
import Bb from "./Pieces/bb";
import Br from "./Pieces/br";
// import Bnr from "./Pieces/bnr";
import Bnl from "./Pieces/bnl";
import Bp from "./Pieces/bp";

import Wk from "./Pieces/wk";
import Wq from "./Pieces/wq";
import Wb from "./Pieces/wb";
// import Wnr from "./Pieces/wnr";
import Wnl from "./Pieces/wnl";
import Wr from "./Pieces/wr";
import Wp from "./Pieces/wp";

import { ChessPiece, Color, PieceType } from "../../lib/interfaces/ChessInterfaces";

const imageComponents = {
  [`${PieceType.KING}-${Color.BLACK}`]: <Bk />,
  [`${PieceType.QUEEN}-${Color.BLACK}`]: <Bq />,
  [`${PieceType.BISHOP}-${Color.BLACK}`]: <Bb />,
  [`${PieceType.KNIGHT}-${Color.BLACK}`]: <Bnl />,
  [`${PieceType.ROOK}-${Color.BLACK}`]: <Br />,
  [`${PieceType.PAWN}-${Color.BLACK}`]: <Bp />,

  [`${PieceType.KING}-${Color.WHITE}`]: <Wk />,
  [`${PieceType.QUEEN}-${Color.WHITE}`]: <Wq />,
  [`${PieceType.BISHOP}-${Color.WHITE}`]: <Wb />,
  [`${PieceType.KNIGHT}-${Color.WHITE}`]: <Wnl />,
  [`${PieceType.ROOK}-${Color.WHITE}`]: <Wr />,
  [`${PieceType.PAWN}-${Color.WHITE}`]: <Wp />,
}




export default function PieceImage({ square }: { square: ChessPiece }) {

  const key = `${square.piece}-${square.color}`
  const imageComponent = imageComponents[key];

  return (
    <>
      <div className={styles.pieceImage}>{imageComponent}</div>
    </>
  );
}
//helper function in same location to import all at once
