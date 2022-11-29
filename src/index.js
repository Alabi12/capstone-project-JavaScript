import './css/style.css';
import loadApi from './modules/loadApi.js';
// Fetch Data From API
const getMovieDetails = async (movieId) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
  const myJson = await response.json(); // extract JSON from the http response
  return myJson;
};

const movieTitle = document.querySelector('#main-card');
const apiData = loadApi().then((data) => {
  data.forEach((movie) => {
    // Get Movie Name
    let imageUrl = 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg';
    // Get Movie Image
    if (movie.show.image) {
      imageUrl = movie.show.image.medium;
    }
    // End Getting Movie Image    // movieTitle.insertAdjacentHTML("beforeend", movie.show.name);
    movieTitle.innerHTML += `
    <div id="movie-card">
      <div id="movie-img"><img src="${imageUrl}" alt="${movie.show.name}"> </div>
      <div id="movie-info">
        <h2 id="movie-title">${movie.show.name}</h2>
        <p id="movie-description"></p>
        <button id="${movie.show.id}" class="movie-button">Comment</button>
        <button id="${movie.show.id}" class="movie-button">Reservation</button>
      </div>
    </div>`;

    const movieButtons = document.querySelectorAll('.movie-button');
    movieButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        getMovieDetails(e.target.id).then((data) => {
          const movieDescription = document.querySelector('#movie-description');
          movieDescription.innerHTML = data.summary;
        });
      });
    });
  });
});

apiData();
