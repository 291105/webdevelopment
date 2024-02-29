const setup = () => {
    let btnBereken= document.getElementById("herbereken");
    btnBereken.addEventListener("click", ophalen)
}
const ophalen= () =>{
    //aantallen ophalen
    let inputs= document.getElementsByClassName("input");
    let input1= inputs[0].value;
    let input2= inputs[1].value;
    let input3= inputs[2].value;

    //ophalen prijs
    let prijzen= document.getElementsByClassName("prijs");
    let prijs1= parseFloat(prijzen[0].textContent);
    let prijs2= parseFloat(prijzen[1].textContent);
    let prijs3= parseFloat(prijzen[2].textContent);

    //ophalen btw
    let btw= document.getElementsByClassName("btw");
    let btw1= parseFloat(btw[0].textContent);
    let btw2= parseFloat(btw[1].textContent);
    let btw3= parseFloat(btw[2].textContent);

    //brekenen prijsen zonder btw per product
    let product1= input1* prijs1;
    let product2= input2*prijs2;
    let product3= input3*prijs3;

    //berekenen prijs van de btw
    let btwPrijs1= (product1* btw1)/100;
    let btwPrijs2= (product2* btw2)/100;
    let btwPrijs3= (product3* btw3)/100;

    //bereken resultaat subtotaal
    let resultaat1= product1+btwPrijs1;
    let resultaat2= product2+btwPrijs2;
    let resultaat3= product3+btwPrijs3;

    //in de tabel zetten
    document.getElementById("subtotaal1").innerHTML= resultaat1 + " EUR";
    document.getElementById("subtotaal2").innerHTML= resultaat2 + " EUR";
    document.getElementById("subtotaal3").innerHTML= resultaat3 + " EUR";

    //berkenen totaal
    let totaal= resultaat1 + resultaat2+ resultaat3;
    document.getElementById("totaal").innerHTML= totaal + " EUR"
}
window.addEventListener("load", setup); 