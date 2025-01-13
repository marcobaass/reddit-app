import { baseUrl } from "../shared/baseUrl";
// To use api from localhost
const proxiUrl = `http://localhost:3001/`
const redditPath = 'api/reddit/'

const api = {

  fetchComments: async () => {

    try {
      const response = await fetch(`${proxiUrl}${baseUrl}comments`)
      if (!response.ok) {
        return Promise.reject('Unable to fetch, status: ' + response.status);
      }
      return await response.json();

    } catch (error) {
      console.log(error);
    }
  },
  fetchPopularPosts: async (limit = 10) => {
    try {
      const fetchUrl = `${proxiUrl}${redditPath}r/popular/.json?limit=${limit}`;
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data.children.map((post) => post.data);
    } catch (error) {
      console.error('Error fetching popular posts:', error);
      throw error;
    }
  }

}

export default api;
