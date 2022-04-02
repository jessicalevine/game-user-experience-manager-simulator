window.focusbox = function(boxvar) {
  console.log("func");
  console.log(boxvar);
  var v = document.getElementById("textbox-" + boxvar).value;

  if(v === "■") {
    document.getElementById("textbox-" + boxvar).value = "";
  }

  document.getElementById("textbox-" + boxvar).focus();
}

Macro.add('focusbox', {
  handler: function() {
    console.log(this);
    window.focusbox(this.args[0]);
  }
});
