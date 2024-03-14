const setup = () => {
    let button= document.getElementById("button")
    button.addEventListener("click", toonResultaat)
}

const toonResultaat= ()=>{
    let roker= document.getElementById("roker");
    if(roker.checked){
        console.log("Is roker")
    } else{
        console.log("Is geen roker");
    }

    let moedertaal= document.getElementsByName("moedertaal");
    let i=0;
    let stoppen=false;
    while (stoppen===false && i<moedertaal.length){
        if (moedertaal[i].checked){
            console.log("De moedertaal is: " + moedertaal[i].value);
            stoppen=true;
        }
        i++;
    }

    let buurland= document.getElementById("buurland");
    for (let i=0; i<buurland.length; i++){
        if (buurland[i].selected){
            console.log("Het favoriete buurland is: " + buurland[i].value);
        }
    }

    let bestelling= document.getElementById("bestelling");
    let zin= "De bestelling is "
    for (let i=0; i<bestelling.length; i++){
        if (bestelling[i].selected){
            zin+= " " + bestelling[i].value;
        }
    }
    console.log(zin.trim());
}

window.addEventListener("load", setup); 