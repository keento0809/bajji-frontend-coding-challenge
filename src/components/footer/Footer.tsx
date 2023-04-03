import styles from "./styles.module.scss";
import {
  footerContentsArrayLeft,
  footerContentsArrayRight,
  copyRight,
} from "../../constants/footer";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <section className={styles.footer_contents}>
          <div>
            {/* TODO:create a helper function mapping contents */}
            {footerContentsArrayLeft.map((content) => {
              return <span key={content}>{content}</span>;
            })}
          </div>
          <div>
            {footerContentsArrayRight.map((content) => {
              return <span key={content}>{content}</span>;
            })}
          </div>
        </section>
        <section className={styles.footer_copyright}>
          <p>{copyRight}</p>
        </section>
      </div>
    </footer>
  );
}
