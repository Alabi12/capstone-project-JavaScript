import './css/style.css';
import loadApi from './modules/loadApi.js';
import postComment from './modules/postComment.js';
import getComments from './modules/comments.js';
import getLikes from './modules/getLikes.js';
import liked from './modules/liked.js';
import checkForLikes from './modules/checkForLikes.js';
import filmCounter from './modules/filmCounter.js';

// Likes
const getLikesFirst = new Promise((resolve) => {
  getLikes();
  setTimeout(() => {
    resolve('done');
  }, 300);
});

getLikesFirst.then(() => {
  new Promise((resolve) => {
    loadApi();
    setTimeout(() => {
      resolve('done');
    }, 300);
  }).then(() => {
    postComment();
  });
});

// Fetch Data From API

const popup = document.querySelector('.popup');

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
        <h2 id="movie-title">${movie.show.name} <button id="${movie.show.id}" class="like-icon"><i id="${movie.show.id}" class="fa-regular fa-heart"></i></br><p id="${movie.show.id}" class="like-p">${checkForLikes(movie.show.id)}</p></button></h2>
        <p id="movie-description"></p>
        <button id="${movie.show.id}" class="movie-button">Comment</button>
      </div>
    </div>`;

    const likeAdd = (container) => {
      const idParse = `${movie.show.id}`;
      container.addEventListener('click', (event) => {
        if (event.target.classList.contains('fa-regular') && event.target.id === idParse) {
          liked(movie.show.id);
          const icon = event.target;
          icon.classList.remove('fa-regular');
          icon.classList.add('fa-solid');
        }
      });
    };

    likeAdd(movieTitle);

    const linksUl = document.querySelector('.navigation');
    const filmCounterLoad = () => {
      linksUl.innerHTML = `            <li class="active">
          <a href="#">Home(${filmCounter(movieTitle)})<span id="totalMovies"></span></a>
        </li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">My List</a></li>`;
    };
    filmCounterLoad();

    const movieButtons = document.querySelectorAll('.movie-button');
    movieButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        getMovieDetails(e.target.id).then((data) => {
          const popupContainer = document.querySelector('.popup-container');
          const movieName = data.name;
          const movieDescription = data.summary;
          let imageSrc = '';
          if (data.image) {
            imageSrc = data.image.medium;
          }

          const movieId = data.id;
          popup.classList.remove('hide');

          const firstPart = `
  <div class="popup-movie-banner">
        <img
          class="popup-movie-banner-img"
          src="${imageSrc}"
          alt="${movieName} Banner"
        />
      </div>
      <div class="popup-details">
        <div class="popup-title">
          <h2>${movieName}</h2>
        </div>
        <div class="popup-description">
          ${movieDescription}
        </div>

        <div class="popup-comments">
          <h2 class="popup-comments-title">
            Comments<span id="commentConter">(<span id="totalComment"></span>)</span>
          </h2>
          <div class="popup-comments-container">
            <ul class="comment-description">
            `;
          let commentList = '';
          getComments(movieId).then((data) => {
            const commentCount = document.querySelector('#totalComment');
            commentCount.innerHTML = data.length;

            data.forEach((comment) => {
              commentList += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
            });
            const commentListContainer = document.querySelector(
              '.comment-description',
            );
            commentListContainer.innerHTML = commentList;
          });

          const secondPart = `
            </ul>
          </div>
        </div>

        <div class="add-comment-form">
          <h2 class="popup-comments-title">
            Add Comments<span id="addCOmment"></span>
          </h2>
          <form id="addCommentForm">
          <input type="text" placeholder="Your name..." name="name" />
          <input type="hidden" placeholder="Your name..." name="movieId" value="${movieId}" />
          <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="8"
              placeholder="Your comment..."
              name="comment"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>`;

          popupContainer.innerHTML = firstPart + commentList + secondPart;

          const closeBtn = document.querySelector('#popup-close');
          closeBtn.addEventListener('click', () => {
            popup.classList.add('hide');
          });

          const addCommentForm = document.querySelector('#addCommentForm');
          addCommentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const comment = e.target.comment.value;
            const movieId = e.target.movieId.value;
            // console.log(name, comment, movieId);
            postComment(movieId, name, comment);
            const d = new Date();
            const commentDescription = document.querySelector(
              '.comment-description',
            );
            const commentConter = document.querySelector('#totalComment');

            const ye = new Intl.DateTimeFormat('en', {
              year: 'numeric',
            }).format(d);
            const mo = new Intl.DateTimeFormat('en', {
              month: '2-digit',
            }).format(d);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
              d,
            );
            commentDescription.innerHTML += `<li>${ye}-${mo}-${da} ${name}: ${comment}</li>`;
            commentConter.innerHTML = Number(commentConter.innerHTML) + 1;
          });
        });
      });
    });
  });
});
const refreshPage = () => {
  const likeBtns = document.querySelectorAll('.like-p');
  likeBtns.forEach((btn) => {
    const count = checkForLikes(parseInt(btn.id, 10));
    btn.innerHTML = count;
  });
};

setInterval(refreshPage, 100);
apiData();
