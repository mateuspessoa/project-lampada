const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn () {
        lamp.src = 'imagens/ligada.jpg';
}

function lampOff () {
        lamp.src = 'imagens/desligada.jpg';
}

function lampBroken () {
    lamp.src = 'imagens/quebrada.jpg'
}



turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener ('dblclick', lampBroken);