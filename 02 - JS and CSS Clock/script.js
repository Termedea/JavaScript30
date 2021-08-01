const elemSecondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  const secondsDegrees = calcDegrees(now.getSeconds(), 60);
  const minutesDegrees = calcDegrees(now.getMinutes(), 60);
  const hoursDegrees = calcDegrees(now.getHours(), 12);

  console.log(now.getSeconds());

  setClockHand(document.querySelector('.second-hand'), secondsDegrees);
  setClockHand(document.querySelector('.min-hand'), minutesDegrees);
  setClockHand(document.querySelector('.hour-hand'), hoursDegrees);
}

function calcDegrees(time, base) {
  return (time / base) * 360 + 90;
}

function setClockHand(elem, deg) {
  elem.style.transform = `rotate(${deg}deg)`;
}
setInterval(setDate, 1000);
