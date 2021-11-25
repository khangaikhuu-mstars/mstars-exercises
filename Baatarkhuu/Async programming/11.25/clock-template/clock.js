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


// // 1.
// tickClock();
// setInterval(tickClock, 1000);
// 2.
tickClock();
setInterval(()=>{clockSection.textContent = getTime();}, 1000)