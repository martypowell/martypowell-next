import Head from "next/head";
import styles from "./layout.module.css";
import SiteNav from "./SiteNav";

export default ({ children, title = "Marty Powell" }) => (
  <>
    <Head>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
    <header>
      <SiteNav />
    </header>
    <div className={styles.container}>{children}</div>
  </>
);
