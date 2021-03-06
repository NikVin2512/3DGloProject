'use sctrict';

const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  
  let intervalId;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dataNow = new Date().getTime();
    let timeRemaining = (dateStop - dataNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    
    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if(getTime.hours < 10) {
      timerHours.textContent = '0' + getTime.hours;
    } else {
      timerHours.textContent = getTime.hours;
    }
    if(getTime.minutes < 10) {
      timerMinutes.textContent = '0' + getTime.minutes;
    }
    else {
      timerMinutes.textContent = getTime.minutes;
    }
    if(getTime.seconds < 10) {
      timerSeconds.textContent = '0' + getTime.seconds;
    }
    else {
      timerSeconds.textContent = getTime.seconds;
    }


    if (getTime.timeRemaining > 0) {
      // setTimeout(updateClock, 1000);
      intervalId = setInterval(updateClock, 1000);

    } else  {
      timerHours.textContent =  '00';
      timerMinutes.textContent =  '00';
      timerSeconds.textContent = '00';
      clearInterval(intervalId);
    }
    
  };
  updateClock();
  
  
};


export default timer;