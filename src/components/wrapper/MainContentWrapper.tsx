import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export default function MainContentWrapper({ children }: Props) {
  return <div className={styles.mainContentWrapper}>{children}</div>;
}
