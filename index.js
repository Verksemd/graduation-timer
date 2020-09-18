document.addEventListener("DOMContentLoaded", function() {

  const graduationTime = document.querySelector('#graduationTime');
  const countdownContainer = document.querySelector('#countdown');
  const daysCountdown = document.querySelector('#days');
  const hoursCountdown = document.querySelector('#hours');
  const minutesCountdown = document.querySelector('#minutes');
  const secondsCountdown = document.querySelector('#seconds');

  let currentTime = new Date();
  let yearOfTheEvent = currentTime.getFullYear();
  let eventDate = new Date(yearOfTheEvent, 5, 21);
  const isItJune21th = currentTime.getMonth() === 5 && currentTime.getDate() === 21;

  function countdown() {
    const now = new Date();
    currentTime = now.getTime();
    const eventTime = eventDate.getTime();
    const remainingTime = eventTime - currentTime;

    if (now > eventDate) {
      eventDate = new Date(yearOfTheEvent + 1, 5, 21);
    } else if (now.getFullYear() === eventDate.getFullYear() + 1) {
      eventDate = new Date(now.getFullYear(), 5, 21);
    }

    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    if (isItJune21th) {
      console.log("You've won!");
      countdownContainer.style.display = "none";
      graduationTime.style.display = "block";
    }
    else {
      daysCountdown.textContent = days;
      hoursCountdown.textContent = hours;
      minutesCountdown.textContent = minutes;
      secondsCountdown.textContent = seconds;

      setTimeout(countdown, 100);
    }
  }
  countdown();

  })






