import News from "../news/News";
import styles from "./styles.module.scss";
import { NewsData } from "../../types/news";

interface Props {
  newsData: NewsData[] | undefined;
  customStyle?: string;
  maxWidth?: string;
}

export default function NewsList({
  newsData,
  customStyle = "",
  maxWidth,
}: Props) {
  console.log("rendering-newsList");
  return (
    <div className={`${styles.newsList} ${styles[customStyle]}`}>
      {newsData?.map((news) => {
        return <News key={news?.id} news={news} maxWidth={maxWidth} />;
      })}
    </div>
  );
}
