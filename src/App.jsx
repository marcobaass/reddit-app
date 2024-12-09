import './App.css'
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import SearchBar from './components/SearchBar';
import SubredditsList from './components/SubredditsList';

function App() {

  return (
    <>
      <Header />
      <SearchBar />
      <ArticleList />
      <SubredditsList />
    </>
  )
}

export default App
