const setup = () => {
   let button= document.getElementById("button");
   button.addEventListener("click", tweedeFunctie);
}
const plaatsSpaties=(inputText) =>{
    let tekstMetSpaties= " ";
    for (let i=0; i<inputText.length; i++){
        if(inputText.charAt!==" "){
            tekstMetSpaties+= inputText.charAt(i) + " ";
        }
    }
    return tekstMetSpaties;
}

const tweedeFunctie= () =>{
    let tekst= document.getElementById("text").value;
    console.log(plaatsSpaties(tekst));
}
window.addEventListener("load", setup); 