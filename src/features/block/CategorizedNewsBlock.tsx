import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import News from "../../components/news/News";
import styles from "./styles.module.scss";

const DUMMY_ARRAY = ["a", "b", "c", "d"] as const;

export default function CategorizedNewsBlock() {
  return (
    <div className={styles.categorizedNewsBlock}>
      <section className={styles.categorizedNewsBlock_title}>
        <h1>Ask HN</h1>
      </section>
      <section className={styles.categorizedNewsBlock_newsList}>
        {DUMMY_ARRAY.map((news) => {
          return <News />;
        })}
      </section>
      <LoadMoreNewsButton />
    </div>
  );
}
