const setup = () => {
    let student= JSON.parse('{"voornaam":"Nena","achternaam":"Sterckx","geboorteDatum":"2005-12-28T23:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"aantalAutos":13}');
    console.log(student.geboorteDatum);
}
window.addEventListener("load", setup); 