let personen = [{
    voornaam: 'Jan',
    familienaam: 'Janssens',
    geboorteDatum: new Date('2010-10-10'),
    email: 'jan@example.com',
    aantalKinderen: 0
},
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    let voornaam= document.getElementById("txtVoornaam").value;
    let achternaam= document.getElementById("txtFamilienaam").value;
    let geboortedatum= document.getElementById("txtGeboorteDatum").value;
    let email= document.getElementById("txtEmail").value;
    let aantalKinderen= document.getElementById("txtAantalKinderen").value;
    //de if werkt niet moet verplaatst worden naar change event
    let lstPersonen= document.getElementById("lstPersonen");

    if (lstPersonen.selectedIndex===-1){
        if (zijnErErrors()===false){
            let index= personen.length.toString();
            let select= document.getElementById("lstPersonen");
            let option= document.createElement('option');
            select.appendChild(option);
            option.setAttribute('id', index);
            option.textContent= voornaam + " " + achternaam;

            personen.push(
                {
                    voornaam: voornaam,
                    familienaam: achternaam,
                    geboorteDatum: new Date(geboortedatum),
                    email: email,
                    aantalKinderen: aantalKinderen
                })
        }

    } else{
        if (zijnErErrors()===false){
            let index=lstPersonen.selectedIndex
            personen[lstPersonen.selectedIndex].voornaam = voornaam;
            personen[lstPersonen.selectedIndex].familienaam = achternaam;
            personen[lstPersonen.selectedIndex].geboorteDatum = new Date(geboortedatum);
            personen[lstPersonen.selectedIndex].email = email;
            personen[lstPersonen.selectedIndex].aantalKinderen = aantalKinderen;
        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

    let input= document.querySelectorAll('input')
    for(let i=1; i<input.length-1; i++){
        input[i].value="";
    }
    let legeArray= [];
    personen=legeArray;

};

const plaatsStaandaardSituatie = () =>{
    let lijst = document.getElementById("lstPersonen");
    for (let i =0;i<3;i++){//QB
        let maakOption = document.createElement("option");
        maakOption.textContent = personen[i].voornaam+" "+personen[i].familienaam
        maakOption.setAttribute("value",personen[i].voornaam+personen[i].familienaam)
        lijst.appendChild(maakOption);
    }
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.addEventListener("change",change)

    plaatsStaandaardSituatie();
};

const zijnErErrors = () =>{
    let spans = document.getElementsByClassName("errorMessage");
    let heeftErrors = false;

    for (let i =0;i<spans.length;i++){
        if(spans[i].textContent.length!==0){
            heeftErrors = true;
        }
    }//QB
    return heeftErrors;
}
const change = (event) =>{
    let persoonOpWieGeklikt= event.target.selectedIndex;

    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById('txtFamilienaam');
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById('txtEmail');
    let aantalKinderen = document.getElementById('txtAantalKinderen');
    voornaam.value = personen[persoonOpWieGeklikt].voornaam;
    familienaam.value = personen[persoonOpWieGeklikt].familienaam;
    geboortedatum.value = personen[persoonOpWieGeklikt].geboorteDatum.toLocaleDateString('en-CA');
    email.value = personen[persoonOpWieGeklikt].email;//QB
    aantalKinderen.value = personen[persoonOpWieGeklikt].aantalKinderen;
}
window.addEventListener("load", setup);