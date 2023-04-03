import News from "../news/News";
import styles from "./styles.module.scss";

// TODO:Replace this array to NewsData fetched from API later
const DUMMY_ARRAY = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
] as const;

export default function NewsList() {
  return (
    // TODO:Refactor the style for this div tag later
    <div style={{ maxWidth: "864px", paddingTop: "40px" }}>
      <div className={styles.newsList}>
        {DUMMY_ARRAY.map((news) => {
          return <News />;
        })}
      </div>
    </div>
  );
}
