import styles from "./styles.module.scss";
import { NewsData } from "../../types/news";

interface Props {
  news: NewsData;
}

export default function News({ news }: Props) {
  return (
    <div className={styles.news}>
      <section className={styles.news_titleSection}>
        <p>{news?.type}</p>
        <div className={styles.news_title}>
          <h4>
            {news?.title} {news?.url && `(${news?.url})`}
          </h4>
        </div>
      </section>
      <section className={styles.news_authorAndTimeSection}>
        <span className={styles.news_author}>by {news?.by}</span>
        <span className={styles.news_time}>{news?.time} ago</span>
      </section>
    </div>
  );
}
