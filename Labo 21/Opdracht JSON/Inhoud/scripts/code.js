const setup = () => {
    let student1 ={
        voornaam: "Nena",
        achternaam: "Sterckx",
        geboorteDatum: new Date(2005,11,29),
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk" },
        isIngeschreven : true,
        aantalAutos : 13
    }
    let tekst= JSON.stringify(student1);
    console.log(tekst);
}
window.addEventListener("load", setup); 