import "./App.css";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostsPage";
import SubredditsPage from "./pages/SubredditsPage";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/subreddits" element={<SubredditsPage />} />
      </Routes>
    </>
  );
}

export default App;
