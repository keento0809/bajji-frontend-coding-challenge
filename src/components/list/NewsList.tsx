import News from "../news/News";
import styles from "./styles.module.scss";
import { NewsData } from "../../types/news";

interface Props {
  newsData: NewsData[];
  isCategoryNews?: boolean;
  maxWidth: string;
}

export default function NewsList({
  newsData,
  isCategoryNews = false,
  maxWidth,
}: Props) {
  return (
    <div style={{ paddingTop: "40px" }}>
      <div
        className={
          isCategoryNews
            ? `${styles.newsList} ${styles.categorized}`
            : styles.newsList
        }
      >
        {newsData.map((news) => {
          return <News key={news.id} news={news} maxWidth={maxWidth} />;
        })}
      </div>
    </div>
  );
}
