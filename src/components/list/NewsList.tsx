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
  console.log(
    "rendering-newsList ",
    newsData && newsData.length > 1 && newsData[0].type
  );
  return (
    <div className={`${styles.newsList} ${styles[customStyle]}`}>
      {newsData &&
        newsData?.map((news) => {
          return <News key={news?.id} news={news} maxWidth={maxWidth} />;
        })}
    </div>
  );
}
