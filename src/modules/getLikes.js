const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/likes/',
  );
  const myJson = await response.json(); // extract JSON from the http response
  localStorage.setItem('likes', JSON.stringify(myJson));
};

export default getLikes;
