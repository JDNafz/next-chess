// use styles modules to prevent to much global css from happening

import Board from "./_components/Board/Board";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className="plusTable">
        <div id="playArea">
          <Board />
          {/* <BoardControls /> */}
          {/* <Winner /> */}
          {/* <PromotePawn /> */}
        </div>
      </div>
      {/* {showMoveList && <GameInfo />} */}
      {/* <Menu /> */}

      <footer/>
    </div>
  );
}
