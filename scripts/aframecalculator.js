import {canvas, context, colors, addResizeEventListener} from './common/canvas.js';

const form = document.getElementById('form');
addResizeEventListener(() => {
    const formBounds = form.getBoundingClientRect();
    if (formBounds.width * 2 > window.innerWidth) {
        canvas.style.position = 'static';
        canvas.width = window.innerWidth - 17;
        canvas.height = window.innerHeight;
    } else {
        canvas.style.position = 'fixed';
        canvas.style.left = 'calc(' + formBounds.right + 'px + 1em)';
        canvas.style.top = '0';
        canvas.style.right = window.innerWidth + 'px';
        canvas.style.bottom = window.innerHeight + 'px';
        const canvasStyle = window.getComputedStyle(canvas);
        canvas.width = pixelsToInt(canvasStyle.right) - pixelsToInt(canvasStyle.left);
        canvas.height = window.innerHeight;
    }

    context.strokeStyle = colors[0];
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(canvas.width, canvas.height);
    context.stroke();

});

function pixelsToInt(str) {
    return parseInt(str.replace('px', ''));
}

let preCalculated = {};
const generalInputs = document.getElementsByClassName('general');
document.getElementById('clearCalculated').onclick = () => {
    for (let i = 0; i < generalInputs.length; i++) {
        document.getElementById(generalInputs[i].id).value = preCalculated[generalInputs[i].id];
    }
}
form.addEventListener('submit', (event) => event.preventDefault());
form.onsubmit = () => {
    for (let i = 0; i < generalInputs.length; i++) {
        preCalculated[generalInputs[i].id] = generalInputs[i].value;
    }
}