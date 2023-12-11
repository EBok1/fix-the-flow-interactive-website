const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
menuButton = body.querySelector("button");

// om het menu zichtbaar en niet zichtbaar te krijgen
menuButton.addEventListener("click" , () =>{
    sidebar.classList.toggle("click");
})


modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

const genres = document.querySelectorAll('.genre')
const genreButtons = document.querySelectorAll('.genre-button')

genreButtons.forEach((genreButton) => {
    genreButton.addEventListener('click', filterGenres)
})

function filterGenres (event) {
    genres.forEach((genre) => {
        genre.classList.add('hide')
    })
    const genre = document.querySelector('.genre.' + event.target.id)
    console.log(genre)
    genre.classList.remove('hide') //zo hide je alle sections 
}

// inline geschreven, hiermee hide je alle genres behalve 1 
document.querySelector('.genre-all').addEventListener('click', () => {
    genres.forEach((genre) => {
        genre.classList.remove('hide') 
    })
})


// like button op detail pagina
const likeButton = document.querySelector('#hartje');
function likeBoek() {
    likeButton.classList.toggle('like'); 
}
likeButton.addEventListener('click', likeBoek); 



// const filterRoman = document.querySelector('#romanbook');
// function zoekRoman(){
//     filterRoman.classList.toggle('search')
// }
// filterRoman.addEventListener('click', zoekRoman);


