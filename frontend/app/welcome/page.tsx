import styles from "./welcome.module.css";
import { mockUser } from "../../types/mockUser";
import Link from "next/link";

export default function Welcome() {
  // const user = mockUser;
	const user = null;
	

  return (
    <div className={styles.containerWelcomePage}>
      <h1 className={styles.welcome}>
        Welcome <br /> to JC by JD
      </h1>
      <div className={styles.welcomeContent}>
        {!user?.id && (
          <div className={styles.loginArea}>
            {/* <LoginForm /> */}
            <div>LoginForm </div>
            <div>
              <Link className="btn" href="/register">
                Sign Up!
              </Link>
            </div>
          </div>
        )}
        <div className="paragraphs">
          {welcomeStrings.map((string, idx) => (
            <p key={idx} className={styles.welcomeParagraph}>
              {string}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const welcomeStrings: string[] = [
  `JustChess (by JD) is exactly what it sounds like, it’s just chess. A simple two player
board game brought to the web to play online, move pieces around the board and capture
other pieces until you can capture the enemy king.`,

  `Chess is a game hundreds of years old. People play chess to be mentally stimulated, it’s
fun to create plans, and adapt to your opponent. Chess brings people together to talk
theory, game plans, compete and generally connect with others. Planning chess online
allows players to forego the need for a physical board and play remotely from anywhere
in the world. JustChess lets you play online with a computer or your friends and keeps
the game simple and peaceful, without adding too much noise to the experience.`,
];
