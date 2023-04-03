import styles from "./styles.module.scss";

// TODO:Make this component reusable
export default function LoadMoreNewsButton() {
  return (
    <div className={styles.loadMoreNewsButton}>
      <button className={styles.loadMoreNewsButton_text}>
        More Latest HN &gt;
      </button>
    </div>
  );
}
