import "./App.css";
import Header from "./components/header/Header";
import PostList from "./features/articles/PostList";
import SearchBar from "./components/searchBar/SearchBar";
import SubredditsList from "./components/subredditList/SubredditList";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <PostList />
      <SubredditsList />
    </>
  );
}

export default App;
