window.updateGameByUser = function(userId) {
  let game = State.variables.games[userId];
  if (game === undefined || game === null) {
    console.error("No such game for user: " + userId);
    return null;
  } else {
    State.variables.curgame = game;
    return game;
  }
}

window.focusbox = function(boxvar) {
  var v = document.getElementById("textbox-" + boxvar).value;

  if(v === "■") {
    document.getElementById("textbox-" + boxvar).value = "";
  }

  document.getElementById("textbox-" + boxvar).focus();
}

Macro.add('focusbox', {
  handler: function() {
    window.focusbox(this.args[0]);
  }
});
