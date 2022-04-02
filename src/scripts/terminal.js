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
