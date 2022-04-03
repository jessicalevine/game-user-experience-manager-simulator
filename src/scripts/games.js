function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.newGame = function() {
  let game = {
    user: getRandomInt(10000000, 99999999),
    quest_name: "zorkalike",
    status: "active",
    turn: 0
  }

  game.quest = function() {
    return window[game.quest_name];
  }

  return game;
}
