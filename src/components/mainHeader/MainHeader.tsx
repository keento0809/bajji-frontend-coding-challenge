import SearchButton from "../button/SearchButton";
import SubScribeButton from "../button/SubScribeButton";
import styles from "./styles.module.scss";

export default function MainHeader() {
  return (
    <header className={styles.mainHeader}>
      <section className={styles.mainHeader_title}>
        <h2>Hacker News</h2>
      </section>
      <section className={styles.mainHeader_buttons}>
        <SubScribeButton />
        <SearchButton />
      </section>
    </header>
  );
}
