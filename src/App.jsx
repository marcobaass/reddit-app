import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import SubredditsList from "./components/subredditList/SubredditList";
import PostList from "./components/postList/PostList";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid m-0 p-0 row">
        <SearchBar />
        <SubredditsList />
      </div>
      <PostList />
    </>
  );
}

export default App;
