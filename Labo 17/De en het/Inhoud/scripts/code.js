const setup = () => {
    let button= document.getElementById("knop");
    button.addEventListener("click", veranderDeInHet);
}

const veranderDeInHet= () =>{
    let tekst= document.getElementById("tekst").value.toLowerCase();
    let nieuweTekst="";
    for (let i=0; i<tekst.length; i++){
        if (tekst.substring(i, i++).localeCompare("de")){
            tekst.replace(tekst.substring(i, i+2), "het");
        }
        else{
            nieuweTekst+= tekst[i];
        }
    }
    console.log(nieuweTekst);
}
window.addEventListener("load", setup); 