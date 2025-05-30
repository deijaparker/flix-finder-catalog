/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// scripts.js
// Flix Finder Catalog - Handles movie data and displays it on the site
// This file contains the JavaScript code for my movie catalog website.
// It uses data structures such as arrays and objects to store movies and supports
// filtering, searching, sorting, and managing a list of favorite movies.

// Movie data array containing objects with movie information
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    rating: 9.3,
    genre: "Drama",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    rating: 9.2,
    genre: "Crime",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    rating: 9.0,
    genre: "Action",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    rating: 8.9,
    genre: "Crime",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    rating: 8.8,
    genre: "Sci-Fi",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    overview:
      "A thief who steals corporate secrets through dream-sharing tech is given the task of planting an idea into the mind of a CEO.",
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    director: "Lana and Lilly Wachowski",
    rating: 8.7,
    genre: "Sci-Fi",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    overview:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 7,
    title: "Parasite",
    year: 2019,
    director: "Bong Joon Ho",
    rating: 8.6,
    genre: "Drama",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
    overview:
      "Greed and class discrimination threaten the newly formed relationship between the wealthy Park family and the destitute Kim clan.",
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    rating: 8.6,
    genre: "Sci-Fi",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    rating: 8.8,
    genre: "Fantasy",
    imageURL:
      "https://musicart.xboxlive.com/7/e88d5100-0000-0000-0000-000000000002/504/image.jpg",
    overview:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth.",
  },
  {
    id: 10,
    title: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    rating: 8.6,
    genre: "Animation",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
    overview:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
  },
  {
    id: 11,
    title: "The Social Network",
    year: 2010,
    director: "David Fincher",
    rating: 7.8,
    genre: "Biography",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
    overview:
      "Mark Zuckerberg creates Facebook and gets sued by the twins who claim he stole their idea, and by the co-founder who was squeezed out.",
  },
  {
    id: 12,
    title: "Get Out",
    year: 2017,
    director: "Jordan Peele",
    rating: 7.7,
    genre: "Horror",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
    overview:
      "A young African-American visits his white girlfriend's parents for the weekend where his uneasiness escalates into horror.",
  },
];

// Clone of the full movie list for filtering/sorting
let currentMovies = [...movies];

// Array to store favorite movies
let favoriteMovies = [];

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  populateGenreFilter();
  showCards();
});

// Populate the genre dropdown with unique genres from the movies array
function populateGenreFilter() {
  const genreFilter = document.getElementById("genre-filter");
  const genres = new Set();

  // Get all unique genres from the movies array
  movies.forEach((movie) => {
    genres.add(movie.genre);
  });

  // Add each genre as an option in the dropdown
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

// Filter movies by selected genre
function filterByGenre() {
  const selectedGenre = document.getElementById("genre-filter").value;

  if (selectedGenre === "all") {
    currentMovies = [...movies];
  } else {
    currentMovies = movies.filter((movie) => movie.genre === selectedGenre);
  }

  showCards();
}

// Search movies by title
function searchMovies() {
  const searchTerm = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();

  if (searchTerm === "") {
    currentMovies = [...movies];
  } else {
    currentMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );
  }

  showCards();
}

// Sort movies based on the selected sort option
function sortMovies() {
  const sortOption = document.getElementById("sort-select").value;

  switch (sortOption) {
    case "title-asc":
      currentMovies.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      currentMovies.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "year-asc":
      currentMovies.sort((a, b) => a.year - b.year);
      break;
    case "year-desc":
      currentMovies.sort((a, b) => b.year - a.year);
      break;
    case "rating-desc":
      currentMovies.sort((a, b) => b.rating - a.rating);
      break;
    case "rating-asc":
      currentMovies.sort((a, b) => a.rating - b.rating);
      break;
    default:
      // Default sort by title ascending
      currentMovies.sort((a, b) => a.title.localeCompare(b.title));
  }

  showCards();
}

// Display movie cards on the page
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // If no movies match the current filters, show a message
  if (currentMovies.length === 0) {
    const noResultsMsg = document.createElement("p");
    noResultsMsg.textContent = "No movies found matching your criteria.";
    noResultsMsg.style.fontSize = "1.5rem";
    noResultsMsg.style.color = "#ffcc00";
    noResultsMsg.style.margin = "30px";
    cardContainer.appendChild(noResultsMsg);
    return;
  }

  // Create a card for each movie in the current collection
  for (let i = 0; i < currentMovies.length; i++) {
    const movie = currentMovies[i];
    const nextCard = templateCard.cloneNode(true);

    editCardContent(nextCard, movie);

    // Add a favorite button/indicator
    const cardContent = nextCard.querySelector(".card-content");
    cardContent.style.position = "relative";

    const favoriteBtn = document.createElement("div");
    favoriteBtn.className = "favorite-badge";
    favoriteBtn.innerHTML = "♥";
    favoriteBtn.style.color = favoriteMovies.some(
      (favMovie) => favMovie.id === movie.id
    )
      ? "#ff0000"
      : "#222";
    favoriteBtn.onclick = function (event) {
      event.stopPropagation();
      toggleFavorite(movie);
      favoriteBtn.style.color = favoriteMovies.some(
        (favMovie) => favMovie.id === movie.id
      )
        ? "#ff0000"
        : "#222";
    };

    cardContent.appendChild(favoriteBtn);
    cardContainer.appendChild(nextCard);
  }
}

// Edit the content of a card with movie information
function editCardContent(card, movie) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = movie.title;

  const cardImage = card.querySelector("img");
  cardImage.src = movie.imageURL;
  cardImage.alt = movie.title + " Poster";

  const movieYear = card.querySelector(".movie-year");
  movieYear.textContent = "Year: " + movie.year;

  const movieRating = card.querySelector(".movie-rating");
  movieRating.textContent = "Rating: " + movie.rating;

  const movieGenre = card.querySelector(".movie-genre");
  movieGenre.textContent = "Genre: " + movie.genre;

  const movieDirector = card.querySelector(".movie-director");
  movieDirector.textContent = "Director: " + movie.director;

  const movieOverview = card.querySelector(".movie-overview");
  movieOverview.textContent = movie.overview;
}

// Display a random movie
function getRandomMovie() {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];

  // Set current movies to just the random movie
  currentMovies = [randomMovie];
  showCards();

  // Show a message
  alert(`Random Movie Selected: ${randomMovie.title}`);
}

// Toggle a movie as favorite
function toggleFavorite(movie) {
  const existingIndex = favoriteMovies.findIndex(
    (favMovie) => favMovie.id === movie.id
  );

  if (existingIndex !== -1) {
    // If movie is already a favorite, remove it
    favoriteMovies.splice(existingIndex, 1);
  } else {
    // Otherwise, add it to favorites
    favoriteMovies.push(movie);
  }

  // If showing favorites, refresh the display
  if (document.getElementById("genre-filter").value === "favorites") {
    showFavorites();
  }
}

// Show only favorite movies
function showFavorites() {
  if (favoriteMovies.length === 0) {
    alert("You haven't added any favorites yet!");
    return;
  }

  currentMovies = [...favoriteMovies];
  showCards();

  // Update the select element to reflect that we're showing favorites
  document.getElementById("genre-filter").value = "all";
}
