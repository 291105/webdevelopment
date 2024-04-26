//Begonnen met de oplossing van quinten uit vorig labo
//aangezien hij goed punten had en ik mijn eigen code niet meer begreep.
// Hierdoor zie je veel gelijkenissen maar dit is niet door overschrijven van dit labo

let global ={
	gesavedeRgbWaarden: []
}
const setup = () => {
	//haal favoriete kleuren op
	let arrayMetRGBWaarden= JSON.parse(localStorage.getItem("favorieten"));
	//Haal methode op die laatste geselecteerde kleur ophaalt
	if (arrayMetRGBWaarden!==null){
		maakHetGeselecteerdeKleurBijSetup();
	}

	let sliders = document.getElementsByClassName("slider");
	let saveButton = document.querySelector('#saveButton');
	saveButton.addEventListener('click', save);

	for(let i=0; i<sliders.length;i++){
		sliders[i].addEventListener("change", updateColor);
		sliders[i].addEventListener("input", updateColor);
	}
	updateColor();

	//haal methode op die op de pagina zet
	if (arrayMetRGBWaarden!==null){
		haalGesavedeLocaleKleuren();
	}
}

const klik = (event) => {
	let sliders = document.getElementsByClassName("slider");
	let color = document.getElementsByClassName("color");

	let valueRed= event.target.getAttribute("data-rood");
	let valueGreen= event.target.getAttribute("data-groen");
	let valueBlue= event.target.getAttribute("data-blauw");

	let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";
	color[0].style.backgroundColor = rgb;
	let span = document.getElementsByTagName("span");
	span[0].textContent = "Rood"+valueRed;
	span[1].textContent = "Groen"+valueGreen;
	span[2].textContent = "Blauw"+valueBlue;
	let sliderElementen = document.querySelectorAll(".slider");

	sliderElementen[0].value = valueRed;
	sliderElementen[1].value = valueGreen;
	sliderElementen[2].value = valueBlue;
	haalOpWatOpSliderStond();
};

const updateColor = () =>{
	let sliders = document.getElementsByClassName("slider");
	let color = document.getElementsByClassName("color");
	let valueRed=sliders[0].value;
	let valueGreen=sliders[1].value;
	let valueBlue=sliders[2].value;
	let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";

	color[0].style.backgroundColor = rgb;
	let span = document.getElementsByTagName("span");
	span[0].textContent = "Rood"+valueRed;
	span[1].textContent = "Groen"+valueGreen;
	span[2].textContent = "Blauw"+valueBlue;
	haalOpWatOpSliderStond();
}

const aanmakenVierkant= (rood, groen, blauw) =>{
	let newDivBuitenste = document.createElement('div');
	newDivBuitenste.className = 'vanBlock';
	let newDivBinnenste = document.createElement('div');
	newDivBinnenste.className = 'color';

	let verwijderButton = document.createElement('input');
	verwijderButton.setAttribute('type', 'button');
	verwijderButton.setAttribute('value', 'X');
	verwijderButton.className= 'verwijderKnop';
	newDivBinnenste.appendChild(verwijderButton);
	newDivBuitenste.appendChild(newDivBinnenste)
	document.body.appendChild(newDivBuitenste);

	//Geef de divs attributen zelf gevonden dus data ervoor met dan de waarde van het kleur
	newDivBinnenste.setAttribute("data-rood", rood);
	newDivBinnenste.setAttribute("data-groen", groen);
	newDivBinnenste.setAttribute("data-blauw", blauw);
	//geef de vierkant kleur
	newDivBinnenste.style.background= "rgb(" + rood + "," + groen + "," + blauw + ")";

	global.gesavedeRgbWaarden.push(
		{
			rood: rood,
			groen: groen,
			blauw: blauw
		}
	);
	let jsonStringRbg= JSON.stringify(global.gesavedeRgbWaarden);
	localStorage.setItem("favorieten", jsonStringRbg);

	let color= document.getElementsByClassName("color");
	let rgb ="rgb("+rood+","+groen+","+blauw+")";
	color[color.length-1].style.backgroundColor = rgb;

	let knoppen=document.querySelectorAll(".verwijderKnop");
	for (let i=0;i<knoppen.length;i++) {
		knoppen[i].addEventListener("click", verwijderBlok);
	}
}
const save =() =>{
	let sliders = document.getElementsByClassName("slider");
	let valueRed=sliders[0].value;
	let valueGreen=sliders[1].value;
	let valueBlue=sliders[2].value;
	aanmakenVierkant(valueRed, valueGreen, valueBlue);
}
const verwijderBlok = (event) =>{
	event.target.parentElement.parentElement.remove();
	event.stopPropagation();
	slaArrayOpAlsEenBlokVerwijderdWord();
}
// Eerst haal ik alle waarden op daarna zal ik methodes maken om ze uit opslag te halen
const haalGesavedeLocaleKleuren = ()=>{
	let gesavedeRgbWaarden= JSON.parse(localStorage.getItem("favorieten"));

	for (let i=0; i<gesavedeRgbWaarden.length; i++){
		aanmakenVierkant(gesavedeRgbWaarden[i].rood, gesavedeRgbWaarden[i].groen, gesavedeRgbWaarden[i].blauw);
	}
}

