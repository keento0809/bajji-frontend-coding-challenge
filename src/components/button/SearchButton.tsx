import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles.module.scss";

export default function SearchButton() {
  return (
    <button className={styles.searchButton}>
      <AiOutlineSearch />
    </button>
  );
}
