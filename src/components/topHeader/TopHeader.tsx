import { topHeaderTexts } from "../../constants/topHeader";
import { BsFillPersonFill } from "react-icons/bs";
import { TbClockHour3 } from "react-icons/tb";
import styles from "./styles.module.scss";
import VerticalDivider from "../divider/VerticalDivider";

export default function TopHeader() {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader_container}>
        <section className={styles.topHeader_content}>
          <p className={styles.topHeader_text}>{topHeaderTexts[0]}</p>
          <VerticalDivider />
        </section>
        <section className={styles.topHeader_content}>
          <span className={styles.topHeader_icon}>
            <BsFillPersonFill />
          </span>
          <p className={styles.topHeader_text}>{topHeaderTexts[1]}</p>
          <VerticalDivider />
        </section>
        <section className={styles.topHeader_content}>
          <span className={styles.topHeader_icon}>
            <TbClockHour3 />
          </span>
          <p className={styles.topHeader_text}>{topHeaderTexts[2]}</p>
        </section>
      </div>
    </div>
  );
}
