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
let stopwatchTime = 0;

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

/* ------------------ Alarm Clock ------------------ */
let alarms = [];
let alarmSound = new Audio("./media/alarm.mp3"); 
alarmSound.volume = 1.0;   
alarmSound.loop = true;    
let ringingAlarmIndex = null;
let autoSnoozeTimer = null; // Track auto-snooze timeout

document.getElementById("setAlarmBtn").addEventListener("click", () => {
  let alarmInput = document.getElementById("alarmTime").value;
  if (!alarmInput) {
    alert("Please select a time!");
    return;
  }
  alarms.push(alarmInput);
  displayAlarms();
});

function displayAlarms() {
  let list = document.getElementById("alarmList");
  list.innerHTML = "";
  alarms.forEach((time, index) => {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    let buttons = `
      <button class="btn btn-warning btn-sm me-2" onclick="snoozeAlarm('${time}', ${index})">Snooze</button>
      <button class="btn btn-danger btn-sm" onclick="removeAlarm(${index})">Delete</button>
    `;

    if (ringingAlarmIndex === index) {
      buttons += `
        <button class="btn btn-secondary btn-sm ms-2" onclick="stopAlarm()">Stop</button>
      `;
    }

    li.innerHTML = `
      ${time}
      <div>${buttons}</div>
    `;
    list.appendChild(li);
  });
}

function removeAlarm(index) {
  alarms.splice(index, 1);
  if (ringingAlarmIndex === index) {
    stopAlarm();
  }
  displayAlarms();
}

function snoozeAlarm(time, index) {
  let [hours, minutes] = time.split(":").map(Number);
  let snoozeMinutes = parseInt(document.getElementById("snoozeSelect").value, 10);

  let snoozeTime = new Date();
  snoozeTime.setHours(hours, minutes);
  snoozeTime.setMinutes(snoozeTime.getMinutes() + snoozeMinutes);

  let snoozeFormatted = snoozeTime.getHours().toString().padStart(2, "0") + ":" + 
                        snoozeTime.getMinutes().toString().padStart(2, "0");

  alarms.push(snoozeFormatted);

  if (ringingAlarmIndex === index) {
    stopAlarm(false); // false → don’t re-snooze again inside stop
  }

  removeAlarm(index);
  displayAlarms();
  alert(`⏰ Snoozed for ${snoozeMinutes} minutes! New alarm at ${snoozeFormatted}`);
}

function stopAlarm(autoSnooze = true) {
  if (ringingAlarmIndex !== null) {
    alarmSound.pause();
    alarmSound.currentTime = 0;

    // Cancel auto-snooze timer
    if (autoSnoozeTimer) {
      clearTimeout(autoSnoozeTimer);
      autoSnoozeTimer = null;
    }

    // If user pressed Stop, also snooze with set minutes
    if (autoSnooze) {
      let snoozeMinutes = parseInt(document.getElementById("snoozeSelect").value, 10) || 5;
      let now = new Date();
      now.setMinutes(now.getMinutes() + snoozeMinutes);

      let snoozeFormatted = now.getHours().toString().padStart(2, "0") + ":" + 
                            now.getMinutes().toString().padStart(2, "0");

      alarms.push(snoozeFormatted);
      alert(`😴 Alarm stopped & snoozed for ${snoozeMinutes} minutes! New alarm at ${snoozeFormatted}`);
    } else {
      alert("🔕 Alarm stopped.");
    }

    ringingAlarmIndex = null;
    displayAlarms();
  }
}

// Check alarms every second
setInterval(() => {
  let now = new Date();
  let current = now.getHours().toString().padStart(2, "0") + ":" + 
                now.getMinutes().toString().padStart(2, "0");

  alarms.forEach((time, index) => {
    if (time === current && ringingAlarmIndex === null) {
      ringingAlarmIndex = index;
      alarmSound.play().catch(err => {
        console.log("Autoplay blocked. User must interact first.", err);
        alert("⏰ Alarm time reached, but browser blocked sound. Click anywhere to enable sound.");
      });
      alert("⏰ Alarm ringing for " + time);
      displayAlarms();

      // Auto-snooze after 5 seconds if user does nothing
      autoSnoozeTimer = setTimeout(() => {
        if (ringingAlarmIndex !== null) {
          let snoozeMinutes = parseInt(document.getElementById("snoozeSelect").value, 10) || 5;
          let newTime = new Date();
          newTime.setMinutes(newTime.getMinutes() + snoozeMinutes);

          let snoozeFormatted = newTime.getHours().toString().padStart(2, "0") + ":" + 
                                newTime.getMinutes().toString().padStart(2, "0");

          alarms.push(snoozeFormatted);
          stopAlarm(false); // Stop without re-snoozing again
          alert(`😴 Auto-snoozed for ${snoozeMinutes} minutes! New alarm set at ${snoozeFormatted}`);
          displayAlarms();
        }
      }, 5000);
    }
  });
}, 1000);


/* ------------------ Carousel Background Change ------------------ */
const carousel = document.getElementById('timeCarousel');
carousel.addEventListener('slid.bs.carousel', function () {
  const activeItem = document.querySelector('.carousel-item.active');
  const bg = activeItem.getAttribute('data-bg');
  document.getElementById("themeBackground").style.background = bg;
});

/* ------------------ Falling Theme Effects ------------------ */
function setTheme(theme) {
  // Remove any previous falling elements
  document.querySelectorAll('.falling').forEach(el => el.remove());

  if (theme === "balloon") {
    createFalling("🎈", 25);
  } 
  else if (theme === "star") {
    createFalling("⭐", 25);
  } 
  else if (theme === "flower") {
    createFalling("🌸", 25);
  } 
  else if (theme === "playful") {
    createFalling("🎨", 25);
  }
  else if (theme === "butterfly") {
    createFalling("🦋", 20);
  }
}

function createFalling(symbol, count) {
  for (let i = 0; i < count; i++) {
    let span = document.createElement("span");
    span.textContent = symbol;
    span.className = "falling";
    span.style.position = "fixed";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = "-50px";
    span.style.fontSize = Math.random() * 30 + 20 + "px";
    span.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
    document.body.appendChild(span);
  }
}

/* Falling Animation */
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}
.falling {
  pointer-events: none;
  animation-fill-mode: forwards;
}
`;
document.head.appendChild(style);
