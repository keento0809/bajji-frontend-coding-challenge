import LoadMoreNewsButton from "../../components/button/LoadMoreNewsButton";
import Headline from "../../components/headline/Headline";
import NewsList from "../../components/list/NewsList";
import LatestNewsBlock from "../block/LatestNewsBlock";
import styles from "./styles.module.scss";

export default function TopLatestNewsSection() {
  return (
    <div className={styles.topLatestNewsSection}>
      <Headline />
      <div className={styles.topLatestNewsSection_news}>
        <div>
          <NewsList />
          <LoadMoreNewsButton />
        </div>
        <div>
          <LatestNewsBlock />
        </div>
      </div>
    </div>
  );
}
