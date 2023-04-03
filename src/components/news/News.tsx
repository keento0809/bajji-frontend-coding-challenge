import styles from "./styles.module.scss";

export default function News() {
  return (
    <div className={styles.news}>
      <section className={styles.news_titleSection}>
        <p>Story</p>
        <div className={styles.news_title}>
          <h4>
            Vectorized and performance-portable Quicksort (googleblog.com)
          </h4>
        </div>
      </section>
      <section className={styles.news_authorAndTimeSection}>
        <span className={styles.news_author}>by slackerIII</span>
        <span className={styles.news_time}>22 hours ago</span>
      </section>
    </div>
  );
}
