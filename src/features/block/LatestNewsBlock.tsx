import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import News from "../../components/news/News";
import styles from "./styles.module.scss";

const DUMMY_ARRAY = ["a", "b", "c", "d", "e"] as const;

export default function LatestNewsBlock() {
  return (
    <div className={styles.latestNewsBlock}>
      <h3 className={styles.latestNewsBlock_title}>The Latest</h3>
      <div className={styles.latestNewsBlock_newsListContainer}>
        {DUMMY_ARRAY.map((news) => {
          return <News />;
        })}
      </div>
      <LoadMoreNewsButton />
    </div>
  );
}