const haalOpWatOpSliderStond= ()=>{
	//Ik haal de sliders op
	let sliders= document.getElementsByClassName("slider");
	let valueRed= sliders[0].value;
	let valueGreen= sliders[1].value;
	let valueBlue= sliders[2].value;
	 // Ik push de waarden in een array zodat snel alle waarden kan ophalen
	let kleuren=[];
	kleuren.push(valueRed);
	kleuren.push(valueGreen);
	kleuren.push(valueBlue);
	let stringWatOpSliderStondRGB= JSON.stringify(kleuren);

	localStorage.setItem("laatstGeselecteerd", stringWatOpSliderStondRGB);
}

const maakHetGeselecteerdeKleurBijSetup=()=>{
	// haal de lijst op
	let laatsteGeselecteerd= JSON.parse(localStorage.getItem("laatstGeselecteerd"));

	//haal de waarde op
	let valueRood= laatsteGeselecteerd[0];
	let valueGroen= laatsteGeselecteerd[1];
	let valueBlauw= laatsteGeselecteerd[2];

	//Haal de span op met de tekst op en het de juiste waarde
	let span= document.getElementsByTagName("span");
	span[0].textContent="Rood"+valueRood;
	span[1].textContent="Groen"+valueGroen;
	span[2].textContent="Blauw"+valueBlauw;

	//Haal de slider op en verander de value
	let sliders= document.querySelectorAll(".slider");
	sliders[0].value=valueRood;
	sliders[1].value= valueGroen;
	sliders[2].value= valueBlauw;

	//Geef de vierkant het juiste kleur
	let color= document.getElementsByClassName("color");
	let rgbWaarden="rgb("+valueRood+","+valueGroen+","+valueBlauw+")";
	color[0].style.background= rgbWaarden;
}

//deze methode slaat de array op als er een blok verwijderd word
const slaArrayOpAlsEenBlokVerwijderdWord = (event) =>{
	let color = document.getElementsByClassName("color");
	localStorage.removeItem("favorieten");
	let stoppen = false;
	while(stoppen ===false){
		global.gesavedeRgbWaarden.pop();
		if (global.gesavedeRgbWaarden.length===0){
			stoppen=true;
		}
	}

	for(let i =1;i<color.length;i++){
		let valueRed=color[i].getAttribute("data-rood")
		let valueGreen=color[i].getAttribute("data-groen");
		let valueBlue=color[i].getAttribute("data-blauw");
		let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";

		global.gesavedeRgbWaarden.push(
			{
				rood: valueRed,
				groen: valueGreen,
				blauw: valueBlue

			});
	}
	let stringMetAlleRGBWaarden = JSON.stringify(global.gesavedeRgbWaarden);
	localStorage.setItem("favorieten",stringMetAlleRGBWaarden );
}




window.addEventListener("load", setup);