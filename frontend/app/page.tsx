// use styles modules to prevent to much global css from happening

import Board from "./_components/Board/page";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
			<br></br>
			<br></br>
      <h1> Just Chess </h1>

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
