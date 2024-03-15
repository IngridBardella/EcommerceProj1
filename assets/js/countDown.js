function updateCountdown() {
    const countdownElement = document.querySelector(".countdown");
    const targetDate = new Date(countdownElement.getAttribute("data-date")).getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
  
    if (timeRemaining <= 0) {
      // Countdown has expired
      countdownElement.innerHTML = "Countdown expired!";
      return;
    }
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    const countdownHTML = `
      <div class="countdown-holder">
        <div class="dday">${days} D</div>
      </div>
      <div class="countdown-colon">:</div>
      <div class="countdown-holder">
        <div class="dhour">${hours} H</div>
      </div>
      <div class="countdown-colon">:</div>
      <div class="countdown-holder">
        <div class="dmin">${minutes} M</div>
      </div>
      <div class="countdown-colon">:</div>
      <div class="countdown-holder">
        <div class="dsec">${seconds} S</div>
      </div>
    `;
  
    countdownElement.innerHTML = countdownHTML;
  }
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  
  // Initial update
  updateCountdown();