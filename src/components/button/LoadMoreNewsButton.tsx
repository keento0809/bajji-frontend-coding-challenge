import styles from "./styles.module.scss";

interface Props {
  label: string;
  onClick: () => void;
}

// TODO:Make this component reusable
export default function LoadMoreNewsButton({ label, onClick }: Props) {
  return (
    <div className={styles.loadMoreNewsButton}>
      <button className={styles.loadMoreNewsButton_text} onClick={onClick}>
        More {label} &gt;
      </button>
    </div>
  );
}
