
let segundos = 6;
let countdown = document.getElementById('countdown');
let result = document.getElementById('result');
let interval;
const gifcontainer = document.getElementById('gifContainer');

function cpuMove() {
    return Math.floor(Math.random() * 3) +1;
}

function validateInput(input) { //validar que el input es 1, 2 o 3
    return input >= 1 && input <= 3;
}

function timer() {
    interval = setInterval(() => {
    console.log(`${segundos} segundos.`)
    segundos--;
    countdown.textContent = segundos;
    if (segundos === 1) {
        clearInterval(interval);
    }
}, 1000)};

function play() {
    result.textContent = '';
    const cpuNumber = cpuMove();
    const userInput = document.getElementById('userInput').value;
     if (validateInput(userInput)) {
        timer();
        setTimeout(() => {
            const comparisonResult = '';
            if (userInput == cpuNumber) {
                result.textContent = '¡Has salvado el mundo!'
                const gif = document.createElement('img');
                gif.src = '/img/thumb-7936_512.gif'
                gif.classList = 'gifimg'
                gifcontainer.appendChild(gif)
            } else {
                result.textContent ='La bomba ha estallado'
                const gif = document.createElement('img');
                gif.src = '/img/explosion-12681_512.gif'
                gif.classList = 'gifimg'
                gifcontainer.appendChild(gif)
            }
            countdown.textContent = `Usuario: ${userInput} - Máquina: ${cpuNumber}`;
            console.log(comparisonResult);
        }, 6000); // Espera a que el temporizador termine
    } else {
        result.textContent = 'Porfavor, ingrese solo 1, 2 o 3'
    }
}

function resetPage() {
    location.reload() //resetea la página
}

const reset = document.getElementById('restart').addEventListener('click', resetPage)

document.getElementById('userInput').addEventListener('blur', play);




//const comparisonResult = (userInput == cpuNumber) ? '¡Has salvado el mundo!' : 'La bomba ha estallado';