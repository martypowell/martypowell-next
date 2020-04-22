import Link from "next/link";
import styles from "./SiteNav.module.css";

export default (props) => (
  <div className={styles.container}>
    <p className={styles.branding}>Marty Powell</p>
    <p>Dad, Husband, Software Developer </p>
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
