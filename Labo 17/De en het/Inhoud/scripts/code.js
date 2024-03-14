const setup = () => {
    let button= document.getElementById("knop");
    button.addEventListener("click", veranderDeInHet);
}

const veranderDeInHet= () =>{
    let tekst= document.getElementById("tekst").value.toLowerCase();
    let arrayTekst= tekst.split(" ");
    for (let i=0; i<arrayTekst.length; i++){
        if(arrayTekst[i].localeCompare("de")===0){
            arrayTekst[i]= "het";
        }
    }
    let vervangZin= arrayTekst.join(" ");
    console.log(vervangZin);
}
window.addEventListener("load", setup); 