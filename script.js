const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

let currentRotation = 0;

spinBtn.addEventListener("click", () => {

  const prize = Math.floor(Math.random() * 4);

  const segmentAngle = 90;

  const targetAngle =
      (360 * 5) +
      (360 - (prize * segmentAngle));

  currentRotation += targetAngle;

  wheel.style.transform =
      `rotate(${currentRotation}deg)`;

  const prizes = [
    "1000円",
    "2500円",
    "5000円",
    "15000円"
  ];

  setTimeout(() => {
    alert("You won: " + prizes[prize]);
  }, 5000);

});
