import { useEffect, useState, useMemo, useCallback } from "react";
import Headline from "../../components/headline/Headline";
import styles from "./styles.module.scss";
import NewsList from "../../components/list/NewsList";
import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import { useQuery, useIsFetching } from "react-query";
import { getNewsData } from "../../helpers/getNewsData";
import { fakeNewsData } from "../../constants/news";
import Loader from "../../components/loader/Loader";

interface Props {
  category: string;
}

export default function CategorizedNewsSection({ category }: Props) {
  // Fix value for using API call
  const fixedCategory = category === "Jobs" ? "job" : category.toLowerCase();

  // React state for managing the number of news that are needed to get from API
  const initialNewsCount = 17;
  const [newsCount, setNewsCount] = useState(initialNewsCount);

  // When users move to different pages, we need to reset number of News on display
  const resetNewsCount = useCallback(() => {
    setNewsCount(initialNewsCount);
  }, [category]);

  useEffect(() => {
    resetNewsCount();
  }, [resetNewsCount]);

  // Define url for fetching categorized news from API
  const url = `https://hacker-news.firebaseio.com/v0/${fixedCategory}stories.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"&filter=!(null)`;

  // Declare categoryNewsQuery for fetching NewsData from API
  const categoryNewsQuery = useQuery(
    ["categoryNews", newsCount, category],
    () => getNewsData(url),
    {
      keepPreviousData: true,
      cacheTime: 10 * 60 * 1000,
      placeholderData: fakeNewsData,
      staleTime: 600000,
    }
  );

  // Split NewsData so the first one will be used for Headline component and the others will be used in NewsList component
  const splitNewsData = categoryNewsQuery.data?.slice(
    1,
    categoryNewsQuery?.data.length
  );

  // Memorize NewsList component by useMemo hook
  const memorizedNewsList = useMemo(() => {
    return (
      <NewsList
        newsData={splitNewsData}
        customStyle="categorized"
        maxWidth="maxWidth290"
      />
    );
  }, [category, splitNewsData]);

  // Memorize Headline component by useMemo hook
  const memorizedHeadline = useMemo(() => {
    return (
      <Headline
        headlineNews={categoryNewsQuery.data && categoryNewsQuery?.data[0]}
      />
    );
  }, [category, categoryNewsQuery.data]);

  // update newsCount to load more NewsData from API
  function handleClick() {
    setNewsCount((prevState) => prevState + (initialNewsCount - 1));
  }

  // Check the status if data is being fetched or not
  const isFetching = useIsFetching();

  return (
    <>
      {isFetching !== 0 && <Loader />}
      <div className={styles.categoryNews}>
        <h1 className={styles.categoryNews_title}>{category} HN</h1>
      </div>
      {memorizedHeadline}
      <div className={styles.categoryNews_newsListSection}>
        <div className={styles.categoryNews_newsList}>
          {isFetching === 0 && memorizedNewsList}
        </div>
        <LoadMoreNewsButton
          label={category + " " + "HN"}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
