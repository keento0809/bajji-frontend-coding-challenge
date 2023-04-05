import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import Headline from "../../components/headline/Headline";
import NewsList from "../../components/list/NewsList";
import LatestNewsBlock from "../block/LatestNewsBlock";
import styles from "./styles.module.scss";
import useFetchNews from "../../hooks/useFetchNews";
import { useState, useEffect, useMemo } from "react";

export default function TopLatestNewsSection() {
  const [newsCount, setNewsCount] = useState(19);
  // Define url for fetching top-stories news from API
  const url = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"`;

  // Declare useFetchNews custom hook with url above
  const { news, fetchNews } = useFetchNews(url, "topNews");

  // Retrieve the news data without News for headline component
  const splitNewsData = news?.slice(1, news.length);

  const memorizedSplitNewsData = useMemo(() => splitNewsData, [news]);

  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + 4);
  };

  // When newsCount is updated, fetch more NewsData
  useEffect(() => {
    fetchNews(url, "topNews");
  }, [newsCount]);

  return (
    <div className={styles.topLatestNewsSection}>
      <Headline headlineNews={news[0]} />
      <div className={styles.topLatestNewsSection_news}>
        <div className={styles.topLatestNewsSection_newsList}>
          <NewsList newsData={memorizedSplitNewsData} />
          {/* <NewsList newsData={splitNewsData} /> */}
          <LoadMoreNewsButton label="Top HN" onClick={handleClick} />
        </div>
        <div>
          <LatestNewsBlock />
        </div>
      </div>
    </div>
  );
}
