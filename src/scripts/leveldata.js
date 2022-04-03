window.zorkalike = {
  start: "K",
  failtext: "<nowiki>*** YOU HAVE DIED ***</nowiki>",
  task: "HELP USER FIND LOADLTR™ PARCHMENT",
  A: {
    name: "ATTIC",
    text: "ENTERING: ATTIC. OH NO! YOU'VE WALKED INTO THE SLAVERING FANGS OF A LURKING TURBOGRUE!",
    adjacent: ["S"],
    fail: true
  },
  K: {
    name: "KITCHEN",
    text: "ENTERING: KITCHEN. ON THE TABLE IS A JAR OF NUTRIGRAND™ BRAND SOY-BASED CAFFEINATED COFFEE BEAN EQUIVALENT. A STAIRCASE LEADS UP YOU CAN SEE A FAINT LIGHT IN THE LIVING ROOM DUE WEST.",
    adjacent: ["S", "L"],
    item: {
      "coffee": "NUTRIGRAND™ COFFEE"
    }
  },
  S: {
    name: "STAIRS",
    text: "ENTERING: STAIRS. IT IS PITCH BLACK AHEAD. YOU ARE LIKELY TO BE EATEN BY A TURBOGRUE.",
    adjacent: ["K", "A"]
  },
  L: {
    name: "LIVING ROOM",
    text: "ENTERING: LIVING ROOM. THERE IS A FRTFY™ BRAND HOME DEFENSE TURBOSWORD ABOVE THE FIREPLACE. THE KITCHEN CAN BE SEEN TO THE EAST.",
    adjacent: ["S"],
    item: {
      "sword": "FRTFY™ TURBOSWORD"
    }
  }
}
