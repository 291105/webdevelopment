const setup = () => {
    voegGemeentenToe();
}
const voegGemeentenToe= () => {
    const gemeenten = [];
    let stoppen = false;
    while (stoppen === false) {
        const invoer = prompt("Geef een gemeente die je wilt toevoegen ");
        if (invoer.toLowerCase().localeCompare("stop") === 0) {
            stoppen = true;
        } else {
            gemeenten.push(invoer.toLowerCase());
        }
    }
    gemeenten.sort();

    let lijst= document.getElementById("gemeenten");
    for (let i=0; i<gemeenten.length; i++){
        lijst.innerHTML+= '<option value=" ' + gemeenten[i] +' " > ' + gemeenten[i] + ' </option>';
    }
}
window.addEventListener("load", setup); 