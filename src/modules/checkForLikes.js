const checkForLikes = (movieId) => {
  const likes = JSON.parse(localStorage.getItem("likes"));
  let like = 0;
  likes.forEach((element) => {
    if (element.item_id === movieId) {
      like = element.likes;
    }
  });
  return like;
};

export default checkForLikes;
