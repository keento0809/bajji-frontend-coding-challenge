import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import Headline from "../../components/headline/Headline";
import NewsList from "../../components/list/NewsList";
import LatestNewsBlock from "../block/LatestNewsBlock";
import styles from "./styles.module.scss";
import { useState, useMemo } from "react";
import { useQuery, useIsFetching } from "react-query";
import { getNewsData } from "../../helpers/getNewsData";
import { fakeNewsData } from "../../constants/news";
import Loader from "../../components/loader/Loader";

export default function TopLatestNewsSection() {
  // React state for managing the number of news that are needed to get from API
  const initialNewsCount = 19;
  const [newsCount, setNewsCount] = useState(initialNewsCount);

  // Define url for fetching top-stories news from API
  const url = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"&filter=!(null)`;

  const topNewsQuery = useQuery(
    ["topNews", newsCount],
    () => getNewsData(url),
    {
      keepPreviousData: true,
      cacheTime: 10 * 60 * 1000,
      placeholderData: fakeNewsData,
      staleTime: 600000,
    }
  );

  // Split NewsData so the first one will be used for Headline component and the others will be used in NewsList component
  const splitNewsData = topNewsQuery.data?.slice(1, topNewsQuery.data?.length);

  // Memorize NewsList component by useMemo hook
  const memorizedNewsList = useMemo(() => {
    return <NewsList newsData={splitNewsData} />;
  }, [splitNewsData]);

  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + (initialNewsCount - 1));
  };

  const isFetching = useIsFetching();

  return (
    <>
      {isFetching !== 0 && <Loader />}
      <div className={styles.topLatestNewsSection}>
        <Headline headlineNews={topNewsQuery.data && topNewsQuery?.data[0]} />
        <div className={styles.topLatestNewsSection_news}>
          <div className={styles.topLatestNewsSection_newsListSection}>
            <div className={styles.topLatestNewsSection_newsList}>
              {memorizedNewsList}
            </div>
            <LoadMoreNewsButton label="Top HN" onClick={handleClick} />
          </div>
          <div>
            <LatestNewsBlock />
          </div>
        </div>
      </div>
    </>
  );
}
