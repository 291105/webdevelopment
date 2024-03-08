const setup = () => {
    let button= document.getElementById("indexOf");
    button.addEventListener("click", vindAnMetIndexOf)
    let button2= document.getElementById("lastIndexOf")
    button2.addEventListener("click", vindAnMetLastIndexOf)
}
const vindAnMetIndexOf = ()=>{
    let tekst= document.getElementById("tekst").textContent.toLowerCase();
    let i=0;
    let aantalVoorkomens=0;
    let stoppen= false;
    while(stoppen===false){
        if(tekst.indexOf("an", i)!==-1){
            i= tekst.indexOf("an", i)+ 1;
            aantalVoorkomens++;
        }else {
            stoppen= true;
        }
    }
    console.log("Aantal keer:" + aantalVoorkomens);
}

const vindAnMetLastIndexOf= () =>{
    let tekst= document.getElementById("tekst").textContent.toLowerCase();
    let i= tekst.length;
    let aantalVoorkomens=0;
    let stoppen= false;
    while(stoppen===false){
        if(tekst.lastIndexOf("an", i)!==-1){
                i= tekst.lastIndexOf("an", i) -1;
                aantalVoorkomens++;
        }else {
            stoppen= true;
        }
    }
    console.log("Aantal keer:" + aantalVoorkomens);
}
window.addEventListener("load", setup); 