import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import NewsList from "../../components/list/NewsList";
import useFetchNews from "../../hooks/useFetchNews";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

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
  const { news, fetchNews } = useFetchNews(url, "otherNews");

  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + 4);
  };

  // When newsCount is updated, fetch more NewsData
  useEffect(() => {
    fetchNews(url, "otherNews");
  }, [newsCount]);

  return (
    <div className={styles.categorizedNewsBlock}>
      <section className={styles.categorizedNewsBlock_title}>
        <h1>{newsType} HN</h1>
      </section>
      <section>
        <NewsList
          newsData={news && news}
          customStyle="categorized"
          maxWidth="maxWidth290"
        />
      </section>
      <LoadMoreNewsButton label={newsType + " " + "HN"} onClick={handleClick} />
    </div>
  );
}
