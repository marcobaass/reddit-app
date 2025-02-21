import SearchBar from "../searchBar/SearchBar";
import styles from './Header.module.css';

function Header() {
  // return <NavBar />;
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.h1}>MyReddit</h1>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
    </div>
  )
}
export default Header;
