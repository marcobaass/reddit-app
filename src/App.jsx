import './App.css'
import Header from './components/Header';
import PostList from './articles/PostList';
import SearchBar from './components/SearchBar';
import SubredditsList from './components/SubredditsList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from './articles/PostSlice';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <>
      <Header />
      <SearchBar />
      <PostList />
      <SubredditsList />
    </>
  )
}

export default App
