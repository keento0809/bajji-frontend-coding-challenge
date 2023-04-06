import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import NewsList from "../../components/list/NewsList";
import useFetchNews from "../../hooks/useFetchNews";
import styles from "./styles.module.scss";
import { useEffect, useState, useMemo } from "react";
import { useQuery } from "react-query";
import { NewsData } from "../../types/news";
import Loader from "../../components/loader/Loader";
import { getNewsData } from "../../helpers/getNewsData";

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
  const [newsCount, setNewsCount] = useState(initialNumOfNews);
  // Define url for fetching categorized news from API
  const url = `https://hacker-news.firebaseio.com/v0/${newsStory}.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"`;

  // Declare useFetchNews custom hook with url above
  // const { news, fetchNews } = useFetchNews(url, "otherNews");

  // test reactQuery
  const categoryNewsQuery = useQuery(
    ["categoryNews", newsCount],
    () => getNewsData(url),
    { keepPreviousData: true }
  );

  console.log(categoryNewsQuery?.data);

  // const memorizedSplitNewsData = useMemo(
  //   () => categoryNewsQuery?.data,
  //   [newsStory]
  // );

  // const memorizedNewsList = useMemo(() => {
  //   return (
  //     <NewsList
  //       newsData={memorizedSplitNewsData}
  //       customStyle="categorized"
  //       maxWidth="maxWidth320"
  //     />
  //   );
  // }, [newsType]);
  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + initialNumOfNews);
  };

  // When newsCount is updated, fetch more NewsData
  // useEffect(() => {
  //   fetchNews(url, "otherNews");
  // }, [newsCount]);

  return (
    <>
      {categoryNewsQuery.isLoading && <Loader />}
      <div className={styles.categorizedNewsBlock}>
        <section className={styles.categorizedNewsBlock_title}>
          <h1>{newsType} HN</h1>
        </section>
        <section>
          <NewsList
            newsData={categoryNewsQuery?.data}
            customStyle="categorized"
            maxWidth="maxWidth290"
          />
          {/* {memorizedNewsList} */}
        </section>
        <LoadMoreNewsButton
          label={newsType + " " + "HN"}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
