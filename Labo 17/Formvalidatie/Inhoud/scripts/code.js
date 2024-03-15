const setup = () => {
    let button= document.getElementById("button");
    button.addEventListener("click", valideren)
}

const valideren= () =>{
    valideerVoornaam();
    valideerAchternaam();
    valideerDatum();
    valideerEmail();
    valideerAantalKinderen();
    proficiat();
}
    const valideerVoornaam= ()=> {
        let voornaam = document.getElementById("First-name");
        let voornaamLengte = voornaam.value.trim();
        let errorVoornaam = document.getElementById("errorVoornaam");

        if (voornaamLengte.length > 30) {
            voornaam.className= "error";
            errorVoornaam.innerHTML = "Error: Max. 30 karakters";
        }else{
            voornaam.className="";
            errorVoornaam.className="";
        }
    };

const valideerAchternaam= () =>{
    let achternaam= document.getElementById("Last-name");
    let errorAchternaam= document.getElementById("errorFamilienaam");
    let achternaamTekst = achternaam.value.trim();

    if(achternaamTekst.length===0){
        achternaam.className="error";
        errorAchternaam.innerHTML="Verplicht veld";

    }else if (achternaamTekst.length > 50){
        achternaam.className="error";
        errorAchternaam.innerHTML="Error: Max. 50 karakters";

    }else{
        achternaam.className="";
        errorAchternaam.innerHTML="";

    }
}

const valideerDatum= () =>{
    let geboortedatum= document.getElementById("date");
    let errorDatum= document.getElementById("errorDatum");
    let geboortedatumTekst = geboortedatum.value.trim();

    if (geboortedatumTekst.length ===0) {
        geboortedatum.className="error";
        errorDatum.innerHTML = "verplicht veld";
    } else {
        geboortedatum.className="";
        errorDatum.innerHTML = "";
    }
    if(geboortedatumTekst.includes("-",4)&&geboortedatumTekst.includes("-",7)){
        let lijstElementenGeboortedatum = geboortedatumTekst.split("-");
        if(lijstElementenGeboortedatum[0].length===4 &&isGetal(lijstElementenGeboortedatum[0])
            &&lijstElementenGeboortedatum[1].length===2 &&isGetal(lijstElementenGeboortedatum[1])
            &&lijstElementenGeboortedatum[2].length===2 &&isGetal(lijstElementenGeboortedatum[2])){

            geboortedatum.className="";
            errorDatum.innerHTML = "";

        }else{
            geboortedatum.className="error";
            errorDatum.innerHTML = "formaat is niet jjjj-mm-dd";
        }
    }else {
        geboortedatum.className = "error";
        errorDatum.innerHTML = "formaat is niet jjjj-mm-dd";
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const valideerEmail = () => {
    let email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");
    let emailTekst = email.value.trim();

    if(emailTekst.length ===0){
        email.className="error";
        errorEmail.innerHTML = "verplicht veld";

    }else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorEmail.innerHTML = "geen geldig email adres";
        email.className="error";
    } else{

        email.className="";
        errorEmail.innerHTML = "";
    }
};

const valideerAantalKinderen = () => {
    let tekstAantalKinderen = document.getElementById("aantalKinderen");
    let errorKinderen = document.getElementById("errorAantalKinderen");
    let aantalKinderenTekst= tekstAantalKinderen.value.trim();
    if (isGetal(aantalKinderenTekst)){
        if (aantalKinderenTekst >98) {
            tekstAantalKinderen.className="error";
            errorKinderen.innerHTML = "is te vruchtbaar";
        } else if(aantalKinderenTekst<0){
            tekstAantalKinderen.className="error";
            errorKinderen.innerHTML = "is geen positief getal";

        } else {
            tekstAantalKinderen.className="";
            errorKinderen.innerHTML = "";
        }
    }

};

const proficiat= () =>{
    let aantalErrors= document.getElementsByClassName("error");
    if(aantalErrors.length===0){
        window.alert("proficiat");
    }
}

window.addEventListener("load", setup);
