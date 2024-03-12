const setup = () => {
    let button= document.getElementById("maakTrigram");
    button.addEventListener("click", maakTrigram);
}

const maakTrigram = () =>{
    let tekst= document.getElementById("trigramTekst").value;
    for (let i=0; i<tekst.length-2; i++) {
        console.log(tekst.slice(i, i + 3));
    }
}
window.addEventListener("load", setup); 