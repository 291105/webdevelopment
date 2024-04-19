const setup = () => {
    let today= new Date();
    let verjaardag= new Date(2005,11,29);
    let verschil= new Date(today-verjaardag);
    let inDagen= Math.floor((verschil/3600)/24)
    console.log(inDagen);
}
window.addEventListener("load", setup); 