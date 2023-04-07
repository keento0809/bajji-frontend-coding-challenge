import styles from "./styles.module.scss";
import {
  footerContentsArrayLeft,
  footerContentsArrayRight,
  copyRight,
} from "../../constants/footer";
import ContentWrapper from "../wrapper/ContentWrapper";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContentWrapper>
        <div className={styles.footer_container}>
          <section className={styles.footer_contentsSection}>
            <div className={styles.footer_contents}>
              {/* TODO:create a helper function mapping contents */}
              {footerContentsArrayLeft.map((content) => {
                return <span key={content}>{content}</span>;
              })}
            </div>
            <div className={styles.footer_contents}>
              {footerContentsArrayRight.map((content) => {
                return <span key={content}>{content}</span>;
              })}
            </div>
          </section>
          <section className={styles.footer_copyright}>
            <p>{copyRight}</p>
          </section>
        </div>
      </ContentWrapper>
    </footer>
  );
}
