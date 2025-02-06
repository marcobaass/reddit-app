import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostsPage";
import SubredditsPage from "./pages/SubredditsPage";
import FullArticlePage from "./pages/FullArticlePage";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/subreddits" element={<SubredditsPage />} />
        <Route path="/post/:postId" element={<FullArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
