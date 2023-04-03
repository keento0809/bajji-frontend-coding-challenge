import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export default function ContentWrapper({ children }: Props) {
  return <div className={styles.contentWrapper}>{children}</div>;
}
