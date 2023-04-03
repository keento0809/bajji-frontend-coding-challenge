import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import News from "../../components/news/News";
import styles from "./styles.module.scss";

const DUMMY_ARRAY = ["a", "b", "c", "d"] as const;

export default function CategorizedNewsBlock() {
  return (
    <div className={styles.categorizedNewsSection}>
      <section className={styles.categorizedNewsSection_title}>
        <h1>Ask HN</h1>
      </section>
      <section className={styles.categorizedNewsSection_newsList}>
        {DUMMY_ARRAY.map((news) => {
          return <News />;
        })}
      </section>
      <LoadMoreNewsButton />
    </div>
  );
}
