const setup = () => {
    let button= document.getElementById("tel");
    button.addEventListener("click", vindAn)
}
const vindAn = ()=>{
    let tekst= document.getElementById("tekst").textContent.toLowerCase();
    let i=0;
    let aantalVoorkomens;
    while (i= tekst.indexOf("an", i)!==-1){
        aantalVoorkomens++;
        i+= 2;
    }
    console.log(aantalVoorkomens);
}
window.addEventListener("load", setup); 