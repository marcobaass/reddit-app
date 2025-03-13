import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SubredditsList from "../subredditList/SubredditList";
import styles from './Layout.module.css'
const Layout = () => {
  return (
    <div id="check">
      <Header />
      <main className={styles.main}>
        <SubredditsList />
        <Outlet />
      </main>
      <footer>
        <p>My App Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
