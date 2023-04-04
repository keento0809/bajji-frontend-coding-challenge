import { useState } from "react";
import { navMenuContent } from "../../constants/navbar";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { NavMenus } from "../../types/navbar";

export default function Navbar() {
  //TODO:Add a logic to change styles of the selected nav menu
  const fixedPathName = location.pathname.slice(1, location.pathname.length);
  console.log(fixedPathName);
  // React state managing the current selected nav menu (Default value is "Top")
  const [activeNavMenu, setActiveNavMenu] = useState<NavMenus>("Top");

  const navigate = useNavigate();

  // Define click event to jump to other pages
  const handleChangeNewsCategory = (content: NavMenus) => {
    const navigation = content === "Top" ? "/" : content;
    navigate(navigation);
    setActiveNavMenu(content);
  };

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
            onClick={() => handleChangeNewsCategory(content)}
          >
            {content}
          </span>
        );
      })}
    </nav>
  );
}
