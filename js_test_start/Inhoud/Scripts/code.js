const setup = () => {
    tekstMaken();
}
const tekstMaken= () =>{
    let tekst= document.getElementById("note").value;
    let keuzelijst= document.getElementById("keuzelijst")
    let i=0;
    let stoppen=false;

    while (stoppen===false && i<keuzelijst.length){
        if(keuzelijst[i].selected){
            tekst.innerHTML= "Hierboven, een kip " + keuzelijst[i].value;
            stoppen=true;
        }
        i++;
    }

}

window.addEventListener("load", setup);