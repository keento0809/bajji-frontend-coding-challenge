import styles from "./styles.module.scss";
import { NewsData } from "../../types/news";
import { checkTimeDifferences } from "../../helpers/checkTimeDifference";

interface Props {
  headlineNews: NewsData;
}

export default function Headline({ headlineNews }: Props) {
  // Convert unix time to hour or minutes
  const fixedTime = checkTimeDifferences(headlineNews?.time);

  return (
    <div className={styles.headline}>
      <section className={styles.headline_titleSection}>
        <p>{headlineNews?.type}</p>
        <div className={styles.headline_title}>
          <h1>
            {headlineNews?.title}{" "}
            {headlineNews?.url && `(${headlineNews?.url})`}
          </h1>
        </div>
      </section>
      <section className={styles.headline_authorAndTimeSection}>
        <span className={styles.headline_author}>by {headlineNews?.by}</span>
        <span className={styles.headline_time}>{fixedTime} ago</span>
      </section>
    </div>
  );
}
