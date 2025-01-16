import "./App.css";
import Header from "./components/Header";
import PostList from "./articles/PostList";
import SearchBar from "./components/SearchBar";
import SubredditsList from "./components/SubredditsList";

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
