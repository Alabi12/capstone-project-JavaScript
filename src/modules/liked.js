import getLikes from './getLikes.js';

const liked = async (movieId) => {
  const mBody = JSON.parse(`{"item_id": ${movieId}}`);
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/likes/',
    {
      method: 'POST',
      body: JSON.stringify(mBody),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  await response; // extract JSON from the http response
  // do something with myJson
  getLikes();
};

export default liked;
