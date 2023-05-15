const cookie = document.getElementById('cookie')
const clickerCounter = document.getElementById('clicker__counter')
const clickerSpeed = document.getElementById('clicker__speed');

let count = 0;

let prevCount = 0;
let prevTime = Date.now();

window.addEventListener('click', function(event) {
    if (event.target === cookie) {
        if (cookie.style.height == '150px') {
            cookie.style.height = '120px';
            cookie.style.width = '200px';
        } else {
            cookie.style.height = '150px';
            cookie.style.width = '250px';
        }
        count++
        clickerCounter.innerHTML = count;
    }
});

function updateClickerSpeed() {
    let deltaTime = Date.now() - prevTime;
    let deltaCount = count - prevCount;
    console.log(deltaTime, deltaCount)
    let clickerSpeedValue = Math.floor((deltaCount / deltaTime) * 1000)
    clickerSpeed.innerHTML = `${clickerSpeedValue} кликов/сек`;
    
    prevTime = Date.now();
    prevCount = count;
  };

setInterval(updateClickerSpeed, 1000);