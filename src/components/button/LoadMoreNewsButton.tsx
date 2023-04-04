import styles from "./styles.module.scss";

interface Props {
  label: string;
}

// TODO:Make this component reusable
export default function LoadMoreNewsButton({ label }: Props) {
  return (
    <div className={styles.loadMoreNewsButton}>
      <button className={styles.loadMoreNewsButton_text}>
        More {label} &gt;
      </button>
    </div>
  );
}
