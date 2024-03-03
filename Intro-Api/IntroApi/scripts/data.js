'use strict';

function fetchStarWars3() {
    return fetch('https://api.themoviedb.org/3/movie/1895-star-wars-episode-iii-revenge-of-the-sith?api_key=c400e562c2988d33142a033388c181a3&language=fr-FR')
        .then((response) => response.json())
} 

async function displayStarWars3(){
    const data = await  fetchStarWars3() 
    console.log(data)
    document.getElementById("star-wars-3").innerHTML=` 
        <h1>${data.title}</h1>
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}"></img>`;
}

displayStarWars3();