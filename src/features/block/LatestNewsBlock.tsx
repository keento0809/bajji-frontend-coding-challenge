import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import styles from "./styles.module.scss";
import NewsList from "../../components/list/NewsList";
import { useState, useMemo } from "react";
import { useIsFetching, useQuery } from "react-query";
import { getNewsData } from "../../helpers/getNewsData";
import { fakeNewsData } from "../../constants/news";

export default function LatestNewsBlock() {
  // React state for managing the number of news that are needed to get from API
  const initialNewsCount = 5;
  const [newsCount, setNewsCount] = useState(initialNewsCount);

  // Check the status if data is being fetched or not
  const isFetching = useIsFetching();

  // Define url for fetching categorized news from API
  const url = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"&filter=!(null)`;

  // Declare latestNewsQuery for fetching NewsData from API
  const latestNewsQuery = useQuery(
    ["latestNews", newsCount],
    () => getNewsData(url),
    {
      keepPreviousData: true,
      cacheTime: 10 * 60 * 1000,
      placeholderData: fakeNewsData,
      staleTime: 600000,
    }
  );

  // update newsCount to load more NewsData from API
  function handleClick() {
    setNewsCount((prevState) => prevState + 5);
  }

  // Memorize NewsList component by useMemo hook
  const memorizedNewsList = useMemo(() => {
    return (
      <NewsList
        newsData={latestNewsQuery.data && latestNewsQuery.data}
        customStyle="latest"
        maxWidth="maxWidth320"
      />
    );
  }, [latestNewsQuery.data]);

  return (
    <>
      <div className={styles.latestNewsBlock}>
        {isFetching === 0 && (
          <h3 className={styles.latestNewsBlock_title}>The Latest</h3>
        )}
        <div className={styles.latestNewsBlock_newsListContainer}>
          {isFetching === 0 && memorizedNewsList}
        </div>
        <LoadMoreNewsButton label="Latest" onClick={handleClick} />
      </div>
    </>
  );
}
