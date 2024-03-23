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

	let saveKnop= document.getElementById("save");
	saveKnop.addEventListener("click", saveVierkant);
}

const saveVierkant=()=>{
	//maak 2 divs aan 1tje voor sectie 1tje voor vierkant en hierin maak ik een verwijderknop met input en deze verwijderd mijn vierkant als ik erop klik
	//Ook zorg ik dat mijn vierkantje gevuld word met het kleur die op dat moment op mijn hoofdvierkant staat
	let outerDiv= document.createElement('div');
	let innerDiv= document.createElement('div');
	innerDiv.classList.add("colorDemo");

	let verwijderKnopMaken= document.createElement('input');
	verwijderKnopMaken.setAttribute("type", "button");
	verwijderKnopMaken.setAttribute("value", "X");
	verwijderKnopMaken.className='verwijderen';
	innerDiv.appendChild(verwijderKnopMaken);
	outerDiv.appendChild(innerDiv);
	document.body.appendChild(outerDiv);


	let knoppen= document.getElementsByClassName("verwijderen");
	for (let i=0; i<knoppen.length; i++){
		knoppen[i].addEventListener("click", verwijderVierkant);
	}

	let colors= document.getElementsByClassName("colorDemo");
	let sliders= document.getElementsByClassName("slider");
	let valueRed=sliders[0].value;
	let valueGreen=sliders[1].value;
	let valueBlue=sliders[2].value;
	let rgb= 'rgb(' + valueRed + ', ' + valueGreen + ', ' + valueBlue + ')';
	colors[colors.length-1].style.backgroundColor=rgb;

	vierkantKlik();
}
const verwijderVierkant=(event) =>{
	event.target.parentElement.parentElement.remove();
}
const vierkantKlik=()=>{
	let gemaakteVierkanten= document.getElementsByClassName("colorDemo");
	for (let i=0; i<gemaakteVierkanten.length; i++){
		gemaakteVierkanten[i].addEventListener("click", veranderHoofdVierkantKleur);
	}
}
const veranderHoofdVierkantKleur= (event)=>{
	let color= document.getElementsByClassName("colorDemo");
	let rgbwaardes= event.target.getAttribute('style').slice(21).trim().replace("(", "").replace(")","").replace(";","").split(",");

	let valueRed=rgbwaardes[0].trim();
	let valueGreen=rgbwaardes[1].trim();
	let valueBlue=rgbwaardes[2].trim();

	let nieuweRgb ="rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";
	color[0].style.backgroundColor = nieuweRgb;


	let kleuren= document.querySelectorAll(".individueleKleuren")

	kleuren[0].textContent= "Rood: " + valueRed;
	kleuren[1].textContent= "Groen: " +valueGreen;
	kleuren[2].textContent= "Blauw: " + valueBlue;

	let sliderInnerlijk= document.querySelectorAll(".slider");

	sliderInnerlijk[0].value = valueRed;
	sliderInnerlijk[1].value = valueGreen;
	sliderInnerlijk[2].value = valueBlue;
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