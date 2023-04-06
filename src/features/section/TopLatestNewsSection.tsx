import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import Headline from "../../components/headline/Headline";
import NewsList from "../../components/list/NewsList";
import LatestNewsBlock from "../block/LatestNewsBlock";
import styles from "./styles.module.scss";
import useFetchNews from "../../hooks/useFetchNews";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useQuery } from "react-query";
import { getNewsData } from "../../helpers/getNewsData";

export default function TopLatestNewsSection() {
  const initialNewsCount = 19;
  const [newsCount, setNewsCount] = useState(initialNewsCount);
  // Define url for fetching top-stories news from API
  const url = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"`;

  // Declare useFetchNews custom hook with url above
  // const { news, fetchNews } = useFetchNews(url, "topNews");

  const topNewsQuery = useQuery(["topNews", newsCount], () => getNewsData(url));

  // Retrieve the news data without News for headline component
  const splitNewsData = topNewsQuery.data?.slice(1, topNewsQuery.data?.length);

  const memorizedSplitNewsData = useMemo(() => splitNewsData, [splitNewsData]);

  const memorizedNewsList = useMemo(() => {
    return <NewsList newsData={memorizedSplitNewsData} />;
  }, [memorizedSplitNewsData]);

  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + initialNewsCount);
  };

  // When newsCount is updated, fetch more NewsData
  // useEffect(() => {
  // fetchNews(url, "topNews");
  // paginateNews();
  // }, [paginateNews]);

  return (
    <div className={styles.topLatestNewsSection}>
      <Headline headlineNews={topNewsQuery.data && topNewsQuery?.data[0]} />
      <div className={styles.topLatestNewsSection_news}>
        <div className={styles.topLatestNewsSection_newsList}>
          <NewsList newsData={memorizedSplitNewsData} />
          {/* {memorizedNewsList} */}
          <LoadMoreNewsButton label="Top HN" onClick={handleClick} />
        </div>
        <div>
          <LatestNewsBlock />
        </div>
      </div>
    </div>
  );
}
