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


setInterval(tickClock, 1000);  //task -1 :callback function

var anonymus = function(){
  tickClock()
}
setInterval(anonymus , 1000);  // task-2 : anonymus function

setInterval(() => {
  tickClock()
}, 1000);    // task-3 : arrow function