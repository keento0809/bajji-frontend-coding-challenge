import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import styles from "./styles.module.scss";
import NewsList from "../../components/list/NewsList";
import useFetchNews from "../../hooks/useFetchNews";
import { useState, useEffect } from "react";

export default function LatestNewsBlock() {
  const [newsCount, setNewsCount] = useState(5);
  // Define url for fetching categorized news from API
  const url = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"`;

  // Declare useFetchNews custom hook with url above
  const { news, fetchNews } = useFetchNews(url, "otherNews");

  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + 5);
  };

  // When newsCount is updated, fetch more NewsData
  useEffect(() => {
    fetchNews(url, "otherNews");
  }, [newsCount]);

  return (
    <div className={styles.latestNewsBlock}>
      <h3 className={styles.latestNewsBlock_title}>The Latest</h3>
      <div className={styles.latestNewsBlock_newsListContainer}>
        <NewsList
          newsData={news && news}
          customStyle="latest"
          maxWidth="maxWidth320"
        />
      </div>
      <LoadMoreNewsButton label="Latest" onClick={handleClick} />
    </div>
  );
}
