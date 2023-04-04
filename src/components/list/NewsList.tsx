import News from "../news/News";
import styles from "./styles.module.scss";
import { NewsData } from "../../types/news";

interface Props {
  newsData: NewsData[];
}

export default function NewsList({ newsData }: Props) {
  return (
    // TODO:Refactor the style for this div tag later
    <div style={{ maxWidth: "864px", paddingTop: "40px" }}>
      <div className={styles.newsList}>
        {newsData.map((news) => {
          return <News news={news} />;
        })}
      </div>
    </div>
  );
}
