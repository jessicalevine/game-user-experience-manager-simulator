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
    quest_name: "zorkalike",
    status: "ACTIVE",
    turn: getRandomInt(0, 5),
    inventory: []
  }

  game.quest = function() {
    return window[game.quest_name];
  }

  return game;
}

window.buttonsForGameLoc = function(loc) {
  let buttons = [];
  let dom_id_num = 1;

  for(let i = 0; i < loc.adjacent.length; i++) {
    // Based on names of adjacent tiles, get tile data
    let adj_tile = window.zorkalike[loc.adjacent[i]];

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
