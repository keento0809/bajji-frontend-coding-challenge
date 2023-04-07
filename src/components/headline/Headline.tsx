import styles from "./styles.module.scss";
import { NewsData } from "../../types/news";
import { checkTimeDifferences } from "../../helpers/checkTimeDifference";
import { useIsFetching } from "react-query";

interface Props {
  headlineNews: NewsData | undefined;
}

export default function Headline({ headlineNews }: Props) {
  // Convert unix time to hour or minutes or now
  const fixedTime =
    headlineNews === undefined ? "" : checkTimeDifferences(headlineNews?.time);

  // Check the status if data is being fetched or not
  const isFetching = useIsFetching();

  return (
    <div className={styles.headline}>
      <section className={styles.headline_titleSection}>
        {isFetching === 0 && <p>{headlineNews?.type}</p>}
        <div className={styles.headline_title}>
          {isFetching === 0 && (
            <h1>
              {headlineNews?.title}{" "}
              {headlineNews?.url && `(${headlineNews?.url})`}
            </h1>
          )}
        </div>
      </section>
      <section className={styles.headline_authorAndTimeSection}>
        {isFetching === 0 && (
          <span className={styles.headline_author}>by {headlineNews?.by}</span>
        )}
        {isFetching === 0 && <span>{fixedTime && fixedTime}</span>}
      </section>
    </div>
  );
}
