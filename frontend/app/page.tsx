// use styles modules to prevent to much global css from happening

import Board from "./_components/BoardComponent/BoardComponent";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="HomePage" >
          <Board />
          {/* <BoardControls /> */}
          {/* <Winner /> */}
          {/* <PromotePawn /> */}
      {/* {showMoveList && <GameInfo />} */}
      {/* <Menu /> */}

      <footer/>
    </div>
  );
}
