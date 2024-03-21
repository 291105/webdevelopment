const setup = () => {
    veranderTekst();
}
    const veranderTekst= ()=> {
        let tekst = document.querySelector('p');
        tekst.textContent = "Good Job!";
    }
window.addEventListener("load", setup); 