window.add_credits = function(credits) {
  let audio = new Audio('./assets/creditadd.wav');
  let intervalid = setInterval(function() {
    audio.pause();
    audio = new Audio('./assets/creditadd.wav');
    audio.volume = 0.3;
    audio.play();
  }, 165);

  let new_credits = State.variables.credits + credits;
  let cred_cont_elem = document.getElementById("credit-tbar");
  if (new_credits > 1) {
    cred_cont_elem.classList.remove("negative-credits");
  }

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

window.removeCredits = function(credits, oncomplete = function(){}) {
  let cred_cont_elem = document.getElementById("credit-tbar");
  let cred_elem = document.getElementById("credvar");
  cred_cont_elem.classList.add("quest-failure");

  let old_credits = State.variables.credits;
  let new_credits = State.variables.credits - credits;

  let audio = new Audio('./assets/creditloss.wav');
  audio.volume = 0.8;
  audio.play();

  const countUp = new window.CountUp(
    'credvar',
    new_credits,
    { startVal: State.variables.credits }
  );

  State.variables.credits = new_credits;

  if (!countUp.error) {
    countUp.start(function () {
      cred_elem.innerHTML = new_credits;
      if (new_credits < 1) {
        if (old_credits > 0) {
          State.variables.toast = {
            text: "< YOU NO LONGER HAVE ENOUGH CREDITS TO PAY FOR SERVER TIME. LUCKILY, WE WILL GENEROUSLY OFFER YOU A LOAN, WHICH YOU MAY PAY BACK WITH INTEREST AT A LATER DATE. CONTINUE WORKING.>",
            ontype: function (ev) { }
          };
        }
        cred_cont_elem.classList.add("negative-credits");
      }

      cred_cont_elem.classList.remove("quest-failure");
      oncomplete();
    });
  } else {
    console.error(countUp.error);
  }
}
