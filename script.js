console.log('Hello from Nerdbord!')

setInterval(changeDivBorderColor, 1000);

function changeDivBorderColor(){
    let box = document.getElementsByClassName('box');
    let colors = ['#F97340','#197340','#EA7340', '#AAA340'];
    console.log(box[0]);
    let i = Math.floor(Math.random() * 3);
    box[0].setAttribute('style','border:40px solid '+colors[i]);
}
