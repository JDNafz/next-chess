import React from "react";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className="container">
      <div className={styles.aboutDiv}>
        <h1> Hi, my name is JD</h1>
        <p className={styles.aboutText}>
          Besides coding, I have a passion for dance, especially West Coast Swing. I dance regularly
          traveling and competing at national and international events. I also love taking care of
          my bonsai trees, may they remain small forever 💖
        </p>
        <p className={styles.aboutText}>
          Note to regular chess players: <br />
          Check, checkmate, and stalemate are still in development, currently kill the king to win.
        </p>
      </div>
    </div>
  );
}
