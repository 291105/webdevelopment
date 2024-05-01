const setup = () => {
    let historyArray = JSON.parse(localStorage.getItem("array")) || [];
    global.array = historyArray;

    for (let i = 0; i < historyArray.length; i++) {
        history(historyArray[i].titel, historyArray[i].text, historyArray[i].link);
    }

    let button = document.getElementById("button");
    button.addEventListener("click", zoekOpdracht);
}

let global = {
    array: []
}

const zoekOpdracht =() =>{
    //Hiermee kijk ik wat er bij de \ staat
    let zoekopdracht= document.getElementById("zoekopdracht").value;
    //Hiermee kijk ik wat er na de \... staat om te weten wat ik moet invoeren
    let zoekopdrachtIngetypt= zoekopdracht.split(" ");
    let link= "";
    let volledigeZoekOpdracht= "";
    if(zoekopdrachtIngetypt[0].trim()==="/g"){
        link= "https://www.google.com/search?q=" + zoekopdrachtIngetypt[1].trim();
        volledigeZoekOpdracht= zoekopdrachtIngetypt[1];
        for(let i=2; i<zoekopdrachtIngetypt.length; i++){
            link+= "+" + zoekopdrachtIngetypt[i].trim();
            volledigeZoekOpdracht+= " " + zoekopdrachtIngetypt[i];
        }
        open(link);
        let card ={
            titel: "Google",
            text: volledigeZoekOpdracht,
            link: link
        };
        global.array.push(card);
        history(card.titel, card.text, card.link);
    }
    else if (zoekopdrachtIngetypt[0].trim()==="/y"){
        link="https://www.youtube.com/results?search_query=" + zoekopdrachtIngetypt[1].trim()
        volledigeZoekOpdracht= zoekopdrachtIngetypt[1];
        for(let i=2; i<zoekopdrachtIngetypt.length; i++){
            link+= "+" + zoekopdrachtIngetypt[i].trim();
            volledigeZoekOpdracht+= " " + zoekopdrachtIngetypt[i];
        }
        open(link);
        let card ={
            titel: "Youtube",
            text: volledigeZoekOpdracht,
            link: link
        };
        global.array.push(card);
        history(card.titel, card.text, card.link);
    }
    else if (zoekopdrachtIngetypt[0].trim()==="/x"){
        link="https://www.twitter.com/hastag/" + zoekopdrachtIngetypt[1].trim()
        volledigeZoekOpdracht= zoekopdrachtIngetypt[1];
        for(let i=2; i<zoekopdrachtIngetypt.length; i++){
            link+= "+" + zoekopdrachtIngetypt[i].trim();
            volledigeZoekOpdracht+= " " + zoekopdrachtIngetypt[i];
        }
        open(link);
        let card ={
            titel: "Twitter",
            text: volledigeZoekOpdracht,
            link: link
        };
        global.array.push(card);
        history(card.titel, card.text, card.link);
    }
    else if (zoekopdrachtIngetypt[0].trim()==="/i") {
        link = "https://www.instagram.com/explore/tags/" + zoekopdrachtIngetypt[1].trim() + "/"
        open(link);

        let card = {
            titel: "Instagram",
            text: zoekopdrachtIngetypt[1],
            link: link
        };
        global.array.push(card);
        history(card.titel, card.text, card.link);
    }
    else{
        window.alert("foute prefix")
    }
    document.getElementById("zoekopdracht").value="";
    console.log(global.array);
    localStorage.setItem("array", JSON.stringify(global.array));

    refreshHistory();
}
let refreshHistory = () =>{
    f
}
let history =(titel, text, link)=>{
    let div= document.createElement("div");
    document.body.appendChild(div);
    let h3= document.createElement("h3");
    h3.textContent=titel;
    div.appendChild(h3);
    let p= document.createElement("p");
    p.textContent=text;
    div.appendChild(p);
    let button= document.createElement("button");
    button.textContent= "Go!"
    button.addEventListener("click", () => open(link));
    div.appendChild(button);
    div.className= titel;
}

window.addEventListener("load", setup); 