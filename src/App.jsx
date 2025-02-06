import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import { Route, Routes } from "react-router-dom";
import FullArticlePage from "./pages/FullArticlePage";
import SubredditsList from "./components/subredditList/SubredditList";
import PostList from "./components/postList/PostList";

function App() {
  return (
    <>
      <Header />
      <Routes>        
        <Route path="/post/:postId" element={<FullArticlePage />} />
      </Routes>
      <div className="position-relative m-0 p-0 row">
        <SearchBar />
        <SubredditsList />
      </div>
      {/** //TODO Not sure if this will be needed to displayed post details - if not, it can be removed.  */}
      {/* <Routes>
        <Route path="/" element={<PostList />} />
      </Routes> */}
      <PostList />
    </>
  );
}

export default App;
