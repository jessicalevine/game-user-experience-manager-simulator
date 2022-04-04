function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.genUserListGames = function() {
  let len = Object.keys(State.variables.games).length;
  if (len === 0) {
    generateActiveGames(3);
  } else {
    generateActiveGames(1);
  }
}

window.generateActiveGames = function(count = 1) {
  for (let i = 0; i < count; i++) {
    let game = window.newGame();
    State.variables.games[game.user] = game;
  }
  return State.variables.games;
}

window.newGame = function() {
  let game = {
    user: getRandomInt(100000, 999999),
    quest: window.zorkalike(),
    status: "ACTIVE",
    turn: getRandomInt(0, 5),
    // inventory: [window.zorkalike()["L"].items.sword]
    inventory: []
  }

  return game;
}

window.buttonsForGameLoc = function(loc) {
  let buttons = [];
  let dom_id_num = 1;

  for(let i = 0; i < loc.adjacent.length; i++) {
    // Based on names of adjacent tiles, get tile data
    let adj_tile = State.variables.curgame.quest[loc.adjacent[i]];

    buttons.push({
      dom_id: "reserved-" + dom_id_num,
      display_text: `${dom_id_num}: ${adj_tile.name}`,
      action_type: "travel",
      leveldata_key: loc.adjacent[i]
    });
    dom_id_num++;
  }

  let item_keys = Object.keys(loc.items || []);
  for(let i = 0; i < item_keys.length; i++) {
    // Based on names of adjacent tiles, get tile data
    let item_display_name = loc.items[item_keys[i]].display_name;

    // Hash of reserved DOM ID to item object
    buttons.push({
      dom_id: "reserved-" + dom_id_num,
      display_text: `${dom_id_num}: ${item_display_name}`,
      action_type: "pickup",
      leveldata_key: item_keys[i]
    });
    dom_id_num++;
  }

  return buttons;
}

window.getActiveFakeButtonIds = function() {
  let ids = [];
  document.querySelectorAll("div.fake-button").forEach(function(button) { ids.push(button.id) });
  return ids;
}

window.getTextForLoc = function(loc) {
  let text = loc.text;
  let items = loc.items || {};
  let item_keys = Object.keys(items);
  item_keys.forEach(function(key) {
    text = text + " " + items[key].desc;
  });
  return text;
}

window.didUserFail = function(curgame) {
  let fail = curgame.loc.fail;
  if (fail === undefined || fail === null) {
    return false;
  }

  if (fail.cond === "always") {
    return true;
  } else if (fail.cond === "without") {
    console.log("in cond check");
    console.log(curgame.inventory);
    console.log(fail.arg)

    let without_item = true;
    curgame.inventory.forEach(function(item) {
      if (item.inv_key === fail.arg) {
        console.log(item.inv_key === fail.arg)
        without_item = false;
      }
    });
    
    console.log("has")
    return without_item;
  }

  console.error("Unrecognized fail cond");
  return false;
}

window.didUserWin = function(curgame) {
  let win = curgame.loc.win;
  if (win === undefined || win === null) {
    return false;
  }

  return win;
}
window.getInventoryString = function() {
  let str = "";
  State.variables.curgame.inventory.forEach(function(item) {
    str = "< " + item.display_name + " >";
  });
  return str;
}
