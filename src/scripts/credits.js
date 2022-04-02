window.add_credits = function(credits) {
  var audio = new Audio('./assets/creditadd.wav');
  var intervalid = setInterval(function() {
    audio.pause();
    audio = new Audio('./assets/creditadd.wav');
    audio.volume = 0.3;
    audio.play();
  }, 165);

  const countUp = new window.CountUp(
    'credvar',
    credits,
    { startVal: State.variables.credits }
  );

  if (!countUp.error) {
    countUp.start(function () { clearInterval(intervalid)});
  } else {
    console.error(countUp.error);
  }
}

window.update_credits = function(credits) {
  document.getElementById("credvar").textContent = State.variables.credits;
}
