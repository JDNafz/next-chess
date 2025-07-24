
import styles from "./square.module.css";
import PieceImage from "../PieceImage/PieceImage";
import { ChessPiece, Color, PieceType } from "../../lib/interfaces/ChessInterfaces";
import { indexToCoordinate } from "../../lib/helpers/coordinateConverstion";

interface SquareProps {
  // square: Square;
  // setBoard: Dispatch<SetStateAction<Board>>;
      index: number,
      isBlackSquare: boolean,
      square: ChessPiece,
      onClick: () => void
}

const SquareComponent: React.FC<SquareProps> = ({ index, isBlackSquare, square, onClick }) => {
  // console.log(square.color);
  return (
    <>
      <div
        className={`${styles.square} ${isBlackSquare ? styles.black: styles.white }`}
        onClick={onClick}
      >
        <div className={styles.coordinate}>{indexToCoordinate(index)}</div>
        {square && <PieceImage key={`${index}img`} square={square} />}
      </div>
    </>
  );
}
export default SquareComponent