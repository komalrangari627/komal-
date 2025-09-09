/* ------------------ Digital Clock ------------------ */
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("digitalClock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

/* ------------------ Stopwatch ------------------ */
let stopwatchInterval;
let stopwatchTime = 0; // seconds

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

document.getElementById("startStopwatch").addEventListener("click", () => {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      document.getElementById("stopwatchDisplay").textContent = formatTime(stopwatchTime);
    }, 1000);
  }
});

document.getElementById("pauseStopwatch").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
});

document.getElementById("resetStopwatch").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").textContent = "00:00:00";
});

/* ------------------ Countdown Timer ------------------ */
let countdownInterval;
let countdownTime = 0;

document.getElementById("startCountdown").addEventListener("click", () => {
  const minutes = parseInt(document.getElementById("minutesInput").value) || 0;
  countdownTime = minutes * 60;

  if (countdownTime > 0) {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        alert("⏰ Time’s up!");
      } else {
        countdownTime--;
        document.getElementById("countdownDisplay").textContent = formatTime(countdownTime);
      }
    }, 1000);
  }
});

document.getElementById("resetCountdown").addEventListener("click", () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
  document.getElementById("countdownDisplay").textContent = "00:00:00";
  document.getElementById("minutesInput").value = "";
});

/* ------------------ Carousel Background Change ------------------ */
const carousel = document.getElementById('timeCarousel');

carousel.addEventListener('slid.bs.carousel', function () {
  const activeItem = document.querySelector('.carousel-item.active');
  const bgColor = activeItem.getAttribute('data-bg');
  document.body.style.background = bgColor;
});
