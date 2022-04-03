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
    turn: getRandomInt(0, 5)
  }

  game.quest = function() {
    return window[game.quest_name];
  }

  return game;
}
