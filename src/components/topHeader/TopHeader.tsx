import { topHeaderTexts } from "../../constants/topHeader";
import { BsFillPersonFill } from "react-icons/bs";
import { TbClockHour3 } from "react-icons/tb";
import styles from "./styles.module.scss";

export default function TopHeader() {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader_container}>
        <section className={styles.topHeader_content}>
          <p>{topHeaderTexts[0]}</p>
        </section>
        <section className={styles.topHeader_content}>
          <span className={styles.topHeader_icon}>
            <BsFillPersonFill />
          </span>
          <p>{topHeaderTexts[1]}</p>
        </section>
        <section className={styles.topHeader_content}>
          <span className={styles.topHeader_icon}>
            <TbClockHour3 />
          </span>
          <p>{topHeaderTexts[2]}</p>
        </section>
      </div>
    </div>
  );
}
