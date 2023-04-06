import useFetchNews from "../hooks/useFetchNews";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Headline from "../components/headline/Headline";
import styles from "./styles.module.scss";
import NewsList from "../components/list/NewsList";
import LoadMoreNewsButton from "../components/button/LoadMoreNewsButton";
import { useQuery } from "react-query";
import { getNewsData } from "../helpers/getNewsData";
import { NewsData } from "../types/news";
import { fakeNewsData } from "../constants/news";

interface Props {
  category: string;
}

export default function Category({ category }: Props) {
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
  const url = `https://hacker-news.firebaseio.com/v0/${fixedCategory}stories.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"`;

  // Declare categoryNewsQuery for fetching NewsData from API
  const categoryNewsQuery = useQuery(
    ["categoryNews", newsCount, category],
    () => getNewsData(url),
    {
      keepPreviousData: true,
      cacheTime: 10 * 60 * 1000,
      placeholderData: fakeNewsData,
      staleTime: 60000,
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
  // Check current pathname to identify if users jump to another category news view page or not
  const location = useLocation();
  const pathname = location.pathname;

  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + 16);
  };

  // Every time users move to another category news view page, corresponded news data should be fetched from API
  // useEffect(() => {
  //   fetchNews(url, "otherNews");
  // }, [pathname, newsCount]);

  console.log("rendering-categoryNews", categoryNewsQuery.isLoading);

  return (
    <>
      <div className={styles.categoryNews}>
        <h1 className={styles.categoryNews_title}>{category} HN</h1>
      </div>
      <Headline
        headlineNews={categoryNewsQuery.data && categoryNewsQuery?.data[0]}
      />
      <div className={styles.categoryNews_newsList}>
        {/* <NewsList
          newsData={memorizedSplitNewsData}
          customStyle="categorized"
          maxWidth="maxWidth290"
        /> */}
        {memorizedNewsList}
        <LoadMoreNewsButton
          label={category + " " + "HN"}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
