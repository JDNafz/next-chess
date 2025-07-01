
// use styles modules to prevent to much global css from happening
import Link from "next/link";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <h1> Just Chess </h1>
				<Link href={"/app/About"} >About</Link>
      </main>
      <footer>
      </footer>
    </div>
  );
}
