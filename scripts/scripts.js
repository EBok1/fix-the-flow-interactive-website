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


const likeButton = document.querySelector('#hartje');
function likeBoek() {
    likeButton.classList.toggle('like'); 
}
likeButton.addEventListener('click', likeBoek); 



const filterRoman = document.querySelector('#romanbook');
filterRoman.addEventListener('click', zoekRoman);
function zoekRoman(){
    filterRoman.classList.toggle('like')
}




// filter systeem 
// const filterThriller = document.querySelector('#thriller');

// function zoekThriller() {
//     filterThriller.classList.toggle('like'); 
// }

// filterThriller.addEventListener('click', zoekThriller); 