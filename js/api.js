async function getTrending() {
    try{
        let response = await fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
        let data = await response.json();
        console.log(data.results[0])
        return data;
    }catch(errer){
        console.error(errer)
    }
    
}

async function searchMovie(movieName) {
    try{
            let response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieName}`)
            let movieNameData = await response.json();
            return movieNameData
    }catch(errer){
        console.error(errer)
    }
    
}

async function getTopRated() {
    try{
            let response = await fetch(`${BASE_URL}movie/top_rated?api_key=${API_KEY}`)
            let TopRatedMovieData = await response.json();
            return TopRatedMovieData
    }catch(errer){
        console.error(errer)
    }
    
}

async function getUpcoming() {
    try{
            let response = await fetch(`${BASE_URL}movie/upcoming?api_key=${API_KEY}`)
            let getUpMovieData = await response.json();
            return getUpMovieData;
    }catch(errer){
        console.error(errer)
    }
    
}

async function getMovieDetails(movie_id) {
    try{
            let response = await fetch(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`)
            let getMovieDetailData = await response.json();
            return getMovieDetailData;
    }catch(errer){
        console.error(errer)
    }
    
}

export {
    getTrending,
    searchMovie,
    getTopRated,
    getUpcoming,
    getMovieDetails
};


