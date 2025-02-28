import "./App.css";
import { Route, Routes } from "react-router-dom";
import FullArticlePage from "./pages/FullArticlePage";
import PostList from "./components/postList/PostList";
import Layout from "./components/layout/Layout";
import MainContent from "./components/mainContent/MainContent";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainContent />} />
        <Route path="/post/:postId" element={<FullArticlePage />} />
      </Route>
    </Routes>
  );
}

export default App;
