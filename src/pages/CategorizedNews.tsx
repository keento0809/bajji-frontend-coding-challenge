import useFetchNews from "../hooks/useFetchNews";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Headline from "../components/headline/Headline";
import styles from "./styles.module.scss";
import NewsList from "../components/list/NewsList";
import LoadMoreNewsButton from "../components/button/LoadMoreNewsButton";

interface Props {
  category: string;
}

export default function Category({ category }: Props) {
  const fixedCategory = category === "Jobs" ? "job" : category.toLowerCase();

  const [newsCount, setNewsCount] = useState(17);

  // Define url for fetching categorized news from API
  const url = `https://hacker-news.firebaseio.com/v0/${fixedCategory}stories.json?print=pretty&limitToFirst=${newsCount}&orderBy="$key"`;

  // Declare useFetchNews custom hook with url above
  const { news, fetchNews } = useFetchNews(url, "otherNews");
  const splitNewsData = news.slice(1, news.length);

  // Check current pathname to identify if users jump to another category news view page or not
  const location = useLocation();
  const pathname = location.pathname;

  // update newsCount to load more NewsData from API
  const handleClick = () => {
    setNewsCount((prevState) => prevState + 16);
  };

  // Every time users move to another category news view page, corresponded news data should be fetched from API
  useEffect(() => {
    fetchNews(url, "otherNews");
  }, [pathname, newsCount]);

  return (
    <>
      <div className={styles.categoryNews}>
        <h1 className={styles.categoryNews_title}>{category} HN</h1>
      </div>
      <Headline headlineNews={news[0]} />
      <div className={styles.categoryNews_newsList}>
        <NewsList
          newsData={splitNewsData}
          customStyle="categorized"
          maxWidth="maxWidth290"
        />
        <LoadMoreNewsButton
          label={category + " " + "HN"}
          onClick={handleClick}
        />
      </div>
    </>
  );
}
