const loadApi = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const myJson = await response.json(); // extract JSON from the http response
  return myJson;
};
export default loadApi;
