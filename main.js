var oldLocation = document.location

const timerElement = document.getElementById('timer');
let remainingTime = 2 // в секундах

function updateTimer() {
    let remainingSeconds = Math.floor(remainingTime);
    let hours = Math.floor(remainingSeconds / 3600);
    let minutes = Math.floor((remainingSeconds - hours * 3600) / 60);
    let seconds = remainingSeconds - hours * 3600 - minutes * 60;

    const timerDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerElement.innerHTML = timerDisplay;
    remainingTime -= 1


  if (remainingTime < 0) {
    clearInterval(timer);
    alert('Вы победили в конкурсе');
    timerElement.innerHTML = '00:00:00';
    location = "https://soundpad-soft.ru/wp-content/uploads/2022/06/Shvarc-Huligany.mp3";
  }
}

const timer = setInterval(updateTimer, 1000);

