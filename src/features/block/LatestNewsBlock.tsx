import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import News from "../../components/news/News";
import styles from "./styles.module.scss";
import NewsList from "../../components/list/NewsList";
import useFetchNews from "../../hooks/useFetchNews";

export default function LatestNewsBlock() {
  // Define url for fetching categorized news from API
  const url = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&limitToFirst=4&orderBy="$key"`;

  // Declare useFetchNews custom hook with url above
  const { news, fetchNews } = useFetchNews(url);

  return (
    <div className={styles.latestNewsBlock}>
      <h3 className={styles.latestNewsBlock_title}>The Latest</h3>
      <div className={styles.latestNewsBlock_newsListContainer}>
        <NewsList
          newsData={news && news}
          customStyle="latest"
          maxWidth="320px"
        />
      </div>
      <LoadMoreNewsButton />
    </div>
  );
}
