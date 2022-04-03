window.guemCommand = function(cmd_str) {
  if(cmd_str === undefined) {
    console.error("No command entered.");
    return;
  }
  let cmd_arr = cmd_str.toLowerCase().split(" ")
  let cmd = cmd_arr[0]
  
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
    target.remove();
  }
}
