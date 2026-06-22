


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

