function startCountdown(targetDate) {
  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("timer").style.display = "none";
      document.getElementById("datetime").textContent = "Мы стали семьей!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

const newYear = new Date(2026, 6, 7, 0, 0, 0).getTime();
startCountdown(newYear);

const button = document.querySelector(".button");
button.addEventListener("touchstart", function (e) {
  this.classList.add("touch-pressed");
});

button.addEventListener("touchend", function (e) {
  this.classList.remove("touch-pressed");
});