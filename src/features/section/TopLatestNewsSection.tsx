import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import Headline from "../../components/headline/Headline";
import NewsList from "../../components/list/NewsList";
import LatestNewsBlock from "../block/LatestNewsBlock";
import styles from "./styles.module.scss";
import useFetchNews from "../../hooks/useFetchNews";

export default function TopLatestNewsSection() {
  // Define url for fetching top-stories news from API
  const url = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=19&orderBy="$key"`;

  // Declare useFetchNews custom hook with url above
  const { news, fetchNews } = useFetchNews(url);

  // Retrieve the news data without News for headline component
  const splitNewsData = news?.slice(1, news.length);
  return (
    <div className={styles.topLatestNewsSection}>
      <Headline headlineNews={news[0]} />
      <div className={styles.topLatestNewsSection_news}>
        <div className={styles.topLatestNewsSection_newsList}>
          <NewsList newsData={splitNewsData} customStyle="" maxWidth="272px" />
          <LoadMoreNewsButton />
        </div>
        <div>
          <LatestNewsBlock />
        </div>
      </div>
    </div>
  );
}
