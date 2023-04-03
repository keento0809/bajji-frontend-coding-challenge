import styles from "./styles.module.scss";

export default function Headline() {
  return (
    <div className={styles.headline}>
      <section className={styles.headline_titleSection}>
        <p>
          {/* {news?.type} */}
          Story
        </p>
        <div className={styles.headline_title}>
          <h1>
            {/* {news?.title} {news?.url && `(${news?.url})`} */}
            FDA urges patch of Illumina devices with three critical flaws ranked
            10 in severity (scmagazine.com)
          </h1>
        </div>
      </section>
      <section className={styles.headline_authorAndTimeSection}>
        <span className={styles.headline_author}>by LinuxBender</span>
        <span className={styles.headline_time}>12 minutes ago</span>
      </section>
    </div>
  );
}
