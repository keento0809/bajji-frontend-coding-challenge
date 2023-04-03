import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export default function NewsContentWrapper({ children }: Props) {
  return <div className={styles.newsContentWrapper}>{children}</div>;
}
