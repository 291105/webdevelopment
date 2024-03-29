const setup = () => {
    let button= document.getElementById("start");
    button.addEventListener("click", startGame);
};

let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
let startGame = () =>{
    //Hier zorg ik dat mijn button verdwijnt
    let button= document.getElementById("start");
    button.className= "verstopStartbutton";
    //hier zorg ik dat:
    verplaatsenVeranderenImage(); //er komt een afbeelding op het scherm
    let image= document.getElementById("target");
    image.addEventListener("click", controlerenBom); //klikken is controleren bom en daar roep ik veranderen image op
     //zorgen dat er geen interval loopt anders problemen met de tijd
    global.timeoutId= setInterval(verplaatsenVeranderenImage, global.MOVE_DELAY); //nieuw interval opzetten
}
let controlerenBom=()=>{
    let tekst= document.getElementById("tekst");
    let image= document.getElementById("target");
    if (image.src.includes("images/0.png")) {
        stopSpel();
        alert('BOOM, GAME OVER');
    } else {
        global.score++;
        tekst.textContent= global.score;
        verplaatsenVeranderenImage();
        clearInterval(global.timeoutId);
    }
}
let verplaatsenVeranderenImage=()=>{
    let image= document.getElementById("target");

    let x= 2+ (Math.random()*750);
    let y = 2+ (Math.random()*550);

    image.style.left= y + "px";
    image.style.top= x + "px"

    let imagesArray= [ "images/0.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png" ];

    let random= Math.floor(Math.random() * imagesArray.length);

    image.src= imagesArray[random];
}
let stopSpel=()=>{
    let button= document.getElementById("start");
    button.className= "";

    let image= document.getElementById("target");
    image.src=" ";
    let tekst= document.getElementById("tekst");
    global.score=0;
    tekst.textContent= global.score;
    clearInterval(global.timeoutId);
}




window.addEventListener("load", setup);


