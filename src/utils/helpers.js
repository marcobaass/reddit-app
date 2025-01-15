
// post
export const getImageUrl = (post) => {
  console.log("post_hint", post.post_hint);
  console.log("posturl ", post.url);
  if (post.post_hint === "image") {
    return post.url;
  } else if (
    (post.post_hint === "link" && post.url.includes("imgur.com")) ||
    post.url.includes("i.redd.it")
  ) {
    // Check if the link post points to an image hosting site
    return post.url;
  } else {
    // Handle other post types or extract images from selftext (more complex)
    return null;
  }
};


export const getDescription = (post) => {
  let description;

  if (post.post_hint === "self") {
    description = post.selftext;
  } else if (post.post_hint === "link") {
    description = post.title;
  } else {
    // Handle other post types or extract from selftext_html if needed
    description = "";
  }
  return description;
};
