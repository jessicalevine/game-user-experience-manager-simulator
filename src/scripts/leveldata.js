window.zorkalike = function () {
  // Return new literal each time
  return {
    start: "K",
    failtext: "<nowiki>*** YOU HAVE DIED ***</nowiki>",
    task: "HELP USER FIND LOADLTR™ PARCHMENT",
    A: {
      name: "ATTIC",
      text: "ENTERING: ATTIC. OH NO! YOU'VE WALKED INTO THE SLAVERING FANGS OF A LURKING SUPERTURBOGRUE!",
      adjacent: ["S"],
      fail: { cond: "always" }
    },
    K: {
      name: "KITCHEN",
      text: "ENTERING: KITCHEN. A STAIRCASE LEADS UP. YOU CAN SEE A FAINT LIGHT IN THE LIVING ROOM DUE WEST. YOU SEE A BASEMENT BELOW.",
      adjacent: ["S", "L", "B"]
      // items: {
      //   coffee: {
      //     inv_key: "coffee",
      //     display_name: "NUTRIGRAND™ COFFEE",
      //     desc: "ON THE TABLE IS A JAR OF NUTRIGRAND™ BRAND SOY-BASED CAFFEINATED COFFEE BEAN EQUIVALENT."
      //   }
      // }
    },
    S: {
      name: "STAIRS",
      text: "ENTERING: STAIRS. IT IS PITCH BLACK AHEAD. YOU ARE LIKELY TO BE EATEN BY A SUPERTURBOGRUE.",
      adjacent: ["K", "A"]
    },
    L: {
      name: "LIVING ROOM",
      text: "ENTERING: LIVING ROOM. THE KITCHEN CAN BE SEEN TO THE EAST.",
      adjacent: ["K"],
      items: {
        sword: {
          inv_key: "sword",
          display_name: "FRTFY™ TURBOSWORD",
          desc: "THERE IS A FRTFY™ BRAND HOME DEFENSE TURBOSWORD ABOVE THE FIREPLACE."
        }
      }
    },
    B: {
      name: "BASEMENT",
      text: "ENTERING: BASEMENT. THE KITCHEN CAN BE SEEN UPSTAIRS. TO YOUR WEST IS A DARK CORNER, WHERE YOU ARE LIKELY TO BE EATEN BY A SUPERTURBOGRUE. TO YOUR EAST YOU CAN SEE AN OFFICE, GUARDED BY A WHOLE BUNCH OF SKELLINGTONS.",
      adjacent: ["K", "O", "D"]
    },
    O: {
      name: "OFFICE",
      text: "YOU ATTEMPT TO DEFEAT A WHOLE BUNCH OF SKELLINGTONS WITH YOUR BARE HANDS. IT DOESN'T WORK.",
      wintext: "HEFTING YOUR TRUSTY FRTFY™ BRAND TURBOSWORD, YOU HACK THROUGH THE SKELLINGTONS LIKE NUTRIGRAND™ SYNTHBUTTER. BEHIND THEM FLOATS A MYSTICAL SHEET OF PREMIUM LOADLTR™ PARCHMENT. YOU GRASP IT FROM THE AIR. YOU WIN!",
      adjacent: ["B"],
      fail: { cond: "without", arg: "sword" },
      win: true
    },
    D: {
      name: "DARK PLACE",
      text: "ENTERING: DARK PLACE. OH NO! YOU'VE WALKED INTO THE SLAVERING FANGS OF A LURKING SUPERTURBOGRUE!",
      adjacent: ["B"],
      fail: { cond: "always" }
    }
  }
};
