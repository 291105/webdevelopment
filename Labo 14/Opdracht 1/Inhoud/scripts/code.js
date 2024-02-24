const setup = () => {
    console.log(window.prompt("Wat is uw naam", "onbekend"));
    console.log(window.confirm("Weet u het zeker?"));
    window.alert("Dit is een mededeling");
}
window.addEventListener("load", setup); 