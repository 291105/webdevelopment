const setup = () => {
    let button=document.getElementById("nieuw");
    button.addEventListener("click", nieuwSpelStarten)
    button.focus();
    document.getElementById('gokken').addEventListener('click', klik);

    let divhighscores= document.getElementById('highscores');
    let ol= document.createElement('ol');
    divhighscores.appendChild(ol);

    let deletehighscoreKnop= document.getElementById('clear');
    deletehighscoreKnop.addEventListener('click', deleteHigscoreLijst);
}

let global ={
    ARRAYWOORDEN: ["stoel", "hotel", "tafel", "kater", "water"],
    RANDOMWOORD: "",
    gokken: 0,
    spelerNaam: "",
    HIGH_SCORE: []
}

//Als je klikt op nieuwspel dan zal je pop up krijgen van je naam button verdwijnt en je go button werkt
const nieuwSpelStarten= ()=>{
    global.gokken=0;
    //Als er nog gokken staan deze eerst verwijderen en input veld terug available maken
    let parentDiv= document.getElementById('gokken')
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild); // Verwijdert telkens de eerste child
    }
    document.getElementById('gok').disabled= false;
    document.getElementById('go').classList.remove('hidden');


    const invoer= prompt('Wat is je naam?');
    global.spelerNaam= invoer;

    let button=document.getElementById("nieuw");
    button.classList.add("hidden")
    button.focus();

    let goButton= document.getElementById("go");
    goButton.addEventListener("click", controleerLengteWoord)

    // Roep de functie aan om een random woord te kiezen wanneer een nieuw spel begint
    kiesRandomWoord();
}

const controleerLengteWoord= () =>{
    let woord= document.getElementById("gok").value;
    let aantalLetters= woord.length;
    if (aantalLetters===5){
        checkWoorden();
    }
}

const kiesRandomWoord = () => {
    let randomGetal= Math.floor(Math.random() * global.ARRAYWOORDEN.length);
    global.RANDOMWOORD= global.ARRAYWOORDEN[randomGetal];
}

const checkWoorden=()=>{
    //Ik tel 1 bij mijn gok
    global.gokken+=1;
    //haal het woord op
    let woord= document.getElementById("gok").value.toLowerCase();

    let randomwoord= global.RANDOMWOORD;

    //Zet je woord op je site
    let outerDiv= document.getElementById("gokken");
    let innerDiv= document.createElement('div');
    outerDiv.appendChild(innerDiv);
    //controleren welke gelijk zijn, welke gebruikt worden en welke niet gebruikt worden
    for (let i = 0; i < woord.length; i++) {
        let div = document.createElement('div');

        if (woord[i] === randomwoord[i]) {
            div.setAttribute('class', 'juist');
        } else if (randomwoord.indexOf(woord[i]) !== -1 && randomwoord.indexOf(woord[i]) !== i) {
            div.setAttribute('class', 'bevat');
        } else {
            div.setAttribute('class', 'fout');
        }

        div.innerText = woord[i];
        innerDiv.appendChild(div);
    }
    stopspel();
}
//Als je op een letter klikt dan word hij even blauw en verschijnt tekstje met uitleg
const klik = (event) =>{
    let outerDiv= document.getElementById('game');
    let innerDiv= document.createElement('div');
    let letter= event.target.innerText;

    if(event.target.classList.contains('juist')){
        innerDiv.setAttribute('class', 'help');
        innerDiv.innerText= "De letter " + letter + " staat op de juiste plaats";
        outerDiv.appendChild(innerDiv);
    } else if (event.target.classList.contains('bevat')){
        innerDiv.setAttribute('class', 'help');
        innerDiv.innerText= "De letter " + letter + " bestaat in het woord maar staat nog niet juist";
        outerDiv.appendChild(innerDiv);
    } else{
        innerDiv.setAttribute('class', 'help');
        innerDiv.innerText= "De letter " + letter + " bestaat niet in het woord";
        outerDiv.appendChild(innerDiv);
    }
    setTimeout(() => {
        outerDiv.removeChild(innerDiv);
    }, 2500);
}

//Als je het woord raad stopt het spel
//Niet meer mogelijk een gok in te voeren
//Highscore aanvullen
//highscores altijd gesorteerd minste gokken vanboven
//worden opgeslagen dat als je herlaadt dat de highscores blijven staan
const stopspel = () =>{
    let outerDiv = document.getElementById('gokken');
    let innerDivs = outerDiv.children;
    let laatsteInnerDiv = innerDivs[innerDivs.length - 1];
    let letterDivs = laatsteInnerDiv.children;

    //Ik hou een variabele bij de bijhoudt hoeveel juiste klassen er zijn, als dit gelijk is aan 5 dan stopt het spel
    let aantalJuistKlassen=0;
    for (let i=0; i<letterDivs.length; i++){
        if (letterDivs[i].classList.contains('juist')){
            aantalJuistKlassen += 1;
        }
    }
    if (aantalJuistKlassen===5){
        document.getElementById('go').classList.add('hidden');
        document.getElementById('gok').value="";
        document.getElementById('gok').disabled= true;
        let button=document.getElementById("nieuw");
        button.classList.remove("hidden")
        maakHighScore();
    }
}
const sorteerHighscore = () => {
    // Haal de ol op
    let ol = document.querySelector('ol');

    // Sorteer de li elementen op basis van het aantal gokken (kleinste aantal gokken eerst)
    let sortedLiElements = Array.from(ol.children).sort((a, b) => {
        let aGokken = parseInt(a.textContent.match(/\d+/)[0]); // Haal het aantal gokken uit tekst van het eerste li element
        let bGokken = parseInt(b.textContent.match(/\d+/)[0]); // Haal het aantal gokken uit tekst van het tweede li element
        return aGokken - bGokken; // Sorteer op basis van aantal gokken
    });

    // Verwijder de bestaande li elementen
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }

    // Voeg de gesorteerde li elementen opnieuw toe aan de ol
    sortedLiElements.forEach(li => {
        global.HIGH_SCORE+= li;
        ol.appendChild(li);
    });
}
const maakHighScore = () => {
    // Maak het nieuwe li-element
    let datumvandaag = new Date();
    let maandNamen = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    let maandNaam = maandNamen[datumvandaag.getMonth()];
    let datum = "[" + datumvandaag.getDate() + " " + maandNaam + " om " + datumvandaag.getHours() + ":" + datumvandaag.getMinutes() + "]";
    let li = document.createElement('li');
    li.innerHTML = global.spelerNaam + ": " + global.gokken + " gok(ken)<br>" + "\n" + datum;

    // Voeg het nieuwe li-element toe aan de highscores
    let ol = document.querySelector('ol');
    ol.appendChild(li);

    // Sorteer de highscores opnieuw
    sorteerHighscore();
}

const deleteHigscoreLijst =()=>{
    let parentDiv= document.querySelector('ol');
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild); // Verwijdert telkens de eerste child
    }
}
window.addEventListener("load", setup);