const setup = () => {
    zetRandomKaarten();
}

let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    GEDRAAIDE_KAARTEN: [] // Array om bij te houden welke kaarten zijn gedraaid
}

let zetRandomKaarten = () => {
    //const flipsound= new Audio("../Sound/turningCard.mp3");
    let images = document.getElementsByTagName("img");
    let fotoArray = ["../images/kaart1.jpg", "../images/kaart1.jpg", "../images/kaart2.jpg", "../images/kaart2.jpg",
        "../images/kaart3.jpg", "../images/kaart3.jpg", "../images/kaart4.jpg", "../images/kaart4.jpg", "../images/kaart5.jpg", "../images/kaart5.jpg",
        "../images/kaart6.jpg", "../images/kaart6.jpg"];

    for (let i = 0; i < images.length; i++) {
        let random = Math.floor(Math.random() * fotoArray.length);
        images[i].setAttribute("data-kaart", fotoArray[random]); // Voeg een attribuut toe om bij te houden welke afbeelding er achter de kaart zit
        images[i].addEventListener("click", draaiKaart); // Voeg een click event listener toe aan elke afbeelding
        //flipsound.play();
        images[i].src = "../images/achterkantKaart.png"; // Stel de achterkant van de kaart in als de standaardafbeelding
        fotoArray.splice(random, 1); // Verwijder de gebruikte afbeelding uit de array
    }
}

let draaiKaart = (event) => {
    let afbeelding = event.target;
    let achterkant = "../images/achterkantKaart.png";
    let voorkant = afbeelding.getAttribute("data-kaart");

    if (!global.GEDRAAIDE_KAARTEN.includes(afbeelding)) {
        afbeelding.src = voorkant; // Draai de kaart om

        global.GEDRAAIDE_KAARTEN.push(afbeelding); // Voeg de gedraaide kaart toe aan de array

        if (global.GEDRAAIDE_KAARTEN.length === 2) {
            let eersteKaart = global.GEDRAAIDE_KAARTEN[0];
            let tweedeKaart = global.GEDRAAIDE_KAARTEN[1];

            if (eersteKaart.getAttribute("data-kaart") === tweedeKaart.getAttribute("data-kaart")) {
                // Match gevonden, verwijder de kaarten
                eersteKaart.style.border = "10px solid green";
                tweedeKaart.style.border = "10px solid green";
                setTimeout(() => {
                    eersteKaart.style.visibility = "hidden";
                    tweedeKaart.style.visibility = "hidden";
                }, 1000);
            } else {
                eersteKaart.style.border = "10px solid red";
                tweedeKaart.style.border = "10px solid red";
                // Geen match, draai de kaarten terug naar de achterkant na 1 seconde
                setTimeout(() => {
                    eersteKaart.src = achterkant;
                    tweedeKaart.src = achterkant;
                    eersteKaart.style.border= "10px solid darkmagenta";
                    tweedeKaart.style.border= "10px solid darkmagenta";
                }, 1000);
            }

            global.GEDRAAIDE_KAARTEN = []; // Leeg de array voor de volgende beurt
        }
    }
}

window.addEventListener("load", setup);