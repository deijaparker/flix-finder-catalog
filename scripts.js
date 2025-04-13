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
      "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings%2C_TFOTR_%282001%29.jpg",
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
