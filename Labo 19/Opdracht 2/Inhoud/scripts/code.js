const setup = () => {
    roodMaken();
    maakEenImgElement();
}

const roodMaken= () =>{
    let li= document.querySelectorAll('li');
    for (let i=0; i<li.length; i++){
        li[i].className="listitem";
    }
}

const maakEenImgElement=() =>{
    let image= document.createElement('img');
    image.setAttribute( 'src', 'https://scontent.fbru2-1.fna.fbcdn.net/v/t1.15752-9/431246146_1228957681279051_1133887725504821049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dMUS5Rrema0AX---r7E&_nc_ht=scontent.fbru2-1.fna&oh=03_AdTHh5RPk0T6ZElra9uVaIBAOUozFuPbjmSjSNMFPEOD_A&oe=66216A3B' );
    document.body.appendChild(image);
}
window.addEventListener("load", setup);