import SearchBar from "../searchBar/SearchBar";
import styles from "./Header.module.css";
import reddish from "../../assets/reddish.png";

import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.h1}>
        <Link
          to="/"
          className="link-underline link-underline-opacity-0 text-black "
        >
          reddish
        </Link>
      </h1>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <img src={reddish} alt="Reddish Logo" className={styles.reddish}/>
    </div>
  );
}
export default Header;
