window.zorkalike = function () {
  // Return new literal each time
  return {
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
      text: "ENTERING: KITCHEN. A STAIRCASE LEADS UP YOU CAN SEE A FAINT LIGHT IN THE LIVING ROOM DUE WEST.",
      adjacent: ["S", "L"],
      items: {
        coffee: {
          inv_key: "coffee",
          display_name: "NUTRIGRAND™ COFFEE",
          desc: "ON THE TABLE IS A JAR OF NUTRIGRAND™ BRAND SOY-BASED CAFFEINATED COFFEE BEAN EQUIVALENT."
        }
      }
    },
    S: {
      name: "STAIRS",
      text: "ENTERING: STAIRS. IT IS PITCH BLACK AHEAD. YOU ARE LIKELY TO BE EATEN BY A TURBOGRUE.",
      adjacent: ["K", "A"]
    },
    L: {
      name: "LIVING ROOM",
      text: "ENTERING: LIVING ROOM. THE KITCHEN CAN BE SEEN TO THE EAST.",
      adjacent: ["S"],
      items: {
        sword: {
          inv_key: "sword",
          display_name: "FRTFY™ TURBOSWORD",
          desc: "THERE IS A FRTFY™ BRAND HOME DEFENSE TURBOSWORD ABOVE THE FIREPLACE."
        }
      }
    }
  }
};
