import styles from "./styles.module.scss";
import { NewsData } from "../../types/news";
import { checkTimeDifferences } from "../../helpers/checkTimeDifference";
import { useIsFetching } from "react-query";

interface Props {
  headlineNews: NewsData | undefined;
}

export default function Headline({ headlineNews }: Props) {
  // Convert unix time to hour or minutes
  const fixedTime =
    headlineNews === undefined ? "" : checkTimeDifferences(headlineNews?.time);

  const isFetching = useIsFetching();

  return (
    <div className={styles.headline}>
      <section className={styles.headline_titleSection}>
        {isFetching === 0 && <p>{headlineNews?.type}</p>}
        <div className={styles.headline_title}>
          <h1>
            {headlineNews?.title}{" "}
            {headlineNews?.url && `(${headlineNews?.url})`}
          </h1>
        </div>
      </section>
      <section className={styles.headline_authorAndTimeSection}>
        {isFetching === 0 && (
          <span className={styles.headline_author}>by {headlineNews?.by}</span>
        )}
        {isFetching === 0 && (
          <span className={styles.headline_time}>{fixedTime && fixedTime}</span>
        )}
      </section>
    </div>
  );
}
