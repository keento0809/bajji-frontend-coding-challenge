import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import News from "../../components/news/News";
import styles from "./styles.module.scss";

const DUMMY_ARRAY = ["a", "b", "c", "d", "e"] as const;

export default function LatestNewsSection() {
  return (
    <div className={styles.latestNewsSection}>
      <h3 className={styles.latestNewsSection_title}>The Latest</h3>
      <div className={styles.latestNewsSection_newsListContainer}>
        {DUMMY_ARRAY.map((news) => {
          return <News />;
        })}
      </div>
      <LoadMoreNewsButton />
    </div>
  );
}
