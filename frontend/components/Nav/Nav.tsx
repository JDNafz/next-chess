import Link from "next/link";
import styles from "./nav.module.css";
import { mockUser } from "../../types/mockUser";

export const handleLogOut = () => {
  // setUser(null);
};
export default function Nav() {
  const user = mockUser;
  // const user = null;
  return (
    <div className={styles.nav}>
      <Link href="/welcome">
        <h2 className={styles.navTitle}>JustChess</h2>
      </Link>
      <div className={styles.navWrapper}>
        {!user?.id && (
          <>
            <Link className={styles.navLink} href="/welcome">
              Login
            </Link>
            <Link className={styles.navLink} href="/about">
              About
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user?.id && (
          <>
            <Link className={styles.navLink} href="/chess">
              Chess
            </Link>
            <Link className={styles.navLink} href="/profile">
              Profile
            </Link>
            {/* <Link className={styles.navLink} href="/info">
              Info Page
            </Link> */}
            <Link className={styles.navLink} href="/about">
              About
            </Link>

            <button className={`${styles.navLink} ${styles.logout}`}>Logout </button>
          </>
        )}
      </div>
    </div>
  );
}
