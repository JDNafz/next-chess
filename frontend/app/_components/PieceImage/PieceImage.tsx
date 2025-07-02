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



export default function PieceImage({ piece }: {piece: string}) {
  // console.log(piece);
  let imageComponent;
  //switch statement to check all the non-pawns
  switch (piece) {
    case "bp":
      imageComponent = <Bp />;
      break;
    case "bk":
      imageComponent = <Bk />;
      break;
    case "bq":
      imageComponent = <Bq />;
      break;
    case "bb":
      imageComponent = <Bb />;
      break;
    case "bn":
      imageComponent = <Bnl />;
      break;
    // case "bnr":
    //   imageComponent = <Bnr />;
    //   break;
    case "br":
      imageComponent = <Br />;
      break;
    case "wp":
      imageComponent = <Wp />;
      break;
    case "wk":
      imageComponent = <Wk />;
      break;
    case "wq":
      imageComponent = <Wq />;
      break;
    case "wb":
      imageComponent = <Wb />;
      break;
    case "wn":
      imageComponent = <Wnl />;
      break;
    // case "wnr":
    //   imageComponent = <Wnr />;
    //   break;
    case "wr":
      imageComponent = <Wr />;
      break;
    default:
      imageComponent = null;
  }

  return (
    <>
      <div className="pieceImage">{imageComponent}</div>
    </>
  );
}
//helper function in same location to import all at once
