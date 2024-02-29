const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", updateRed);
	sliders[0].addEventListener("input", updateRed);
	sliders[1].addEventListener("change", updateGreen);
	sliders[1].addEventListener("input", updateGreen);
	sliders[2].addEventListener("change", updateBlue);
	sliders[2].addEventListener("input", updateBlue);

	// maak het blokje rood
	updateColor();
}

const updateRed = () => {
	let sliders = document.getElementsByClassName("slider");
	let valueRed=sliders[0].value;
	console.log("de waarde van de rode slider is momenteel : "+valueRed);
	updateColor();
}
const updateGreen= ()=>{
	let sliders= document.getElementsByClassName("slider");
	let valueGreen=sliders[1].value;
	console.log("de waarde van de groene slider is momenteel : "+valueGreen);
	updateColor();
}
const updateBlue= ()=>{
	let sliders= document.getElementsByClassName("slider");
	let valueBlue=sliders[2].value;
	console.log("de waarde van de blauwe slider is momenteel : "+valueBlue);
	updateColor();
}
const updateColor= ()=>{
	let color= document.getElementsByClassName("colorDemo");
	let sliders= document.getElementsByClassName("slider");
	let valueRed=sliders[0].value;
	let valueGreen=sliders[1].value;
	let valueBlue=sliders[2].value;
	let rgb= 'rgb(' + valueRed + ', ' + valueGreen + ', ' + valueBlue + ')';
	color[0].style.backgroundColor= rgb;

	document.getElementById("rood").innerHTML= "Rood: " + valueRed;
	document.getElementById("groen").innerHTML= "Groen: " + valueGreen;
	document.getElementById("Blue").innerHTML= "Blauw: " + valueBlue ;
}










// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);