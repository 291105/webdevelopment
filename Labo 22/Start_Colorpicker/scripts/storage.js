let opslaan= () =>{


    let color= {
        red: valueRed,
        green: valueGreen,
        blue: valueBlue
    };
    global.colors.push(color);

    let vierkantKleur= JSON.stringify(global.colors)
    localStorage.setItem("favorieten", vierkantKleur);




}

const storeSliderValues = () => {
    let sliders = document.getElementsByClassName("slider");
    let slider1= JSON.stringify(sliders[0].value)
    let slider2= JSON.stringify(sliders[1].value)
    let slider3= JSON.stringify(sliders[2].value)
    localStorage.setItem("slider1", slider1)
    localStorage.setItem("slider2", slider2)
    localStorage.setItem("slider3", slider3)
};

const restoreSliderValues = () => {

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten

};

const restoreSwatches = () => {

};
