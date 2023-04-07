import { useState } from "react";
import { navMenuContent } from "../../constants/navbar";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { NavMenus } from "../../types/navbar";
import { checkInitialLocation } from "../../helpers/checkInitialLocation";

export default function Navbar() {
  // Locate current location to apply stylings (color: #fff, background-color: #000) to corresponded selected nav menu
  const location = useLocation();

  // Get the correct pathname that does not contain "/"
  const fixedPathName = location.pathname.slice(1, location.pathname.length);

  // React state managing the current selected nav menu
  const [activeNavMenu, setActiveNavMenu] = useState<NavMenus>(
    // checkInitialLocation confirms current location and return current pathname.
    // So when the page is refreshed, the corresponded nav menu should apply stylings (color: #fff, background-color: #000)
    checkInitialLocation(fixedPathName)
  );

  // Define navigate for page transition
  const navigate = useNavigate();

  // Define click event to jump to other pages
  const handleChangeNewsCategory = (content: NavMenus) => {
    // When the selected nav menu is "Top", the pathname should be "/"
    const navigation = content === "Top" ? "/" : content;
    navigate(navigation);
    // update the current selected nav menu
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
