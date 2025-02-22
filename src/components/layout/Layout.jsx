import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SubredditsList from "../subredditList/SubredditList";
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
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
