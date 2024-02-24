const setup = () => {
    let knop= document.getElementById("knop")
    knop.addEventListener("click", veranderen)
}
veranderen = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup); 