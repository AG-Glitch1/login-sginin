let input = document.querySelector(".login__input")

if(localStorage.length > 0){
    input.value = localStorage.getItem("input")
}

input.onkeyup = function(){
    localStorage.setItem("input", input.value)
}
