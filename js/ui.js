
import {IMG_URL  } from "./config.js";

function displayMovies(movies) {
    let container = document.getElementById("movies-container")
   container.innerHTML = ""

    for(let movie of movies) {
        let card = document.createElement("div")
        card.className = "movie-card";
        card.dataset.id = movie.id 
        let title = document.createElement("h3")
        title.textContent = movie.title
        let image = document.createElement("img")
        image.setAttribute("src", `${IMG_URL}${movie.poster_path}`);
        let release_date = document.createElement("p")
        release_date.className = "release_date"
        release_date.textContent = movie.release_date
        let vote_average = document.createElement("p")
        vote_average.textContent = movie.vote_average
       

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(release_date);
        card.appendChild(vote_average)
        

let favBtn = document.createElement("button")
favBtn.className = "fav-btn"
favBtn.textContent = "❤️"
card.appendChild(favBtn)
container.appendChild(card)
    }
}

export {
    displayMovies
}