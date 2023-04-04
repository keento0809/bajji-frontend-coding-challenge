import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import NewsList from "../../components/list/NewsList";
import News from "../../components/news/News";
import useFetchNews from "../../hooks/useFetchNews";
import styles from "./styles.module.scss";

interface Props {
  newsStory: string;
  newsType: string;
}

export default function CategorizedNewsBlock({ newsStory, newsType }: Props) {
  // Define url for fetching categorized news from API
  const url = `https://hacker-news.firebaseio.com/v0/${newsStory}.json?print=pretty&limitToFirst=4&orderBy="$key"`;

  // Declare useFetchNews custom hook with url above
  const { news, fetchNews } = useFetchNews(url);

  return (
    <div className={styles.categorizedNewsBlock}>
      <section className={styles.categorizedNewsBlock_title}>
        <h1>{newsType} HN</h1>
      </section>
      <section>
        <NewsList
          newsData={news && news}
          isCategoryNews={true}
          maxWidth="290px"
        />
      </section>
      <LoadMoreNewsButton />
    </div>
  );
}
