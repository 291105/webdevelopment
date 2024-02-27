const setup = () => {
    const neemKlasseBelangrijk= document.getElementsByClassName("belangrijk")
    for(let i=0; i<neemKlasseBelangrijk.length; i++){
        neemKlasseBelangrijk[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup); 