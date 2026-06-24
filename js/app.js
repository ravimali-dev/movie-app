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

