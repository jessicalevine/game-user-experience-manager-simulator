window.guemCommand = function(cmd_str) {
  if(cmd_str === undefined) {
    console.error("No command entered.");
    return;
  }

  cmd_str = cmd_str.replace('[', '');
  cmd_str = cmd_str.replace(']', '');
  cmd_str = cmd_str.replace('<', '');
  cmd_str = cmd_str.replace('>', '');

  // Clear command
  document.getElementById("textbox-command").value = null;

  let cmd_arr = cmd_str.toLowerCase().split(" ")
  let cmd = cmd_arr[0]

  // Commands cost server time
  window.removeCredits(2);
  
  if(cmd === "delete") {
    if(cmd_arr.length < 2) {
      console.error("No delete target.");
      return;
    }

    let target_str = cmd_arr[1]

    // GUEMS numbers certain elements and gives them a reserved ID to make them
    // easy to delete when a user specifies that simple integer as the target
    // ...isNaN is close enough for a jam
    if(!isNaN(target_str)) {
      target_str = "reserved-" + target_str;
    }

    let target = document.getElementById(target_str);
    if(target === undefined || target === null) {
      console.error("Delete target does not exist.");
      return;
    }

    if(window.getActiveFakeButtonIds().length < 2) {
      State.variables.toast = {
        text: "< YOUR GAME USER EXPERIENCE MANAGER MANAGER HAS PREVENTED YOU FROM LOCKING YOURSELF HERE FOREVER. REMEMBER: THEIR PAYCHECK DEPENDS ON YOU. >",
        ontype: function (ev) { }
      };
      Engine.play("User Screen");
      return;
    }

    target.remove();

    let audio = new Audio('./assets/deletecmd.wav');
    audio.volume = 0.5;
    audio.play();
  }
}
