window.makeAdjacencyButtonId = function() {
  return "button-" + guidGenerator();
}
window.zorkalike = {
  start: "K",
  A: {
    name: "ATTIC",
    text: "YOU ENTER THE ATTIC. <br> OH NO! YOU'VE WALKED INTO THE SLAVERING <br> FANGS OF A LURKING TURBOGRUE! <br> *** YOU HAVE DIED ***",
    adjacent: ["S"],
    die: true
  },
  K: {
    name: "KITCHEN",
    text: "YOU ENTER THE KITCHEN. ON THE TABLE IS A JAR OF NUTRIGRAND™ BRAND SOY-BASED CAFFEINATED COFFEE BEAN EQUIVALENT. A STAIRCASE LEADS UP YOU CAN SEE A FAINT LIGHT IN THE LIVING ROOM DUE WEST.",
    adjacent: ["S", "L"],
    item: {
      "coffee": "NUTRIGRAND™ COFFEE"
    }
  },
  S: {
    name: "STAIRS",
    text: "YOU MOUNT THE STAIRS. <br> IT IS PITCH BLACK AHEAD. <br> YOU ARE LIKELY TO BE EATEN BY A TURBOGRUE.",
    adjacent: ["K", "A"]
  },
  L: {
    name: "LIVING ROOM",
    text: "YOU ENTER THE LIVING ROOM <br> THERE IS A FRTFY™ BRAND HOME DEFENSE TURBOSWORD ABOVE THE FIREPLACE. <br> THE KITCHEN CAN BE SEEN TO THE EAST.",
    adjacent: ["S"],
    item: {
      "sword": "FRTFY™ TURBOSWORD"
    }
  }
}
