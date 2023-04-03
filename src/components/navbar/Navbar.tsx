import { useState } from "react";
import { navMenuContent } from "../../constants/navbar";
import styles from "./styles.module.scss";

export default function Navbar() {
  //TODO:Add a logic to change styles of the selected nav menu
  // React state managing the current selected nav menu (Default value is "Top")
  const [activeNavMenu, setActiveNavMenu] = useState("Top");

  return (
    <nav className={styles.navbar}>
      {navMenuContent.map((content) => {
        return (
          <span
            key={content}
            className={
              content === activeNavMenu
                ? styles.navbar_menuActive
                : styles.navbar_menu
            }
          >
            {content}
          </span>
        );
      })}
    </nav>
  );
}
