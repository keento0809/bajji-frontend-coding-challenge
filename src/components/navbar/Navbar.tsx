import { navMenuContent } from "../../constants/navbar";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {navMenuContent.map((content) => {
        return (
          <span key={content} className={styles.navbar_menu}>
            {content}
          </span>
        );
      })}
    </nav>
  );
}
