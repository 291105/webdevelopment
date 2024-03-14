const setup = () => {
    let button= document.getElementById("button");
    button.addEventListener("click", valideren)
}

const valideren= () =>{
    valideerVoornaam();
    valideerAchternaam();
}
    const valideerVoornaam= ()=> {
        let voornaam = document.getElementById("First-name");
        let voornaamLengte = voornaam.value.trim();
        let errorVoornaam = document.getElementById("errorVoornaam");

        if (voornaamLengte.length > 30) {
            errorVoornaam.innerHTML = "Error: Max. 30 karakters";
        }
    };

const valideerAchternaam= () =>{
    let achternaam= document.getElementById("Last-name").value;
    let errorAchternaam= document.getElementById("errorAchternaam");
    if(achternaam.length >50){
        errorAchternaam.innerHTML="Error: Max. 50 karakters";
    }else if(achternaam.length===0){
        errorAchternaam.innerHTML="Verplicht veld";
    }
}
window.addEventListener("load", setup); 