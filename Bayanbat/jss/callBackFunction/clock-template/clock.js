const clockSection = document.getElementById("clock");

function getTime() {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const now = new Date();

  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${hh}:${mm}:${ss}`;
}

function tickClock() {
  clockSection.textContent = getTime();
}
// TASK-1
// setInterval(tickClock, 1000);


// TASK-2
// setInterval(function(){clockSection.textContent = getTime()},1000);

// TASK-3 
tickClock();
setInterval(function(){clockSection.textContent = getTime()},1000);