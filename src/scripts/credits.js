window.add_credits = function(credits) {
  let audio = new Audio('./assets/creditadd.wav');
  let intervalid = setInterval(function() {
    audio.pause();
    audio = new Audio('./assets/creditadd.wav');
    audio.volume = 0.3;
    audio.play();
  }, 165);

  let new_credits = State.variables.credits + credits;

  const countUp = new window.CountUp(
    'credvar',
    new_credits,
    { startVal: State.variables.credits }
  );

  State.variables.credits = new_credits;

  if (!countUp.error) {
    countUp.start(function () { clearInterval(intervalid)});
  } else {
    console.error(countUp.error);
  }
}
