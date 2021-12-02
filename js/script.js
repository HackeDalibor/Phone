moment.locale('fr')
console.log(moment())

const button = document.querySelector(".button");

button.addEventListener("click", function(){
    button.classList.add("clicked");
    console.log("ok");
})