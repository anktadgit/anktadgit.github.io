window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("May 26, 1988 22:57:00 UTC", 'countup1'); // ****** Change this line!
    countUpFromTimeSec("May 26, 1988 22:57:00 UTC", 'countupsec'); // ****** Change this line!
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }

  function countUpFromTimeSec(countFromSec, id) {
    countFromSec = new Date(countFromSec).getTime();
    var nowSec = new Date(),
        countFromSec = new Date(countFromSec),
        timeDifferenceSec = (nowSec - countFromSec);
      
    var secondsInADaySec = 60 * 60 * 1000 * 24,
        secondsInAHourSec = 60 * 60 * 1000;

    secsSec = Math.floor(timeDifferenceSec / 1000 * 1);
    // % (60 * 1000)) / 1000 * 1
    var idSec = document.getElementById(id);
    idSec.getElementsByClassName('sec')[0].innerHTML = secsSec;

    clearTimeout(countUpFromTimeSec.interval);
    countUpFromTimeSec.interval = setTimeout(function(){ countUpFromTimeSec(countFromSec, id); }, 1000);
  }