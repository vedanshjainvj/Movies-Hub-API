const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviebox = document.querySelector("#movie-box");
const getMovies = async (api) => {
            const response = await fetch(api);
            const data = await response.json();
            showMovies(data.results)
}


const showMovies = (data) => {
    moviebox.innerHTML = "";
    data.forEach( item => {
        
        const box = document.createElement("div")
        box.classList.add("box")
        box.innerHTML = `
        <img src="${IMGPATH + item.poster_path}" alt="">
    <div class="overlay">
        <div class="title">
            <h2>${item.original_title}</h2>
            <span>${item.vote_average}</span>
            <h3>Overview :</h3>
            <p>${item.overview}</p>
        </div>
    </div>`;
    moviebox.appendChild(box)        
    });
}

document.querySelector("#search").addEventListener("keyup", function(e) {
    if(e.target.value != "") {
        getMovies(SEARCHAPI + e.target.value)
    } else {
        getMovies(APIURL)
    }
})

getMovies(APIURL)

const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }