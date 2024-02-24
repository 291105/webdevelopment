const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}
let substring = () =>{
    let txtInput= document.getElementById("txtInput")
    let text= txtInput.value
    let txtGetal = document.getElementById("txtGetal")
    let eersteGetal= txtGetal.value
    let txtGetal2 = document.getElementById("txtGetal2")
    let tweedeGetal= txtGetal2.value
    let resultaat= text.substring(eersteGetal, tweedeGetal);
    txtOutput.innerHTML= resultaat;

}
window.addEventListener("load", setup); 