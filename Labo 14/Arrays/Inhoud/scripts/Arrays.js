const setup = () => {
    const familie=['Nena', 'Zoë', 'Jitse', 'Melinda', 'Guy']
    console.log(familie.length)
    console.log(familie[0])
    console.log(familie[2])
    console.log(familie[4])
    const voegNaamToe = () => {
        const invoer= prompt('Geef een familielid die je wilt toevoegen ')
        familie.push(invoer)
        console.log(familie)
    }
    voegNaamToe();
    console.log(familie.join());
}
window.addEventListener("load", setup);