window.focusbox = function() {
  var v = document.getElementById("textbox-username").value;

  if(v === "■") {
    document.getElementById("textbox-username").value = "";
  }

  document.getElementById("textbox-username").focus()
}
