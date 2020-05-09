const startTime = new Date();
const intervalMsec = 20 * 1000;
setInterval(updateClock, 16);
function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = (intervalMsec - (new Date() - startTime))/1000;
}


const btnDigits = document.querySelectorAll('.digits button');
btnDigits.forEach( digit => digit.addEventListener('click', digitPressed));

const display = document.querySelector('.display');

function digitPressed(ev) {
   display.value += ev.target.innerText;
}

const btnOpers = document.querySelectorAll('.opers button');
btnOpers.forEach( digit => digit.addEventListener('click', operPressed));

function operPressed(ev) {
   display.value += ev.target.innerText;
}

const btnEq = document.querySelector('.eq');
btnEq.addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}
