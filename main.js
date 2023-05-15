const diedAnimal = document.getElementById('dead')
const lostPunch = document.getElementById('lost')
const speedTest = document.getElementById('speed');

let speed = parseInt(speedTest.innerHTML);

let dieCounter = 0;
let missCounter = 0;

let maxTries = 3;
let winAnimals = 5;
let speedChange = 100;


document.addEventListener('click', function(event) {
    let clickedElem = event.target;
    let classList = clickedElem.classList

    if (classList[1]) {
        dieCounter+=1
        speed-=speedChange
    }
    else {
        missCounter+=1
    };

    diedAnimal.innerHTML = dieCounter;
    lostPunch.innerHTML = missCounter;

    if (dieCounter >= winAnimals) {
        alert("Вы выиграли.");
        location.reload();
    }
    if (missCounter >= maxTries) {
        alert("Вы проиграли.");
        location.reload();
    }
});

