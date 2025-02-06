import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import SubredditsList from "./components/subredditList/SubredditList";
import PostList from "./components/postList/PostList";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
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
