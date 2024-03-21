const setup = () => {
    let button= document.getElementById("button");
    button.addEventListener("click", maakPElementje)
}
const maakPElementje=()=>{
    let divElement= document.querySelector('div');
    let pElement= document.createElement('p');
    let tekstInElement= document.createTextNode("Dit is een p element die appended is tot een div");
    pElement.appendChild(tekstInElement);
    divElement.appendChild(pElement);
}
window.addEventListener("load", setup); 