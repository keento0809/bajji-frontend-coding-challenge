import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import NewsList from "../../components/list/NewsList";
import styles from "./styles.module.scss";
import { useState, useMemo } from "react";
import { useQuery } from "react-query";
import { getNewsData } from "../../helpers/getNewsData";
import React from "react";

interface Props {
  newsStory: string;
  newsType: string;
  initialNumOfNews: number;
}

export default function CategorizedNewsBlock({
  newsStory,
  newsType,
  initialNumOfNews,
}: Props) {
  // React state for managing the number of news that are needed to get from API
  const [newsCount, setNewsCount] = useState(initialNumOfNews);

  // Define url for fetching categorized news from API
  const url = `https://hacker-news.firebaseio.com/v0/${newsStory}.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"`;

  // test reactQuery
  const categoryNewsQuery = useQuery(
    ["categoryNews", newsCount, newsType],
    () => getNewsData(url),
    {
      keepPreviousData: true,
      cacheTime: 10 * 60 * 1000,
      staleTime: 600000,
    }
  );

  console.log("render-categorizedNewsBlock");

  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + initialNumOfNews);
  };

  // Memorize NewsList component by useMemo hook
  const memorizedNewsList = useMemo(() => {
    return (
      <NewsList
        newsData={categoryNewsQuery?.data}
        customStyle="categorized"
        maxWidth="maxWidth290"
      />
    );
  }, [newsType, categoryNewsQuery?.data]);

  return (
    <>
      <div className={styles.categorizedNewsBlock}>
        <section className={styles.categorizedNewsBlock_title}>
          <h1>{newsType} HN</h1>
        </section>
        <section className={styles.categorizedNewsBlock_newsList}>
          {memorizedNewsList}
        </section>
        <LoadMoreNewsButton
          label={newsType + " " + "HN"}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
