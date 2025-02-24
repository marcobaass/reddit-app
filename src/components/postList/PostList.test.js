import { render, screen } from "../../utils/testUtils"; // Import custom render
import PostList from "./PostList";

describe("Post List", () => {
  // TODO write post list tests
  it("have loading page", async () => {
    const preloadedState = {
      // comments: {
      //   commentsByPostId: {},
      // },
      posts: {
        posts: [],
        isLoading: true,
        errMsg: "",
      },
      // search: {
      //   query: "",
      //   results: [],
      //   status: "idle",
      // },
      // subreddits: {
      //   subreddits: [],
      //   status: "idle",
      //   error: "",
      // },
    };
    render(<PostList />, { preloadedState });
    // screen.debug;
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it("have error message displayed in the page", async () => {
    const preloadedState = {
      posts: {
        posts: [],
        isLoading: false,
        errMsg: "Error message to test",
      },
    };
    render(<PostList />, { preloadedState });
    // screen.debug;
    expect(screen.getByText(/Error:/)).toBeInTheDocument();
  });
});
