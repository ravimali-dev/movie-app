import { displayMovies } from "./ui.js";
import { getTrending, searchMovie, getTopRated, getUpcoming, getMovieDetails } from "./api.js";

getTrending().then((data)=> (displayMovies(data.results)))

let searchInput = document.getElementById("movie_search")
let searchBtn = document.getElementById("search")

searchBtn.addEventListener("click",(e) => {
    let movieName = searchInput.value
    searchMovie(movieName).then((data) => (displayMovies(data.results)))
})


let trendingBtn = document.getElementById("trending")
let topRatedBtn = document.getElementById("top-rated")
let upcomingBtn = document.getElementById("upcoming")


trendingBtn.addEventListener("click", function() {
    getTrending().then((data)=> (displayMovies(data.results)))
})

topRatedBtn.addEventListener("click", function() {
    getTopRated().then((data)=> (displayMovies(data.results)))
})

upcomingBtn.addEventListener("click", function() {
    getUpcoming().then((data)=> (displayMovies(data.results)))
})

let moviesContainer = document.getElementById("movies-container")

moviesContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("fav-btn")) {
    let card = e.target.closest(".movie-card")
    let movieId = card.dataset.id
    getMovieDetails(movieId).then(data => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || []
        favorites.push(data)
        localStorage.setItem("favorites", JSON.stringify(favorites))
        alert("Added to favorites!")
    })
} 
    else{
        let movieId = e.target.closest(".movie-card").dataset.id
    window.location.href = `details.html?id=${movieId}`
    }
    
})